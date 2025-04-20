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
        message: "Just landed in Kotlinland. Let’s get those basics rolling!",
        topics: [
          "Variables (val vs var)",
          "Data Types",
          "println()",
          "Basic Arithmetic",
          "Simple If Statements",
        ],
        strengths:
          "You're stepping into Kotlin – great choice! Start by focusing on how Kotlin handles variables, data types, and simple expressions.",
      };

    if (score <= 9)
      return {
        level: "Newbie",
        color: "#fd7e14",
        message: "You’ve begun Kotlin talks. Looking good!",
        topics: [
          "Conditionals (if-else, when)",
          "Loops (for, while)",
          "Null Safety Basics",
          "String Templates",
          "Basic Functions",
        ],
        strengths:
          "You’re now understanding Kotlin’s syntax and flow. Practice using control structures, handling nulls, and creating small utility functions.",
      };

    if (score <= 13)
      return {
        level: "🧐 Beginner",
        color: "#ffc107",
        message: "You’ve got Kotlin basics down. Time to get creative.",
        topics: [
          "Functions with Parameters",
          "Collections (List, Set, Map)",
          "Loops with Ranges",
          "Smart Casting",
          "Named Arguments & Default Values",
        ],
        strengths:
          "You’re writing modular and reusable code. Now focus on clean syntax, collection handling, and building readable logic.",
      };

    if (score <= 17)
      return {
        level: "🔥 Enthusiast",
        color: "#17a2b8",
        message: "Kotlin is starting to feel like home. Keep going!",
        topics: [
          "OOP (Classes & Objects)",
          "Constructors & Init Blocks",
          "Data Classes",
          "Extension Functions",
          "Try-Catch Blocks",
        ],
        strengths:
          "You understand Kotlin’s object model and utility features. Focus on writing elegant, safe, and concise code using Kotlin-specific power tools.",
      };

    if (score <= 20)
      return {
        level: "🚀 Intermediate",
        color: "#007bff",
        message: "Confident coder alert! Kotlin skills leveled up.",
        topics: [
          "Inheritance & Interfaces",
          "Lambda Functions",
          "Higher-Order Functions",
          "Sealed Classes",
          "Scopes (apply, let, run)",
        ],
        strengths:
          "You’re writing expressive and reusable Kotlin code. Deepen your understanding of functional programming and advanced Kotlin syntax.",
      };

    if (score <= 23)
      return {
        level: "🧠 Advanced",
        color: "#28a745",
        message:
          "You’ve cracked Kotlin’s powerful features. Serious skills here!",
        topics: [
          "Coroutines & async/await",
          "Flow & Reactive Programming",
          "Delegation",
          "Generic Functions",
          "Inline Functions & Reified Types",
        ],
        strengths:
          "You’re ready for reactive, scalable Kotlin applications. Focus on concurrency, flow management, and making your code both elegant and robust.",
      };

    return {
      level: "👑 Code Master",
      color: "#6610f2",
      message: "Kotlin warrior status unlocked. Build, lead, inspire!",
      topics: [
        "Clean Architecture",
        "Dependency Injection (Koin/Hilt)",
        "Jetpack Compose",
        "Advanced Coroutines",
        "Testing with MockK/JUnit",
        "Performance Optimization",
      ],
      strengths:
        "You’ve mastered Kotlin’s elegance and depth. Time to focus on architecture, efficiency, and team-level practices. Go build amazing stuff!",
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
        language: "Kotlin", // or "Python"
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
