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
        message: "Still loading… keep grinding, bro!",
        topics: [
          "Variables & Data Types",
          "Console Logging",
          "Basic Operators",
          "JS Syntax & Structure",
          "Single-line Comments",
        ],
        strengths:
          "You've taken the first step—respect! Now dive deeper into how JavaScript behaves. Focus on variables, basic arithmetic, and how to use `console.log()` like a debugging ninja.",
      };

    if (score <= 9)
      return {
        level: "Newbie",
        color: "#fd7e14",
        message: "You got this! JS warrior in training.",
        topics: [
          "If-Else Logic",
          "Loops (for, while)",
          "Truthy/Falsy Values",
          "Simple Functions",
          "Array Basics",
          "String Operations",
        ],
        strengths:
          "You're understanding how JS thinks. Conditional logic, loops, and strings are now part of your world. Time to go deeper into logic flow and handling input/output clearly.",
      };

    if (score <= 13)
      return {
        level: "🧐 Beginner",
        color: "#ffc107",
        message: "Foundations set. Let’s level up!",
        topics: [
          "Functions & Parameters",
          "Array Methods (map, filter)",
          "Type Coercion",
          "Boolean Logic",
          "Basic Error Handling",
          "DOM Interaction (intro)",
        ],
        strengths:
          "You're coding functionally now—literally. Learning how to process arrays and control type logic shows solid growth. DOM and events are your next best friends.",
      };

    if (score <= 17)
      return {
        level: "🔥 Enthusiast",
        color: "#17a2b8",
        message: "You’re cookin’! JS is starting to click.",
        topics: [
          "Arrow Functions",
          "Destructuring",
          "Spread/Rest Syntax",
          "Template Literals",
          "Switch Statements",
          "Chaining Array Methods",
        ],
        strengths:
          "You're clearly vibing with JS. You're writing cleaner logic and beginning to grasp power tools like arrow functions and destructuring. Just keep refactoring and sharpening those syntax tricks.",
      };

    if (score <= 20)
      return {
        level: "🚀 Intermediate",
        color: "#007bff",
        message: "You’re in the zone. JS Jedi rising.",
        topics: [
          "Async/Await & Promises",
          "Object Handling (keys, values)",
          "Higher Order Functions",
          "LocalStorage/SessionStorage",
          "Event Handling",
          "Modular JS",
        ],
        strengths:
          "You've unlocked async thinking and data flow awareness. You're likely building small modules and handling browser storage—huge step. Just focus now on consistency and clean logic.",
      };

    if (score <= 23)
      return {
        level: "🧠 Advanced",
        color: "#28a745",
        message: "Big brain JS moves. You’re killin’ it!",
        topics: [
          "Closures",
          "Recursion",
          "Debounce/Throttle",
          "Prototype & Inheritance",
          "Deep Object Cloning",
          "Regex Mastery",
        ],
        strengths:
          "You’re out here writing recursive functions, managing async events, and digging into JavaScript’s deep internals. Start documenting your learning—you're nearly mentor level.",
      };

    return {
      level: "👑 Code Master",
      color: "#6610f2",
      message: "Certified legend. JS God mode unlocked.",
      topics: [
        "Custom Hooks (React)",
        "Design Patterns (Factory, Observer)",
        "Performance Optimization",
        "Memory Leaks & Event Cleanup",
        "Secure Coding Practices",
        "Scalable Frontend Architectures",
      ],
      strengths:
        "You’ve cracked it—clearly. You know JS beyond syntax: performance, architecture, design thinking. You’re ready to build full-scale production apps, lead teams, and inspire others. Don’t stop here—open-source and scale now.",
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
        language: "JavaScript", // or "Python"
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
