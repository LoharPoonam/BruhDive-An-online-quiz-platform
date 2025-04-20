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
    // 🔍 Analyze weak topics (not used anymore, removed below)
    const weakTopicsMap = {};
    questionData?.forEach((q, idx) => {
      if (userAnswers?.[idx] !== q.correctAnswer) {
        const topic = q.topic || "Miscellaneous";
        weakTopicsMap[topic] = (weakTopicsMap[topic] || 0) + 1;
      }
    });

    // 🧠 Performance profiles
    if (score <= 4)
      return {
        level: "Noob Mode",
        color: "#6c757d",
        message: "Still loading… keep grinding, bro!",
        topics: [
          "Variables & Data Types",
          "Input/Output Operations",
          "Indentation Rules",
          "Python Syntax Basics",
          "Comments & Code Readability",
        ],
        strengths:
          "You've made the first move—respect! But now it's time to actually understand what code means. Focus hard on how Python talks, like how it stores stuff (variables), how it reacts (conditions), and how it flows (indentation).",
      };

    if (score <= 9)
      return {
        level: "👶 Newbie",
        color: "#fd7e14",
        message: "You got this! Blud steps to greatness.",
        topics: [
          "If-Else Conditions",
          "Looping Patterns (for/while)",
          "Common Syntax Errors",
          "Logic Building",
          "Debugging Basics",
          "Simple Algorithms",
        ],
        strengths:
          "You're getting the hang of it. You’ve probably seen 'for i in range()' more than once now, which is solid. But errors still creep in. Get cozy with dry-running code and debugging line-by-line. Think like the interpreter.",
      };

    if (score <= 13)
      return {
        level: "🧐 Beginner",
        color: "#ffc107",
        message: "Foundations set. Time to level up!",
        topics: [
          "Functions & Arguments",
          "List Operations",
          "String Manipulation",
          "Intro to Dictionaries",
          "Built-in Functions",
          "Code Reusability",
        ],
        strengths:
          "You're not just surviving, you're structuring now. Functions, loops, and data types are your new homies. Keep it going by solving slightly harder problems that involve string parsing or managing data.",
      };

    if (score <= 17)
      return {
        level: "🔥 Enthusiast",
        color: "#17a2b8",
        message: "You’re cookin’! Not bad at all.",
        topics: [
          "List Comprehensions",
          "Try-Except Handling",
          "Nested Loops & Conditionals",
          "Dictionary Mastery",
          "Code Optimization Tricks",
          "Reading Docs Efficiently",
        ],
        strengths:
          "You're writing code that looks real now. Handling logic and structure isn’t a problem anymore, but watch out for messy or repetitive code. Try rethinking your code to make it cleaner, shorter, smarter.",
      };

    if (score <= 20)
      return {
        level: "🚀 Intermediate",
        color: "#007bff",
        message: "You’re in the zone. Almost elite!",
        topics: [
          "OOP Concepts (Classes & Objects)",
          "File Handling (open/read/write)",
          "Lambda & Functional Patterns",
          "Time, Date & Math Modules",
          "Small-scale Project Structuring",
          "Testing & Validation",
        ],
        strengths:
          "You’ve probably started thinking beyond loops. That’s elite behavior. Work on building small projects and learn to structure files, functions, and data. Understanding reusability and DRY code is key now.",
      };

    if (score <= 23)
      return {
        level: "🧠 Advanced",
        color: "#28a745",
        message: "Big brain moves. You’re killin’ it!",
        topics: [
          "Recursion Logic",
          "Multithreading & Performance",
          "Regex (Search Patterns)",
          "Working with APIs",
          "Data Serialization (JSON/XML)",
          "Unit Testing Frameworks",
        ],
        strengths:
          "You’re solving hard problems and building impressive logic. But now’s the time to optimize and make your code scalable. Look into performance bottlenecks, clean architecture, and external data handling.",
      };

    return {
      level: "👑 Code Master",
      color: "#6610f2",
      message: "Certified legend. Bruh, you cracked it!",
      topics: [
        "Building Full Apps (Django/Flask)",
        "Databases (SQLite/PostgreSQL)",
        "Software Architecture Patterns",
        "Open Source Contributions",
        "Design Patterns (MVC, Singleton)",
        "System Design Thinking",
      ],
      strengths:
        "You've clearly been coding hard. This isn’t just practice anymore—you’re ready to mentor others, contribute to real-world codebases, or launch your own projects. Focus on quality, scalability, and collaboration now.",
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
        language: "Python", // or "Python"
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
