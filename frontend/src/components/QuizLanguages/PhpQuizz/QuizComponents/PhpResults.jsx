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
        message: "PHP just said ‘hello world’ to you! Don’t stop now 💡",
        topics: [
          "Syntax & Tags",
          "Variables & Operators",
          "Basic Output (echo)",
          "Data Types",
          "Single-line Comments",
        ],
        strengths:
          "You're at the starting line — which is amazing. Begin by mastering PHP tags, variables, and output formatting. You'll be looping like a pro in no time!",
      };

    if (score <= 9)
      return {
        level: "Newbie",
        color: "#fd7e14",
        message: "Your PHP journey has officially begun!",
        topics: [
          "Conditional Statements",
          "Loops (for, while)",
          "Type Juggling",
          "Simple Arrays",
          "String Concatenation",
        ],
        strengths:
          "You’ve picked up the basics and are building logic with conditions and loops. Time to build small calculators, login systems, or form handlers.",
      };

    if (score <= 13)
      return {
        level: "🧐 Beginner",
        color: "#ffc107",
        message: "Solid! PHP flow is setting in.",
        topics: [
          "Functions & Parameters",
          "Associative Arrays",
          "String Functions",
          "Form Handling (GET/POST)",
          "Type Checking",
        ],
        strengths:
          "You can think programmatically now. Working with forms, data, and basic validation — you're on the right track to backend logic mastery.",
      };

    if (score <= 17)
      return {
        level: "🔥 Enthusiast",
        color: "#17a2b8",
        message: "You’ve got PHP vibes 🔥. Keep building.",
        topics: [
          "File Handling",
          "Session Management",
          "Superglobals",
          "Array Iteration",
          "Basic Error Handling",
        ],
        strengths:
          "You've started doing real-world PHP — managing files, sessions, and server requests. Keep going toward full-stack backend confidence!",
      };

    if (score <= 20)
      return {
        level: "🚀 Intermediate",
        color: "#007bff",
        message: "Backend energy loading... you’re getting there!",
        topics: [
          "OOP in PHP",
          "Constructors & Visibility",
          "Form Validation",
          "Array Functions (map, filter)",
          "Simple CRUD Logic",
        ],
        strengths:
          "You understand objects, memory, and server logic. Try building full login systems or small dashboards with routing and validation!",
      };

    if (score <= 23)
      return {
        level: "🧠 Advanced",
        color: "#28a745",
        message: "PHP power user alert! You’re deep in backend mastery.",
        topics: [
          "Interfaces & Abstract Classes",
          "Trait Usage",
          "Namespaces",
          "Prepared Statements (PDO)",
          "File Upload Handling",
        ],
        strengths:
          "You’re comfortable building modular PHP apps. Time to embrace security, scalability, and MVC patterns like Laravel or CodeIgniter.",
      };

    return {
      level: "👑 Code Master",
      color: "#6610f2",
      message: "Backend king 👑 PHP has no secrets left from you!",
      topics: [
        "Laravel / Symfony",
        "Dependency Injection",
        "Unit Testing (PHPUnit)",
        "REST APIs",
        "Middleware & Routing",
        "Security (XSS, CSRF, SQLi)",
      ],
      strengths:
        "You've got backend authority. You're ready to lead projects, design secure systems, and contribute to PHP frameworks or even build your own.",
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
        language: "PHP", // or "Python"
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
