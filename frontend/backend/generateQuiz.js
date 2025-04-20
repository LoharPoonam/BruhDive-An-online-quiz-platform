require("dotenv").config();
const axios = require("axios");
const fallbackQuestions = require("./fallbackQuestions");
const { quizPrompt } = require("./promptTemplates");

const deepInfraAPIKey = process.env.DEEPINFRA_API_KEY;
const modelUrl =
  "https://api.deepinfra.com/v1/inference/meta-llama/Meta-Llama-3-8B-Instruct";

// Debug function to safely stringify objects, handling circular references
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

// Utility to extract clean JSON array from messy LLM output
function extractValidJsonArray(text) {
  console.log(
    `Attempting to extract JSON from text of length ${text?.length || 0}`
  );
  console.log(`Text preview: ${text?.substring(0, 100)}...`);

  const match = text?.match(/\[\s*\{[\s\S]*?\}\s*\]/); // Match full array
  if (!match) {
    console.log("No JSON array pattern found in the text");
    return null;
  }

  const extracted = match[0].replace(/```json|```/g, "").trim();
  console.log(`Extracted JSON of length: ${extracted.length}`);
  console.log(`JSON preview: ${extracted.substring(0, 100)}...`);

  return extracted;
}

async function generateQuiz() {
  console.log("=== QUIZ GENERATION STARTED ===");
  console.log(
    `ENV CHECK: DeepInfra API key ${deepInfraAPIKey ? "is set" : "is NOT set"}`
  );
  console.log(`Model URL: ${modelUrl}`);

  try {
    // Check if API key is available
    if (!deepInfraAPIKey) {
      throw new Error(
        "DeepInfra API key is not configured in environment variables"
      );
    }

    console.log("Making request to DeepInfra API...");

    // Detailed logging of request parameters
    const requestPayload = {
      input: quizPrompt.substring(0, 50) + "...", // Just log first 50 chars of prompt
      stop: ["<|eot_id|>"],
      temperature: 0.7,
      max_tokens: 2500,
    };
    console.log("Request payload:", JSON.stringify(requestPayload));

    const startTime = Date.now();

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
        timeout: 30000, // 30 second timeout
      }
    );

    const requestTime = Date.now() - startTime;
    console.log(`DeepInfra API responded in ${requestTime}ms`);

    // Check if we got a valid response object
    if (!response || !response.data) {
      console.error("Empty or invalid response from API");
      console.log("Response object:", safeStringify(response));
      throw new Error("Empty or invalid response from DeepInfra API");
    }

    // Log response info
    console.log(`Response status: ${response.status}`);
    console.log("Response headers:", safeStringify(response.headers));

    // Check for results array
    if (
      !response.data.results ||
      !Array.isArray(response.data.results) ||
      response.data.results.length === 0
    ) {
      console.error("Missing results array in API response");
      console.log("Response data:", safeStringify(response.data));
      throw new Error("Missing results array in API response");
    }

    const resultText = response.data.results[0]?.generated_text || "";
    console.log(`Generated text received, length: ${resultText.length}`);

    if (resultText.length < 10) {
      console.error("Generated text is too short or empty");
      throw new Error("Generated text from API is too short or empty");
    }

    const jsonText = extractValidJsonArray(resultText);

    if (!jsonText) {
      console.error("Failed to extract valid JSON from API response");
      throw new Error("No valid JSON array found in model response");
    }

    console.log("Attempting to parse JSON...");
    let parsed;
    try {
      parsed = JSON.parse(jsonText);
      console.log(`Successfully parsed JSON with ${parsed.length} items`);
    } catch (parseError) {
      console.error("JSON parse error:", parseError.message);
      console.log("Invalid JSON:", jsonText.substring(0, 200) + "...");
      throw new Error(`Failed to parse JSON: ${parseError.message}`);
    }

    if (!Array.isArray(parsed)) {
      console.error("Parsed result is not an array:", typeof parsed);
      throw new Error("Parsed quiz is not an array");
    }

    console.log(`Validating ${parsed.length} questions...`);
    let validCount = 0;
    let invalidCount = 0;
    const validationIssues = [];

    const validatedQuestions = parsed.filter((q, index) => {
      // Check each required property
      const hasQuestion = Boolean(q && q.question);
      const hasOptions = Boolean(
        q && Array.isArray(q.options) && q.options.length >= 2
      );
      const hasAnswer = Boolean(q && q.answer);
      const hasExplanation = Boolean(q && q.explanation);

      const isValid = hasQuestion && hasOptions && hasAnswer && hasExplanation;

      if (isValid) {
        validCount++;
        return true;
      } else {
        invalidCount++;
        validationIssues.push({
          index,
          hasQuestion,
          hasOptions,
          hasAnswer,
          hasExplanation,
          item: safeStringify(q).substring(0, 100) + "...",
        });
        return false;
      }
    });

    console.log(
      `Validation results: ${validCount} valid, ${invalidCount} invalid questions`
    );
    if (invalidCount > 0) {
      console.log("Validation issues:", safeStringify(validationIssues));
    }

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
      `✅ SUCCESS: Generated ${completeQuestions.length} valid questions`
    );

    // Return the questions directly
    return completeQuestions;
  } catch (error) {
    // Log detailed error information
    console.error("❌ Quiz generation failed:", error.message);

    if (error.response) {
      // The request was made and the server responded with a non-2xx status
      console.error("API Error Response:", {
        status: error.response.status,
        statusText: error.response.statusText,
        headers: safeStringify(error.response.headers),
        data: safeStringify(error.response.data),
      });
    } else if (error.request) {
      // The request was made but no response was received
      console.error("No response received:", safeStringify(error.request));
    } else {
      // Something happened in setting up the request
      console.error("Request setup error:", error.message);
      console.error("Error stack:", error.stack);
    }

    console.log("Falling back to predefined questions");
    return fallbackQuestions;
  } finally {
    console.log("=== QUIZ GENERATION COMPLETED ===");
  }
}

module.exports = generateQuiz;
