require("dotenv").config();
const axios = require("axios");
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
    console.log("Starting quiz generation with DeepInfra API");

    // Check if API key is available
    if (!deepInfraAPIKey) {
      throw new Error("DeepInfra API key is not configured");
    }

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
        timeout: 30000, // 30 second timeout to prevent hanging
      }
    );

    const resultText = response?.data?.results?.[0]?.generated_text || "";
    console.log(
      `Received response from DeepInfra. Length: ${resultText.length}`
    );

    // Log a preview of the response instead of writing to file
    console.log("Response preview:", resultText.substring(0, 200) + "...");

    const jsonText = extractValidJsonArray(resultText);

    if (!jsonText)
      throw new Error("No valid JSON array found in the model response");

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

    console.log(
      `✅ Successfully generated ${completeQuestions.length} valid questions`
    );

    // Return the questions directly
    return completeQuestions;
  } catch (error) {
    console.error(`❌ Quiz generation failed: ${error.message}`);
    console.log("Falling back to predefined questions");
    return fallbackQuestions;
  }
}

module.exports = generateQuiz;
