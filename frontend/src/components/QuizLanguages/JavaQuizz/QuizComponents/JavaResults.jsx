import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import Confetti from "react-confetti";
import "../../StylesQuiz/Results.css";

const Results = ({
  score,
  totalQuestions,
  onRestart,
  userAnswers,
  questionData,
}) => {
  const [animated, setAnimated] = useState(false);
  const [isConfettiRunning, setIsConfettiRunning] = useState(true);
  const [windowDimensions, setWindowDimensions] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  const hasSaved = useRef(false);
  const navigate = useNavigate();

  const getPerformanceLevel = (score, userAnswers, questionData) => {
    const weakTopicsMap = {};
    questionData?.forEach((q, idx) => {
      if (userAnswers?.[idx] !== q.correctAnswer) {
        const topic = q.topic || "Miscellaneous";
        weakTopicsMap[topic] = (weakTopicsMap[topic] || 0) + 1;
      }
    });

    if (score <= 4)
      return {
        level: "Noob Mode",
        color: "#6c757d",
        message:
          "Java's still warming up in your head. Don’t worry, you got this!",
        topics: [
          "Variables & Data Types",
          "System.out.println() Basics",
          "Java Syntax & Semicolons",
          "Conditional Statements",
          "Loop Fundamentals",
        ],
        strengths:
          "You're just starting your Java journey — and that's awesome. Focus now on understanding how Java stores and processes data, the flow of control using conditions and loops, and printing clean output.",
      };

    if (score <= 9)
      return {
        level: "Newbie",
        color: "#fd7e14",
        message: "You’re starting to talk Java. Respect!",
        topics: [
          "If-Else & Switch Statements",
          "Loops (for, while, do-while)",
          "Basic Input/Output",
          "Arithmetic & Logical Operators",
          "String Basics",
        ],
        strengths:
          "You’ve seen how Java branches and loops. Start practicing small programs with user input, conditionals, and loops. Get used to the flow — Java's strict but powerful!",
      };

    if (score <= 13)
      return {
        level: "🧐 Beginner",
        color: "#ffc107",
        message: "Solid ground! Now let’s build with confidence.",
        topics: [
          "Methods & Parameters",
          "Arrays & Iteration",
          "Basic OOP (Classes & Objects)",
          "Type Conversion",
          "String Methods",
        ],
        strengths:
          "You're starting to modularize your thinking. Understand how to pass data between methods, manipulate arrays, and define objects. Get into the Java mindset of everything being class-based.",
      };

    if (score <= 17)
      return {
        level: "🔥 Enthusiast",
        color: "#17a2b8",
        message: "You’re Java fluent! Keep that heat alive.",
        topics: [
          "Constructor Usage",
          "Overloading & Encapsulation",
          "Object References",
          "Collections (ArrayList, HashSet)",
          "Try-Catch Blocks",
        ],
        strengths:
          "You know your way around Java classes and data. Now focus on writing clean OOP code, managing memory with references, and building reusable logic. You’re ready for real-world tasks!",
      };

    if (score <= 20)
      return {
        level: "🚀 Intermediate",
        color: "#007bff",
        message: "OOP wizardry activated. Solid Java engineer energy!",
        topics: [
          "Inheritance & Polymorphism",
          "Exception Handling Strategies",
          "Static vs Instance Concepts",
          "StringBuilder Efficiency",
          "Intro to Interfaces",
        ],
        strengths:
          "You're understanding the deeper mechanics of Java and applying design logic. Dive deeper into abstraction, code optimization, and how memory plays into your structures.",
      };

    if (score <= 23)
      return {
        level: "🧠 Advanced",
        color: "#28a745",
        message: "You're flexing real Java muscle. Keep pushing boundaries!",
        topics: [
          "Interfaces vs Abstract Classes",
          "Lambda Expressions & Functional Interfaces",
          "Streams API",
          "File Handling (BufferedReader, FileWriter)",
          "Multi-threading Concepts",
        ],
        strengths:
          "You’ve mastered structure, now it’s about flexibility and performance. Learn how to scale your code, write cleaner logic using lambdas, and process data streams like a pro.",
      };

    return {
      level: "👑 Code Master",
      color: "#6610f2",
      message: "Certified Java ninja. You're ready to architect systems!",
      topics: [
        "Design Patterns (Factory, Singleton)",
        "Concurrency & Thread Safety",
        "Spring Boot Basics",
        "Data Structures (LinkedList, Queue, Stack)",
        "Testing (JUnit)",
        "Scalable App Design",
      ],
      strengths:
        "You’ve reached mastery. You can debug deep, build frameworks, and think at the system level. Focus on architecture, clean code principles, and mentoring others now.",
    };
  };

  const percentage = Math.round((score / totalQuestions) * 100);
  const performance = getPerformanceLevel(score, userAnswers, questionData);

  useEffect(() => {
    const timer = setTimeout(() => setAnimated(true), 100);
    const handleResize = () => {
      setWindowDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener("resize", handleResize);

    if (!hasSaved.current && score !== null) {
      hasSaved.current = true;
      const resultData = {
        language: "Java", // or "Python"
        score,
        total: totalQuestions,
        percentage,
        level: performance.level,
        timestamp: Date.now(), // ⬅️ FIXED timestamp
      };
      const existingResults =
        JSON.parse(localStorage.getItem("quizResults")) || [];
      existingResults.push(resultData);
      localStorage.setItem("quizResults", JSON.stringify(existingResults));
    }

    const confettiTimer = setTimeout(() => setIsConfettiRunning(false), 40000);
    document.body.style.overflow = "hidden";

    return () => {
      clearTimeout(timer);
      clearTimeout(confettiTimer);
      window.removeEventListener("resize", handleResize);
      document.body.style.overflow = "auto";
    };
  }, [score, totalQuestions, performance, percentage]);

  const handleBackToQuiz = () => {
    navigate("/quiz");
  };

  return (
    <div className="results-overlay">
      {isConfettiRunning && (
        <Confetti
          width={windowDimensions.width}
          height={windowDimensions.height}
          numberOfPieces={200}
          recycle={false}
        />
      )}

      <div className={`results-card ${animated ? "animated" : ""}`}>
        <header className="results-header">
          <h1 className="quiz-completed">
            {performance.level} Quiz Completed!
          </h1>
          <p className="performance-message">{performance.message}</p>
        </header>

        <section className="score-display">
          <div className="score-section">
            <div className="score-value">
              {score}/{totalQuestions}
            </div>
            <div className="score-label">Correct Answers</div>
          </div>
          <div className="score-section">
            <div className="score-value">{percentage}%</div>
            <div className="score-label">Score</div>
          </div>
          <div className="score-section">
            <div className="score-value">{performance.level}</div>
            <div className="score-label">Level</div>
          </div>
        </section>

        <section className="results-content">
          <p className="strength-paragraph">
            <strong>Your Strength:</strong> {performance.strengths}
          </p>

          <p className="recommendation-paragraph">
            📘 <strong>Recommended Topics to Explore:</strong>
          </p>
          <ul className="topic-list">
            {performance.topics.map((topic, index) => (
              <li key={index}>✅ {topic}</li>
            ))}
          </ul>

          <div className="action-buttons">
            <button onClick={onRestart} className="action-button">
              Next Quiz 🔄
            </button>
            <button onClick={handleBackToQuiz} className="action-button">
              Back to Main Quiz ↩️
            </button>
          </div>
          {Array.isArray(questionData) && Array.isArray(userAnswers) && (
            <ul className="answer-review-list">
              {questionData.map((q, index) => {
                const userAnswer = userAnswers[index];
                const isCorrect = userAnswer === q.correctAnswer;
                return (
                  <li
                    key={index}
                    className={`answer-review-item ${
                      isCorrect ? "correct" : "wrong"
                    }`}
                  >
                    <p>
                      <strong>Q{index + 1}:</strong> {q.question}
                    </p>
                    {!q.codeEditor && (
                      <>
                        <p>
                          <span className="answer-label">Your Answer:</span>{" "}
                          <span className={isCorrect ? "correct" : "wrong"}>
                            {userAnswer || "No Answer"}
                          </span>
                        </p>
                        {!isCorrect && (
                          <p>
                            <span className="answer-label">
                              Correct Answer:
                            </span>{" "}
                            <span className="correct">{q.correctAnswer}</span>
                          </p>
                        )}
                      </>
                    )}
                    {q.codeEditor && (
                      <p className="code-editor-label">
                        <em>
                          This was a code editor question. Review manually.
                        </em>
                      </p>
                    )}
                  </li>
                );
              })}
            </ul>
          )}
        </section>
      </div>
    </div>
  );
};

export default Results;
