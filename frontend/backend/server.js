const express = require("express");
const cors = require("cors");
const generateQuiz = require("./generateQuiz");
const axios = require("axios");
const { careerRecommendationPrompt } = require("./promptTemplates");

require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 5000;

// Add some basic request logging
app.use((req, res, next) => {
  console.log(`${new Date().toISOString()} - ${req.method} ${req.path}`);
  next();
});

app.use(cors());
app.use(express.json());

// Simple in-memory cache
const cache = {
  quizQuestions: null,
  quizTimestamp: null,
  CACHE_TTL: 3600000, // 1 hour in milliseconds
};

// Utility to clean and extract valid JSON array from AI text
function extractValidJsonArray(text) {
  const match = text.match(/\[\s*\{[\s\S]*?\}\s*\]/);
  return match ? match[0].replace(/```json|```/g, "").trim() : null;
}

// Endpoint to fetch quiz questions
app.get("/api/quiz", async (req, res) => {
  console.log("Quiz endpoint hit - generating questions");

  try {
    // Check cache first
    const currentTime = Date.now();
    if (
      cache.quizQuestions &&
      cache.quizTimestamp &&
      currentTime - cache.quizTimestamp < cache.CACHE_TTL
    ) {
      console.log("✅ Returning cached quiz questions");
      return res.json(cache.quizQuestions);
    }

    // No valid cache, generate new questions
    const questions = await generateQuiz();

    // Update cache
    cache.quizQuestions = questions;
    cache.quizTimestamp = currentTime;

    console.log(`Returning ${questions.length} quiz questions`);
    res.json(questions);
  } catch (err) {
    console.error("❌ Error generating quiz:", err.message);
    res.status(500).json({
      error:
        "Sorry, something went wrong while loading the quiz. Please try again.",
    });
  }
});

// Create a custom axios instance for recommendations with extended timeout
const recommendationAxios = axios.create({
  timeout: 120000, // 60 seconds
});

// Endpoint to fetch career recommendations
app.post("/api/career-recommendations", async (req, res) => {
  console.log("Career recommendations endpoint hit");

  try {
    const { domainPerformance } = req.body;

    if (!domainPerformance) {
      return res.status(400).json({
        error: "Sorry, something went wrong. Please try again.",
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
    if (!deepInfraAPIKey) {
      console.error("❌ Missing DeepInfra API key in environment variables");
      throw new Error("API key missing");
    }

    const modelUrl =
      "https://api.deepinfra.com/v1/inference/meta-llama/Meta-Llama-3-8B-Instruct";

    console.log("🔄 Sending career recommendation request to DeepInfra API...");
    const startTime = Date.now();

    const response = await recommendationAxios.post(
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
      }
    );

    console.log(
      `✅ Career API request completed in ${Date.now() - startTime}ms`
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
    // Log detail if it's a timeout
    if (err.code === "ECONNABORTED" || err.message.includes("timeout")) {
      console.error(
        `Request timed out after ${err.config?.timeout || "unknown"}ms`
      );
    }

    // Return 1 fallback career recommendation only
    return res.status(200).json([
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

// Basic health check endpoint
app.get("/health", (req, res) => {
  res.json({ status: "ok", timestamp: new Date().toISOString() });
});

// Start the server
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
  console.log(`- Environment: ${process.env.NODE_ENV || "development"}`);
  console.log(`- Cache TTL: ${cache.CACHE_TTL / 60000} minutes`);
});

// Handle unhandled promise rejections
process.on("unhandledRejection", (reason, promise) => {
  console.error("Unhandled Rejection at:", promise, "reason:", reason);
});
