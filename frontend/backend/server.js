const express = require("express");
const cors = require("cors");
const generateQuiz = require("./generateQuiz");
const axios = require("axios");
const { careerRecommendationPrompt } = require("./promptTemplates");

require("dotenv").config();

// Helper function for safe object stringification
function safeStringify(obj, indent = 2) {
  const cache = new Set();
  return JSON.stringify(
    obj,
    (key, value) => {
      if (typeof value === "object" && value !== null) {
        if (cache.has(value)) {
          return "[Circular Reference]";
        }
        cache.add(value);
      }
      return value;
    },
    indent
  );
}

// Set up request logging
const requestLogger = (req, res, next) => {
  const timestamp = new Date().toISOString();
  console.log(`[${timestamp}] ${req.method} ${req.url}`);
  console.log(`Headers: ${safeStringify(req.headers)}`);
  console.log(`Query: ${safeStringify(req.query)}`);
  if (req.body && Object.keys(req.body).length > 0) {
    console.log(`Body: ${safeStringify(req.body)}`);
  }

  // Capture the response
  const originalSend = res.send;
  res.send = function (body) {
    const responseContent =
      typeof body === "string"
        ? body
        : safeStringify(body).substring(0, 200) + "...";
    console.log(
      `[${timestamp}] Response: ${res.statusCode} ${responseContent}`
    );
    return originalSend.apply(this, arguments);
  };

  next();
};

const app = express();

// Use Render's dynamic port or fallback to 5000 locally
const PORT = process.env.PORT || 5000;

// Log environment info
console.log(`Starting server with NODE_ENV=${process.env.NODE_ENV}`);
console.log(`Port configured as ${PORT}`);
console.log(`API key ${process.env.DEEPINFRA_API_KEY ? "is" : "is NOT"} set`);

app.use(cors());
app.use(express.json());
app.use(requestLogger);

// Root route for Render health check
app.get("/", (req, res) => {
  res.send("✅ BruhDive API is live and ready!");
});

// Utility to clean and extract valid JSON array from AI response
function extractValidJsonArray(text) {
  if (!text) {
    console.log("Extraction failed: Input text is empty");
    return null;
  }

  console.log(`Attempting to extract JSON from text (length: ${text.length})`);
  const match = text.match(/\[\s*\{[\s\S]*?\}\s*\]/);

  if (!match) {
    console.log("No JSON array pattern found in text");
    console.log("Text sample:", text.substring(0, 100) + "...");
    return null;
  }

  const extracted = match[0].replace(/```json|```/g, "").trim();
  console.log(`Extracted JSON of length: ${extracted.length}`);
  return extracted;
}

// Endpoint: Get quiz questions
app.get("/api/quiz", async (req, res) => {
  console.log("=== QUIZ ENDPOINT CALLED ===");
  const requestId = Date.now().toString();
  console.log(`Request ID: ${requestId}`);

  try {
    console.log("Calling generateQuiz function...");
    const startTime = Date.now();

    const questions = await generateQuiz();

    const elapsed = Date.now() - startTime;
    console.log(`generateQuiz completed in ${elapsed}ms`);

    if (!questions) {
      console.error(`[${requestId}] Questions returned null or undefined`);
      throw new Error(
        "Quiz generation failed: Quiz function returned null or undefined"
      );
    }

    if (!Array.isArray(questions)) {
      console.error(
        `[${requestId}] Questions is not an array:`,
        typeof questions
      );
      throw new Error("Quiz generation failed: Invalid data format returned");
    }

    if (questions.length === 0) {
      console.error(`[${requestId}] Questions array is empty`);
      throw new Error("Quiz generation failed: No questions returned");
    }

    console.log(
      `[${requestId}] Successfully got ${questions.length} questions`
    );
    console.log("First question:", safeStringify(questions[0]));

    res.json(questions); // Return just the array of questions
  } catch (err) {
    console.error(`[${requestId}] ❌ Error generating quiz:`, err.message);
    console.error(err.stack);

    // Return fallback questions directly as an array to match expected format
    const fallbackQuestions = [
      {
        question: "What does API stand for?",
        options: [
          "A) Application Programming Interface",
          "B) Automated Program Instruction",
          "C) Application Process Integration",
          "D) Auxiliary Programming Implementation",
        ],
        answer: "A",
        explanation:
          "API (Application Programming Interface) is a set of rules that allows one software application to interact with another.",
        domain: "Web Development",
        difficulty: "Easy",
        skill_type: "Theory",
      },
      {
        question: "What is the primary purpose of HTML?",
        options: [
          "A) To style web pages",
          "B) To define the structure of web content",
          "C) To program web applications",
          "D) To communicate with databases",
        ],
        answer: "B",
        explanation:
          "HTML (HyperText Markup Language) is used to define the structure and content of web pages.",
        domain: "Web Development",
        difficulty: "Easy",
        skill_type: "Theory",
      },
    ];

    console.log(
      `[${requestId}] Returning ${fallbackQuestions.length} fallback questions`
    );
    res.json(fallbackQuestions);
  }
});

