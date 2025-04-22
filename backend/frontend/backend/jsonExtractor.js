/**
 * Utility to extract and clean JSON from potentially malformed text
 */
function extractValidJson(text) {
  // Strategy 1: Try to find JSON array with square brackets
  const extractArrayJson = (text) => {
    const jsonStart = text.indexOf("[");
    const jsonEnd = text.lastIndexOf("]") + 1;

    if (jsonStart === -1 || jsonEnd <= jsonStart) {
      return null;
    }

    return text.slice(jsonStart, jsonEnd);
  };

  // Strategy 2: Try to find JSON object with curly braces
  const extractObjectJson = (text) => {
    const jsonStart = text.indexOf("{");
    const jsonEnd = text.lastIndexOf("}") + 1;

    if (jsonStart === -1 || jsonEnd <= jsonStart) {
      return null;
    }

    return text.slice(jsonStart, jsonEnd);
  };

  // Clean any potential syntax issues in the JSON string
  const cleanJson = (jsonStr) => {
    if (!jsonStr) return null;

    // Replace trailing commas before closing brackets
    let cleaned = jsonStr.replace(/,(\s*[\]}])/g, "$1");

    // Replace any unquoted property names
    cleaned = cleaned.replace(/([{,]\s*)(\w+)(\s*:)/g, '$1"$2"$3');

    // Fix duplicate commas
    cleaned = cleaned.replace(/,\s*,/g, ",");

    // Replace any single quotes with double quotes (for strings)
    cleaned = cleaned.replace(/(\w+):\s*'([^']*)'/g, '$1: "$2"');

    return cleaned;
  };

  try {
    // Try Array extraction first
    let jsonStr = extractArrayJson(text);

    // If not found, try Object extraction
    if (!jsonStr) {
      jsonStr = extractObjectJson(text);
    }

    // Clean the extracted JSON
    const cleaned = cleanJson(jsonStr);

    if (!cleaned) {
      throw new Error("Could not locate valid JSON in response");
    }

    // Try parsing the cleaned JSON
    return JSON.parse(cleaned);
  } catch (err) {
    throw new Error(
      `JSON extraction failed: ${err.message}\nText: ${text.substring(
        0,
        100
      )}...`
    );
  }
}

module.exports = { extractValidJson };
