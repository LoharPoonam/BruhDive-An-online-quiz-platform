import React from "react";
import "../../StylesQuiz/QuizNav.css";

const QuizNav = ({ currentIndex, totalQuestions }) => {
  return (
    <div className="progress-container">
      <div
        className="progress-bar"
        style={{ width: `${((currentIndex + 1) / totalQuestions) * 100}%` }}
      ></div>
      <div className="progress-text">
        Question {currentIndex + 1} of {totalQuestions}
      </div>
    </div>
  );
};

export default QuizNav;