// Endpoint: Get career recommendations based on domain performance
app.post("/api/career-recommendations", async (req, res) => {
  const requestId = Date.now().toString();
  console.log(`[${requestId}] Career recommendations endpoint called`);

  try {
    const { domainPerformance } = req.body;

    if (!domainPerformance) {
      console.error(`[${requestId}] Missing domain performance data`);
      return res.status(400).json({
        error: "Missing domain performance data.",
      });
    }

    console.log(
      `[${requestId}] Domain performance data:`,
      safeStringify(domainPerformance)
    );

    const performanceText = Object.entries(domainPerformance)
      .map(([domain, stats]) => {
        const percentage =
          stats.attempted > 0
            ? Math.round((stats.correct / stats.attempted) * 100)
            : 0;
        return `${domain}: ${percentage}% (${stats.correct}/${stats.attempted})`;
      })
      .join("\n");

    console.log(`[${requestId}] Performance text:`, performanceText);

    const prompt = careerRecommendationPrompt.replace(
      "{{PERFORMANCE}}",
      performanceText
    );

    console.log(
      `[${requestId}] Prompt preview:`,
      prompt.substring(0, 100) + "..."
    );

    const deepInfraAPIKey = process.env.DEEPINFRA_API_KEY;

    // Check if API key is available
    if (!deepInfraAPIKey) {
      console.error(`[${requestId}] DeepInfra API key not configured`);
      throw new Error("DeepInfra API key is not configured");
    }

    const modelUrl =
      "https://api.deepinfra.com/v1/inference/meta-llama/Meta-Llama-3-8B-Instruct";

    console.log(`[${requestId}] Making DeepInfra API request...`);
    const startTime = Date.now();

    const response = await axios.post(
      modelUrl,
      {
        input: prompt,
        stop: ["<|eot_id|>"],
        temperature: 0.7,
        max_tokens: 1500,
      },
      {
        headers: {
          Authorization: `Bearer ${deepInfraAPIKey}`,
          "Content-Type": "application/json",
        },
        timeout: 30000, // 30 second timeout
      }
    );

    const requestTime = Date.now() - startTime;
    console.log(`[${requestId}] DeepInfra API responded in ${requestTime}ms`);
    console.log(`[${requestId}] Response status:`, response.status);

    const resultText = response?.data?.results?.[0]?.generated_text || "";
    console.log(`[${requestId}] Result text length: ${resultText.length}`);
    console.log(
      `[${requestId}] Text preview: ${resultText.substring(0, 100)}...`
    );

    const jsonText = extractValidJsonArray(resultText);

    if (!jsonText) {
      console.error(`[${requestId}] No valid JSON found in API response`);
      throw new Error("No valid JSON array found in response");
    }

    console.log(`[${requestId}] Attempting to parse JSON...`);
    let recommendations;
    try {
      recommendations = JSON.parse(jsonText);
      console.log(`[${requestId}] Successfully parsed recommendations`);
    } catch (parseError) {
      console.error(`[${requestId}] JSON parse error:`, parseError.message);
      throw new Error(
        `Failed to parse recommendations JSON: ${parseError.message}`
      );
    }

    if (!Array.isArray(recommendations)) {
      console.error(
        `[${requestId}] Parsed result is not an array:`,
        typeof recommendations
      );
      throw new Error("Parsed recommendations are not an array");
    }

    console.log(
      `[${requestId}] Returning ${recommendations.length} career recommendations`
    );
    res.json(recommendations);
  } catch (err) {
    console.error(`[${requestId}] ❌ Career guidance error:`, err.message);
    console.error(err.stack);

    if (err.response) {
      console.error(`[${requestId}] API response error:`, {
        status: err.response.status,
        data: safeStringify(err.response.data),
      });
    }

    // Fallback recommendation
    const fallback = [
      {
        title: "Tech Explorer",
        description:
          "We're unable to generate a personalized recommendation at the moment. Keep exploring different tech areas and sharpening your skills.",
        keySkills: [
          "Problem Solving",
          "Programming Fundamentals",
          "Technical Curiosity",
        ],
        icon: "🔍",
      },
    ];

    console.log(`[${requestId}] Returning fallback career recommendation`);
    return res.json(fallback);
  }
});

// Error handler middleware
app.use((err, req, res, next) => {
  console.error("Unhandled application error:", err.message);
  console.error(err.stack);
  res.status(500).json({
    error: "An unexpected server error occurred",
    message: err.message,
  });
});

// Start the server
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});

// Handle uncaught exceptions
process.on("uncaughtException", (err) => {
  console.error("Uncaught exception:", err);
  console.error(err.stack);
});

// Handle unhandled promise rejections
process.on("unhandledRejection", (reason, promise) => {
  console.error("Unhandled Rejection at:", promise);
  console.error("Reason:", reason);
});
