const express = require("express");
const cors = require("cors");
const generateQuiz = require("./generateQuiz");
const axios = require("axios");
const { careerRecommendationPrompt } = require("./promptTemplates");

require("dotenv").config();

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

// Utility to clean and extract valid JSON array from AI text
function extractValidJsonArray(text) {
  const match = text.match(/\[\s*\{[\s\S]*?\}\s*\]/);
  return match ? match[0].replace(/```json|```/g, "").trim() : null;
}

// Endpoint to fetch quiz questions
app.get("/api/quiz", async (req, res) => {
  try {
    const questions = await generateQuiz();
    res.json(questions);
  } catch (err) {
    console.error("❌ Error generating quiz:", err.message);
    res
      .status(500)
      .json({
        error:
          "Sorry, something went wrong while loading the quiz. Please try again.",
      });
  }
});

// Endpoint to fetch career recommendations
app.post("/api/career-recommendations", async (req, res) => {
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

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
