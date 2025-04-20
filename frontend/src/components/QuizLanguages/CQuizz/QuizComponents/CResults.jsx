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
          "Just landed in the world of C. Let’s learn the basics one byte at a time!",
        topics: [
          "Data Types & Variables",
          "Input/Output using printf and scanf",
          "Basic Arithmetic Operators",
          "Semicolons & Syntax Rules",
          "Single-line Comments (//)",
        ],
        strengths:
          "You’ve begun your journey! Now focus on mastering basic syntax, data types, and simple input/output operations in C.",
      };

    if (score <= 9)
      return {
        level: "Newbie",
        color: "#fd7e14",
        message: "You're getting comfortable with C basics. Keep practicing!",
        topics: [
          "Conditional Statements (if-else)",
          "Loops (for, while, do-while)",
          "Arrays & Indexing",
          "Simple Functions",
          "Header Files & Preprocessors",
        ],
        strengths:
          "You've made progress in logical flow and looping. Practice writing programs that take input and make decisions or repeat actions.",
      };

    if (score <= 13)
      return {
        level: "🧐 Beginner",
        color: "#ffc107",
        message: "Solid groundwork. You’re ready to level up your logic.",
        topics: [
          "Function Declarations & Definitions",
          "Scope & Lifetime of Variables",
          "Passing by Value",
          "String Handling (strlen, strcpy)",
          "Nested Loops & Control Flow",
        ],
        strengths:
          "Your logic-building skills are emerging. Focus on writing modular functions and working with strings and character arrays.",
      };

    if (score <= 17)
      return {
        level: "🔥 Enthusiast",
        color: "#17a2b8",
        message: "You're writing real C programs now. That’s the spirit!",
        topics: [
          "Pointers & Memory Addresses",
          "Dynamic Memory (malloc, free)",
          "Structures & typedef",
          "File I/O with fprintf/fscanf",
          "Debugging Techniques",
        ],
        strengths:
          "You've stepped into systems-level C. Get confident with pointers, file operations, and understanding how memory is accessed.",
      };

    if (score <= 20)
      return {
        level: "🚀 Intermediate",
        color: "#007bff",
        message: "C programmer unlocked. You’ve got serious coding fuel!",
        topics: [
          "Pointer Arithmetic",
          "Arrays of Pointers",
          "Function Pointers",
          "Bitwise Operators",
          "Recursion",
        ],
        strengths:
          "You now write efficient and memory-conscious code. Time to explore recursion, pointer tricks, and deeper memory understanding.",
      };

    if (score <= 23)
      return {
        level: "🧠 Advanced",
        color: "#28a745",
        message: "You’ve mastered the core of C. Welcome to expert territory!",
        topics: [
          "Memory Management Strategies",
          "Advanced Structs & Unions",
          "Dynamic 2D Arrays",
          "Macros & Conditional Compilation",
          "Command Line Args (argc, argv)",
        ],
        strengths:
          "You're now capable of writing robust, scalable programs. Dive into complex memory layouts and preprocessor-based customization.",
      };

    return {
      level: "👑 Code Master",
      color: "#6610f2",
      message: "Legendary status: You speak fluent C.",
      topics: [
        "System-Level Programming",
        "Embedded C Concepts",
        "Optimizing C for Performance",
        "Manual Memory Layouts",
        "Building Small OS Tools or Compilers",
      ],
      strengths:
        "You’ve reached the peak of C programming. Whether it's writing low-level system tools or optimizing embedded software — you’ve got the power to build from scratch.",
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
        language: "C", // or "Python"
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
