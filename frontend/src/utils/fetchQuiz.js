export const fetchQuiz = async () => {
  const BASE_URL =
    import.meta.env.MODE === "development"
      ? "http://localhost:5000"
      : "https://bruhdive-an-online-quiz-platform.onrender.com";

  const url = `${BASE_URL}/api/quiz`;
  console.log(`🔗 Requesting URL: ${url}`);

  const controller = new AbortController();
  let didTimeout = false;
  const timeoutId = setTimeout(() => {
    didTimeout = true;
    controller.abort();
  }, 20000); // 20s timeout

  try {
    const response = await fetch(url, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Cache-Control": "no-cache",
      },
      signal: controller.signal,
    });

    clearTimeout(timeoutId);

    if (!response.ok) {
      throw new Error(`API responded with status: ${response.status}`);
    }

    const data = await response.json();
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
    if (didTimeout) {
      console.warn("⏰ API request timed out.");
    }
    console.warn("❌ API not available, using mock data instead:", apiError);

    // 🔁 Your fallback mock questions
    return [
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
    ];
  } finally {
    console.log("📦 Quiz fetch operation completed");
  }
};
