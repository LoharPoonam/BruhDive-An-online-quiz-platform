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
        message: "Welcome to the world of C#! Let’s get those basics rolling.",
        topics: [
          "Data Types & Variables",
          "Console.ReadLine() / Console.WriteLine()",
          "Basic Operators",
          "Semicolon Usage",
          "Simple If Statements",
        ],
        strengths:
          "You're just getting started. Focus on syntax, variable declarations, and how to interact with the console. Build your confidence one line at a time!",
      };

    if (score <= 9)
      return {
        level: "Newbie",
        color: "#fd7e14",
        message: "You're walking steady in C#. Keep learning the ropes!",
        topics: [
          "If-Else Conditions",
          "Loops (for, while, foreach)",
          "Methods & Return Types",
          "Arrays",
          "Basic String Operations",
        ],
        strengths:
          "You're getting the hang of logic and structure. Practice method writing, looping over arrays, and working with basic conditions.",
      };

    if (score <= 13)
      return {
        level: "🧐 Beginner",
        color: "#ffc107",
        message: "Solid start! You’re building real logic now.",
        topics: [
          "Classes & Objects",
          "Method Overloading",
          "Properties (get/set)",
          "Namespaces",
          "Enum & Structs",
        ],
        strengths:
          "You’re diving into OOP fundamentals. Start writing your own classes, understand constructors, and get comfy with reusable code.",
      };

    if (score <= 17)
      return {
        level: "🔥 Enthusiast",
        color: "#17a2b8",
        message: "You're writing clean C# code. Keep pushing forward!",
        topics: [
          "Collections (List, Dictionary)",
          "Exception Handling (try-catch)",
          "File I/O with StreamReader/Writer",
          "Nullable Types",
          "Intro to LINQ",
        ],
        strengths:
          "Your knowledge is growing strong. You can now manage real-world data, read from files, and handle exceptions gracefully.",
      };

    if (score <= 20)
      return {
        level: "🚀 Intermediate",
        color: "#007bff",
        message: "You’re an efficient developer now. Keep climbing!",
        topics: [
          "Interfaces & Abstraction",
          "LINQ Queries",
          "Delegates & Events",
          "Indexers",
          "Working with DateTime",
        ],
        strengths:
          "You’re embracing C#'s elegant features like LINQ and interfaces. Explore event-driven programming and efficient data processing.",
      };

    if (score <= 23)
      return {
        level: "🧠 Advanced",
        color: "#28a745",
        message: "You're thinking in C#. That’s expert behavior!",
        topics: [
          "Async & Await",
          "Generics",
          "Dependency Injection",
          "Extension Methods",
          "Multithreading (Tasks, ThreadPool)",
        ],
        strengths:
          "You're using modern C# tools and patterns. Build scalable apps and explore async workflows, threading, and flexible architectures.",
      };

    return {
      level: "👑 Code Master",
      color: "#6610f2",
      message: "C# pro status unlocked. You lead with clean, powerful code.",
      topics: [
        "Design Patterns (Singleton, Factory, Strategy)",
        "Entity Framework Core",
        "Advanced LINQ & Lambda Expressions",
        "Memory Optimization & Profiling",
        "Building APIs with ASP.NET Core",
      ],
      strengths:
        "You're ready to lead serious projects. Build modern web apps, optimize performance, and architect clean codebases using best practices.",
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
        language: "C#", // or "Python"
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
