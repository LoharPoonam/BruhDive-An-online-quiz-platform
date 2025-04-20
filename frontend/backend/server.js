const express = require("express");
const cors = require("cors");
const generateQuiz = require("./generateQuiz");
const axios = require("axios");
const { careerRecommendationPrompt } = require("./promptTemplates");

require("dotenv").config();

const app = express();

// Use Render's dynamic port or fallback to 5000 locally
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Root route for Render health check
app.get("/", (req, res) => {
  res.send("✅ BruhDive API is live and ready!");
});

// Utility to clean and extract valid JSON array from AI response
function extractValidJsonArray(text) {
  const match = text.match(/\[\s*\{[\s\S]*?\}\s*\]/);
  return match ? match[0].replace(/```json|```/g, "").trim() : null;
}

// Endpoint: Get quiz questions
app.get("/api/quiz", async (req, res) => {
  try {
    console.log("Quiz endpoint hit - generating questions");
    const questions = await generateQuiz();

    if (!Array.isArray(questions) || questions.length === 0) {
      throw new Error(
        "Quiz generation failed: Invalid or empty data returned."
      );
    }

    console.log(`Returning ${questions.length} quiz questions`);
    res.json(questions); // Return just the array of questions
  } catch (err) {
    console.error("❌ Error generating quiz:", err.message);
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

    res.json(fallbackQuestions);
  }
});

// Endpoint: Get career recommendations based on domain performance
app.post("/api/career-recommendations", async (req, res) => {
  try {
    const { domainPerformance } = req.body;

    if (!domainPerformance) {
      return res.status(400).json({
        error: "Missing domain performance data.",
      });
    }

    const performanceText = Object.entries(domainPerformance)
      .map(([domain, stats]) => {
        const percentage =
          stats.attempted > 0
            ? Math.round((stats.correct / stats.attempted) * 100)
            : 0;
        return `${domain}: ${percentage}% (${stats.correct}/${stats.attempted})`;
      })
      .join("\n");

    const prompt = careerRecommendationPrompt.replace(
      "{{PERFORMANCE}}",
      performanceText
    );

    const deepInfraAPIKey = process.env.DEEPINFRA_API_KEY;

    // Check if API key is available
    if (!deepInfraAPIKey) {
      throw new Error("DeepInfra API key is not configured");
    }

    const modelUrl =
      "https://api.deepinfra.com/v1/inference/meta-llama/Meta-Llama-3-8B-Instruct";

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

    const resultText = response?.data?.results?.[0]?.generated_text || "";
    const jsonText = extractValidJsonArray(resultText);

    if (!jsonText) {
      throw new Error("No valid JSON array found in response");
    }

    const recommendations = JSON.parse(jsonText);

    if (!Array.isArray(recommendations)) {
      throw new Error("Parsed recommendations are not an array");
    }

    res.json(recommendations);
  } catch (err) {
    console.error("❌ Career guidance error:", err.message);

    // Fallback recommendation
    return res.json([
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
    ]);
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
