require("dotenv").config();
const axios = require("axios");
const fs = require("fs");
const fallbackQuestions = require("./fallbackQuestions");
const { quizPrompt } = require("./promptTemplates");

// Create custom axios instance with extended timeout
const quizAxios = axios.create({
  timeout: 120000, // 2 minutes timeout
});

// Utility to extract clean JSON array from messy LLM output
function extractValidJsonArray(text) {
  const match = text.match(/\[\s*\{[\s\S]*?\}\s*\]/); // Match full array
  return match ? match[0].replace(/```json|```/g, "").trim() : null;
}

// Enhanced error logging function
function logError(error, phase = "Request") {
  console.error(`❌ ${phase} Error Details:`);
  console.error(`- Message: ${error.message}`);
  console.error(`- Type: ${error.name}`);
  console.error(`- Code: ${error.code || "N/A"}`);

  // Log timeout settings if available
  if (error.config) {
    console.error(
      `- Request timeout setting: ${
        error.config.timeout || "Not set (unlimited)"
      }`
    );
    console.error(`- URL: ${error.config.url}`);
    console.error(`- Method: ${error.config.method.toUpperCase()}`);
  }

  // Log axios default timeout for reference
  console.error(
    `- Default axios timeout: ${
      axios.defaults.timeout || "Not set (unlimited)"
    }`
  );

  // Log response details if available
  if (error.response) {
    console.error(`- Response status: ${error.response.status}`);
    console.error(`- Response data:`, error.response.data);
  }
}

// Try to safely write to file, log errors but don't throw
function safeWriteFile(filename, content) {
  try {
    // In production, check if filesystem is writable
    if (process.env.NODE_ENV !== "production") {
      fs.writeFileSync(filename, content);
      console.log(`✅ File written: ${filename}`);
    } else {
      console.log(`ℹ️ File writing skipped in production mode: ${filename}`);
    }
  } catch (err) {
    console.error(`❌ Could not write to file ${filename}: ${err.message}`);
  }
}

async function generateQuiz() {
  console.log("Starting quiz generation with DeepInfra API");
  console.log(`- Custom timeout setting: ${quizAxios.defaults.timeout}ms`);

  // Track performance for debugging
  const startTime = Date.now();

  try {
    // Get API key and handle missing key scenario
    const deepInfraAPIKey = process.env.DEEPINFRA_API_KEY;
    if (!deepInfraAPIKey) {
      console.error("❌ Missing DeepInfra API key in environment variables");
      return fallbackQuestions;
    }

    const modelUrl =
      "https://api.deepinfra.com/v1/inference/meta-llama/Meta-Llama-3-8B-Instruct";

    console.log("🔄 Sending request to DeepInfra API...");
    const response = await quizAxios.post(
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

    // Calculate and log request time
    const requestTime = Date.now() - startTime;
    console.log(`✅ API request completed in ${requestTime}ms`);

    const resultText = response?.data?.results?.[0]?.generated_text || "";
    safeWriteFile("raw_api_response.txt", resultText);

    if (!resultText) {
      throw new Error("Empty response from API");
    }

    const jsonText = extractValidJsonArray(resultText);
    if (!jsonText) {
      throw new Error("No valid JSON array found in API response");
    }

    try {
      const parsed = JSON.parse(jsonText);

      if (!Array.isArray(parsed)) {
        throw new Error("Parsed quiz is not an array");
      }

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

      safeWriteFile(
        "cleaned_json.txt",
        JSON.stringify(completeQuestions, null, 2)
      );

      const totalTime = Date.now() - startTime;
      console.log(
        `✅ Quiz generation successful: ${completeQuestions.length} questions in ${totalTime}ms`
      );
      return completeQuestions;
    } catch (parseError) {
      logError(parseError, "JSON Parsing");
      throw new Error(`Failed to parse API response: ${parseError.message}`);
    }
  } catch (error) {
    // Enhanced error logging
    logError(error, "API Request");

    // Log exact timeout information if it's a timeout error
    if (error.code === "ECONNABORTED" || error.message.includes("timeout")) {
      const timeElapsed = Date.now() - startTime;
      console.error(`❌ Request timed out after ${timeElapsed}ms`);
      console.error(`❌ Quiz generation failed: ${error.message}`);
    } else {
      console.error(`❌ Quiz generation failed: ${error.message}`);
    }

    console.log("Falling back to predefined questions");
    return fallbackQuestions;
  } finally {
    const questions = fallbackQuestions.length; // This will be overridden if success
    console.log(`Returning ${questions} quiz questions`);
  }
}

module.exports = generateQuiz;
