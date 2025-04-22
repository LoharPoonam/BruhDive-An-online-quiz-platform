export const fetchQuiz = async () => {
  try {
    const url =
      "https://bruhdive-an-online-quiz-platform.onrender.com/api/quiz";
    console.log(`Requesting URL: ${url}`);

    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 20000); // 20s timeout

    const response = await fetch(url, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Cache-Control": "no-cache",
      },
      signal: controller.signal,
    });

    clearTimeout(timeoutId); // Clear timeout on success

    if (!response.ok) {
      throw new Error(`API responded with status: ${response.status}`);
    }

    const data = await response.json();
    console.log("✅ Received API response:", data);

    const questions = Array.isArray(data) ? data : data.questions || [];

    if (!Array.isArray(questions) || questions.length === 0) {
      throw new Error("API returned invalid or empty quiz data");
    }

    const validData = questions.filter(
      (q) =>
        q &&
        q.question &&
        Array.isArray(q.options) &&
        q.options.length >= 2 &&
        q.answer
    );

    if (validData.length === 0) {
      throw new Error("No valid questions found in API response");
    }

    return validData;
  } catch (apiError) {
    console.warn("❌ API not available, using mock data instead:", apiError);

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
      {
        question:
          "Which CSS property is used to control the space between elements?",
        options: ["A) spacing", "B) margin", "C) padding", "D) gap"],
        answer: "B",
        explanation:
          "The margin property defines the space around an element's border, outside of any defined borders.",
        domain: "Frontend / UI/UX",
        difficulty: "Easy",
        skill_type: "Theory",
      },
      {
        question: "What is the time complexity of a binary search algorithm?",
        options: ["A) O(n)", "B) O(log n)", "C) O(n log n)", "D) O(n²)"],
        answer: "B",
        explanation:
          "Binary search repeatedly divides the search interval in half, resulting in a logarithmic time complexity of O(log n).",
        domain: "Data Structures & Algorithms",
        difficulty: "Medium",
        skill_type: "Problem Solving",
      },
    ];

    return mockQuizData;
  } finally {
    console.log("📦 Quiz fetch operation completed");
  }
};

// Helper function to validate a quiz question
export const isValidQuestion = (question) => {
  return (
    question &&
    typeof question.question === "string" &&
    Array.isArray(question.options) &&
    question.options.length >= 2 &&
    typeof question.answer === "string" &&
    question.options.some((opt) => opt.startsWith(question.answer))
  );
};

// Optional: Shuffle and get a specific number of questions
export const getRandomQuestions = (questions, count = 5) => {
  if (!Array.isArray(questions) || questions.length === 0) return [];
  const shuffled = [...questions].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, Math.min(count, questions.length));
};
