require("dotenv").config();
const axios = require("axios");
const fs = require("fs");
const fallbackQuestions = require("./fallbackQuestions");
const { quizPrompt } = require("./promptTemplates");

const deepInfraAPIKey = process.env.DEEPINFRA_API_KEY;
const modelUrl =
  "https://api.deepinfra.com/v1/inference/meta-llama/Meta-Llama-3-8B-Instruct";

// Utility to extract clean JSON array from messy LLM output
function extractValidJsonArray(text) {
  const match = text.match(/\[\s*\{[\s\S]*?\}\s*\]/); // Match full array
  return match ? match[0].replace(/```json|```/g, "").trim() : null;
}

async function generateQuiz() {
  try {
    const response = await axios.post(
      modelUrl,
      {
        input: quizPrompt,
        stop: ["<|eot_id|>"],
        temperature: 0.7,
        max_tokens: 2500,
      },
      {
        headers: {
          Authorization: `Bearer ${deepInfraAPIKey}`,
          "Content-Type": "application/json",
        },
      }
    );

    const resultText = response?.data?.results?.[0]?.generated_text || "";
    fs.writeFileSync("raw_api_response.txt", resultText);

    const jsonText = extractValidJsonArray(resultText);

    if (!jsonText) throw new Error("No valid JSON array found");

    const parsed = JSON.parse(jsonText);

    if (!Array.isArray(parsed)) throw new Error("Parsed quiz is not an array");

    const validatedQuestions = parsed.filter(
      (q) =>
        q &&
        typeof q === "object" &&
        q.question &&
        Array.isArray(q.options) &&
        q.options.length >= 2 &&
        q.answer &&
        q.explanation
    );

    if (validatedQuestions.length === 0) {
      throw new Error("No valid questions found after validation");
    }

    const completeQuestions = validatedQuestions.map((q) => ({
      question: q.question,
      options: q.options,
      answer: q.answer,
      explanation: q.explanation,
      domain: q.domain || "General",
      difficulty: q.difficulty || "Medium",
      skill_type: q.skill_type || "Knowledge",
    }));

    fs.writeFileSync(
      "cleaned_json.txt",
      JSON.stringify(completeQuestions, null, 2)
    );

    console.log(`✅ Extracted ${completeQuestions.length} valid questions`);
    return completeQuestions;
  } catch (error) {
    console.error("❌ Quiz generation failed:", error.message);
    return fallbackQuestions;
  }
}

module.exports = generateQuiz;
