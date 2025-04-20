import React, { useState, useEffect } from "react";
import "../../StylesQuiz/Countdown.css";

const Countdown = ({ onStart, darkMode = false }) => {
  const [count, setCount] = useState(3);

  useEffect(() => {
    if (count > 0) {
      const timer = setTimeout(() => setCount(count - 1), 1000);
      return () => clearTimeout(timer);
    } else {
      setTimeout(() => onStart(), 1000);
    }
  }, [count, onStart]);

  return (
    <div
      className={`countdown-container ${darkMode ? "dark-mode" : ""}`}
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {count > 0 ? (
        <div className="countdown-number">{count}</div>
      ) : (
        <div className="go-text">GO!</div>
      )}
    </div>
  );
};

export default Countdown;
