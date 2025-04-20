export const fetchQuiz = async () => {
  try {
    // Try to fetch from the API first
    try {
      const response = await fetch("http://localhost:5000/api/quiz");

      if (!response.ok) {
        throw new Error(`API responded with status: ${response.status}`);
      }

      const data = await response.json();

      // Validate that we received questions with the required structure
      if (!Array.isArray(data) || data.length === 0) {
        throw new Error("API returned invalid or empty quiz data");
      }

      // Do basic validation on each question
      const validData = data.filter(
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
      // If API fetch fails, fall back to mock data
      console.warn("API not available, using mock data instead:", apiError);
      // Mock data based on the requested structure from promptTemplates.js
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
        {
          question: "Which of these is NOT a valid HTTP status code?",
          options: ["A) 200", "B) 404", "C) 500", "D) 600"],
          answer: "D",
          explanation:
            "600 is not a valid HTTP status code. Valid codes are in ranges: 1xx (Informational), 2xx (Success), 3xx (Redirection), 4xx (Client Error), and 5xx (Server Error).",
          domain: "Web Development",
          difficulty: "Medium",
          skill_type: "Theory",
        },
        {
          question: "What is the purpose of the 'useEffect' hook in React?",
          options: [
            "A) To manage component state",
            "B) To perform side effects in function components",
            "C) To create custom hooks",
            "D) To optimize rendering performance",
          ],
          answer: "B",
          explanation:
            "The useEffect hook lets you perform side effects in function components, such as data fetching, subscriptions, or manually changing the DOM.",
          domain: "Frontend / UI/UX",
          difficulty: "Medium",
          skill_type: "Coding",
        },
        {
          question:
            "Which data structure would be most efficient for implementing a priority queue?",
          options: ["A) Array", "B) Linked List", "C) Heap", "D) Hash Table"],
          answer: "C",
          explanation:
            "A heap provides O(log n) time for insertion and deletion of the highest priority element, making it ideal for priority queue implementations.",
          domain: "Data Structures & Algorithms",
          difficulty: "Hard",
          skill_type: "Problem Solving",
        },
        {
          question: "What is SQL injection?",
          options: [
            "A) A technique to optimize SQL queries",
            "B) A security vulnerability where attackers can inject malicious SQL code",
            "C) A SQL database backup method",
            "D) A SQL query testing framework",
          ],
          answer: "B",
          explanation:
            "SQL injection is a code injection technique where malicious SQL statements are inserted into entry fields, allowing attackers to access or modify database data.",
          domain: "Cybersecurity",
          difficulty: "Medium",
          skill_type: "Security",
        },
        {
          question:
            "What is the main benefit of containerization technologies like Docker?",
          options: [
            "A) Better GUI for applications",
            "B) Consistent environments across different development and production systems",
            "C) Increased application performance",
            "D) Reduced code complexity",
          ],
          answer: "B",
          explanation:
            "Docker and similar container technologies ensure that applications run the same regardless of where they're deployed, eliminating 'it works on my machine' problems.",
          domain: "DevOps",
          difficulty: "Medium",
          skill_type: "Theory",
        },
        {
          question: "In JavaScript, what is closure?",
          options: [
            "A) A way to close browser windows",
            "B) A function that returns another function",
            "C) A function having access to variables from its parent scope even after the parent function has closed",
            "D) A method to terminate event listeners",
          ],
          answer: "C",
          explanation:
            "A closure is the combination of a function bundled together with references to its surrounding state (the lexical environment), allowing the function to access variables from its parent scope even after the parent function has returned.",
          domain: "Frontend / UI/UX",
          difficulty: "Hard",
          skill_type: "Coding",
        },
        {
          question:
            "What is the purpose of the 'alt' attribute in HTML <img> tags?",
          options: [
            "A) To display alternate images when hovering",
            "B) To provide alternative text for screen readers and if the image fails to load",
            "C) To specify alternative styling",
            "D) To set an alert when the image is clicked",
          ],
          answer: "B",
          explanation:
            "The alt attribute provides alternative information for an image if a user cannot view it (due to slow connection, an error in the src attribute, or if the user uses a screen reader).",
          domain: "Web Development",
          difficulty: "Easy",
          skill_type: "Accessibility",
        },
      ];

      return mockQuizData;
    }
  } catch (error) {
    // Handle any unexpected errors that might occur
    console.error("Failed to fetch quiz data:", error);

    // Return a minimal fallback dataset to ensure the application doesn't crash
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
    console.log("Quiz fetch operation completed");
  }
};

// Helper function to validate a quiz question (could be extracted if used elsewhere)
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

// Optional: Add a function to get a specific number of questions
export const getRandomQuestions = (questions, count = 5) => {
  if (!Array.isArray(questions) || questions.length === 0) {
    return [];
  }

  // Shuffle and slice to get random questions
  const shuffled = [...questions].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, Math.min(count, questions.length));
};
