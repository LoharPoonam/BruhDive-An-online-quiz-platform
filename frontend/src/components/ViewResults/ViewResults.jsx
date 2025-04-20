import React, { useEffect, useState } from "react";
import "./ViewResults.css"; // For custom fallback styling

const ViewResults = () => {
  const [results, setResults] = useState([]);

  useEffect(() => {
    const stored = localStorage.getItem("quizResults");
    if (stored) {
      const parsed = JSON.parse(stored).map((res) => {
        const percentage = Math.round((res.score / (res.total || 25)) * 100);
        const date = new Date(res.timestamp || Date.now()).toLocaleString();
        return { ...res, percentage, date, total: res.total || 25 };
      });
      setResults(parsed);
    }
  }, []);

  const handleClear = () => {
    localStorage.removeItem("quizResults");
    setResults([]);
  };

  return (
    <div className="view-results-container">
      <h1 className="view-results-title">📜 Your Quiz History</h1>
      {results.length === 0 ? (
        <p className="view-results-empty">
          No results yet. Go vibe with some quizzes 😎
        </p>
      ) : (
        <>
          <div className="view-results-list">
            {results.map((res, i) => (
              <div key={i} className="view-result-card">
                <p>
                  <strong>🧠 Language:</strong> {res.language}
                </p>
                <p>
                  <strong>🎯 Score:</strong> {res.score}/{res.total} (
                  {res.percentage}%)
                </p>
                <p>
                  <strong>📈 Level:</strong> {res.level}
                </p>
                <p>
                  <strong>🕒 Date:</strong> {res.date}
                </p>
              </div>
            ))}
          </div>
          <button className="clear-btn" onClick={handleClear}>
            Clear All Results
          </button>
        </>
      )}
    </div>
  );
};

export default ViewResults;
