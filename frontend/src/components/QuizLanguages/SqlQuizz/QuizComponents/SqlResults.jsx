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
        message: "You're just touching the surface of SQL. Keep practicing!",
        topics: [
          "Basic SELECT Statements",
          "WHERE Clause",
          "Filtering Data",
          "SQL Syntax",
          "Introduction to Tables",
        ],
        strengths:
          "Great start! You’ve entered the SQL realm. Now focus on mastering basic SELECT queries, filtering rows, and understanding how SQL tables are structured.",
      };

    if (score <= 9)
      return {
        level: "Newbie",
        color: "#fd7e14",
        message: "You're getting comfortable with SQL. Keep it up!",
        topics: [
          "GROUP BY & Aggregates",
          "Simple Joins",
          "INSERT Statements",
          "Basic Conditions",
          "DISTINCT Keyword",
        ],
        strengths:
          "You understand how to retrieve and manipulate simple data. Now focus on combining tables with joins and improving your filtering skills using GROUP BY and WHERE.",
      };

    if (score <= 13)
      return {
        level: "🧐 Beginner",
        color: "#ffc107",
        message: "You’ve got solid basics. Time to go deeper.",
        topics: [
          "JOIN Types (INNER, LEFT)",
          "String & Date Functions",
          "Basic Subqueries",
          "Sorting with ORDER BY",
          "NULL & NOT NULL",
        ],
        strengths:
          "You’ve got a working knowledge of SQL structure and flow. Keep practicing how data relates across tables and sharpen your use of built-in functions and sorting.",
      };

    if (score <= 17)
      return {
        level: "🔥 Enthusiast",
        color: "#17a2b8",
        message: "You're fluent in SQL logic. 🔥 Keep going!",
        topics: [
          "HAVING vs WHERE",
          "Aliases and Derived Columns",
          "Combining Data with UNION",
          "ALTER & DROP Table",
          "Nested Queries",
        ],
        strengths:
          "You’re confidently using joins, conditions, and manipulating grouped data. Start optimizing your queries and practicing with more real-world examples.",
      };

    if (score <= 20)
      return {
        level: "🚀 Intermediate",
        color: "#007bff",
        message: "SQL warrior status unlocked. You're flying!",
        topics: [
          "CTEs (WITH Clause)",
          "Window Functions",
          "Data Normalization",
          "Indexes & Performance",
          "Stored Procedures",
        ],
        strengths:
          "You’ve got a grip on complex queries and database manipulation. Now look into optimization, subqueries, and performance enhancements using CTEs and indexing.",
      };

    if (score <= 23)
      return {
        level: "🧠 Advanced",
        color: "#28a745",
        message: "SQL master moves. You can handle complexity.",
        topics: [
          "Advanced Joins",
          "Recursive CTEs",
          "Database Triggers",
          "Partitioning",
          "Role-based Permissions",
        ],
        strengths:
          "You’re comfortable with advanced querying and database architecture. Keep refining how you manage data access, write reusable queries, and maintain large datasets.",
      };

    return {
      level: "👑 Query King",
      color: "#6610f2",
      message: "Certified SQL boss. You can architect entire databases!",
      topics: [
        "Database Design Principles",
        "Transaction Management",
        "Stored Procedures & Triggers",
        "Security & Access Control",
        "Scaling SQL Systems",
      ],
      strengths:
        "You’ve cracked SQL at the highest level — performance, structure, design. You’re ready for data engineering, ETL workflows, and leading SQL-heavy projects. Time to build real apps and scale!",
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
        language: "SQL", // or "Python"
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
