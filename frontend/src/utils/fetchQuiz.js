export const fetchQuiz = async () => {
  console.log("=== FETCH QUIZ STARTED ===");
  const fetchId = Date.now().toString();
  console.log(`Fetch ID: ${fetchId}`);

  try {
    // Try to fetch from the API first
    try {
      const url =
        "https://bruhdive-an-online-quiz-platform.onrender.com/api/quiz";
      console.log(`[${fetchId}] Requesting URL: ${url}`);

      console.log(`[${fetchId}] Setting up request with timeout and headers`);
      const controller = new AbortController();
      const timeoutId = setTimeout(() => {
        controller.abort();
        console.error(`[${fetchId}] Request timed out after 20 seconds`);
      }, 20000);

      const startTime = Date.now();
      const response = await fetch(url, {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Cache-Control": "no-cache",
        },
        signal: controller.signal,
      });

      clearTimeout(timeoutId);
      const requestTime = Date.now() - startTime;
      console.log(`[${fetchId}] Server responded in ${requestTime}ms`);

      if (!response.ok) {
        console.error(
          `[${fetchId}] API responded with error status: ${response.status}`
        );
        console.error(`[${fetchId}] Status text: ${response.statusText}`);
        throw new Error(`API responded with status: ${response.status}`);
      }

      console.log(
        `[${fetchId}] Response status: ${response.status} ${response.statusText}`
      );
      // Log response headers
      const headers = {};
      response.headers.forEach((value, key) => {
        headers[key] = value;
      });
      console.log(`[${fetchId}] Response headers:`, JSON.stringify(headers));

      console.log(`[${fetchId}] Parsing response as JSON...`);
      const startParse = Date.now();
      const data = await response.json();
      const parseTime = Date.now() - startParse;
      console.log(`[${fetchId}] JSON parsed in ${parseTime}ms`);
      console.log(`[${fetchId}] Response data type:`, typeof data);
      console.log(`[${fetchId}] Is array:`, Array.isArray(data));

      if (data) {
        console.log(
          `[${fetchId}] First few properties:`,
          Object.keys(data).slice(0, 5)
        );
      }

      // Handle different response formats
      let questions;
      if (Array.isArray(data)) {
        console.log(
          `[${fetchId}] Response is an array with ${data.length} items`
        );
        questions = data;
      } else if (data && data.questions && Array.isArray(data.questions)) {
        console.log(
          `[${fetchId}] Response has 'questions' array with ${data.questions.length} items`
        );
        questions = data.questions;
      } else if (data && typeof data === "object") {
        console.log(
          `[${fetchId}] Response is an object, keys:`,
          Object.keys(data)
        );
        // Try to extract questions from object if possible
        const possibleQuestionsArray = Object.values(data).find(
          (val) => Array.isArray(val) && val.length > 0
        );
        if (possibleQuestionsArray) {
          console.log(
            `[${fetchId}] Found possible questions array with ${possibleQuestionsArray.length} items`
          );
          questions = possibleQuestionsArray;
        } else {
          throw new Error("Could not find questions array in response");
        }
      } else {
        console.error(`[${fetchId}] Response is not in expected format`);
        console.error(
          `[${fetchId}] Response sample:`,
          JSON.stringify(data).substring(0, 200)
        );
        throw new Error("API returned data in unexpected format");
      }

      if (!Array.isArray(questions) || questions.length === 0) {
        console.error(`[${fetchId}] No questions found in API response`);
        throw new Error("API returned invalid or empty quiz data");
      }

      console.log(
        `[${fetchId}] Processing ${questions.length} questions for validation`
      );
      // Do basic validation on each question
      const validData = questions.filter((q, index) => {
        const isValid =
          q &&
          q.question &&
          Array.isArray(q.options) &&
          q.options.length >= 2 &&
          q.answer;

        if (!isValid) {
          console.log(
            `[${fetchId}] Question at index ${index} is invalid:`,
            JSON.stringify({
              hasQuestion: Boolean(q && q.question),
              hasOptions: Boolean(q && Array.isArray(q.options)),
              enoughOptions: Boolean(
                q && Array.isArray(q.options) && q.options.length >= 2
              ),
              hasAnswer: Boolean(q && q.answer),
            })
          );
        }
        return isValid;
      });

      console.log(
        `[${fetchId}] Validation results: ${validData.length} valid questions out of ${questions.length}`
      );

      if (validData.length === 0) {
        throw new Error("No valid questions found in API response");
      }

      console.log(
        `[${fetchId}] Successfully retrieved ${validData.length} valid questions from API`
      );
      return validData;
    } catch (apiError) {
      // If API fetch fails, fall back to mock data
      console.warn(
        `[${fetchId}] API not available, using mock data instead:`,
        apiError.message
      );
      console.error(`[${fetchId}] Error details:`, apiError);

      if (apiError.name === "AbortError") {
        console.error(`[${fetchId}] Request was aborted due to timeout`);
      }

      // Mock data based on the requested structure from promptTemplates.js
      console.log(`[${fetchId}] Returning mock quiz data`);
      const mockQuizData = [
        {
          question: "What does HTML stand for?",
          options: [
            "A) Hyper Text Markup Language",
            "B) Hyperlinks and Text Markup Language",
            "C) Home Tool Markup Language",
            "D) Hypertext Machine Language",
          ],
          answer: "A",
          explanation:
            "HTML is the standard markup language for Web pages. It defines the structure of web content using a series of elements that label content parts.",
          domain: "Web Development",
          difficulty: "Easy",
          skill_type: "Theory",
        },
        // ... additional mock data omitted for brevity ...
      ];

      return mockQuizData;
    }
  } catch (error) {
    // Handle any unexpected errors that might occur
    console.error(`[${fetchId}] Failed to fetch quiz data:`, error.message);
    console.error(`[${fetchId}] Error stack:`, error.stack);

    // Return a minimal fallback dataset to ensure the application doesn't crash
    console.log(`[${fetchId}] Returning minimal emergency fallback data`);
    return [
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
    ];
  } finally {
    // You could add any cleanup operations here if needed
    console.log(`[${fetchId}] Quiz fetch operation completed`);
    console.log("=== FETCH QUIZ ENDED ===");
  }
};

// Helper function to validate a quiz question
export const isValidQuestion = (question) => {
  const valid =
    question &&
    typeof question.question === "string" &&
    Array.isArray(question.options) &&
    question.options.length >= 2 &&
    typeof question.answer === "string" &&
    question.options.some((opt) => opt.startsWith(question.answer));

  if (!valid) {
    console.log("Invalid question:", {
      hasQuestion: Boolean(question && typeof question.question === "string"),
      hasOptions: Boolean(question && Array.isArray(question.options)),
      enoughOptions: Boolean(
        question &&
          Array.isArray(question.options) &&
          question.options.length >= 2
      ),
      hasAnswer: Boolean(question && typeof question.answer === "string"),
      answerMatches: Boolean(
        question &&
          Array.isArray(question.options) &&
          question.options.some((opt) => opt.startsWith(question.answer))
      ),
    });
  }

  return valid;
};

// Get a specific number of questions
export const getRandomQuestions = (questions, count = 5) => {
  console.log(
    `Getting ${count} random questions from set of ${questions?.length || 0}`
  );

  if (!Array.isArray(questions) || questions.length === 0) {
    console.warn("No questions available to randomize");
    return [];
  }

  // Shuffle and slice to get random questions
  const shuffled = [...questions].sort(() => 0.5 - Math.random());
  const selected = shuffled.slice(0, Math.min(count, questions.length));
  console.log(`Selected ${selected.length} random questions`);
  return selected;
};
