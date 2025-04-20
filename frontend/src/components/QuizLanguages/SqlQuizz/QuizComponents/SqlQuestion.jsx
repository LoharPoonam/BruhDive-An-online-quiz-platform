import React, { useState } from "react";
import Editor from "@monaco-editor/react";
import { useNavigate } from "react-router-dom";
import "../../StylesQuiz/Question.css";

const Question = ({
  question,
  selectedOption,
  onOptionChange,
  onNext,
  onPrevious,
  currentIndex,
  totalQuestions,
  onSubmit,
}) => {
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  const handleCodeChange = (value) => {
    onOptionChange(value);
  };

  const handleQuitClick = () => setShowModal(true);
  const confirmQuit = () => {
    localStorage.removeItem("ongoingSqlQuiz");
    navigate("/quiz");
  };
  const cancelQuit = () => setShowModal(false);

  const isLastQuestion = currentIndex === totalQuestions - 1;

  const renderOptions = () => (
    <div className="options-container">
      {question.options.map((option, index) => (
        <label
          key={index}
          className={`option ${selectedOption === option ? "selected" : ""}`}
          htmlFor={`option-${index}`}
        >
          <input
            type="radio"
            id={`option-${index}`}
            name="quiz-option"
            value={option}
            checked={selectedOption === option}
            onChange={() => onOptionChange(option)}
          />
          <span>{option}</span>
        </label>
      ))}
    </div>
  );

  const renderEditor = () => (
    <div className="code-editor-container">
      <Editor
        height="200px"
        defaultLanguage="sql"
        theme="vs-dark"
        value={selectedOption || ""}
        onChange={handleCodeChange}
        options={{
          minimap: { enabled: false },
          fontSize: 14,
          scrollBeyondLastLine: false,
          automaticLayout: true,
        }}
      />
    </div>
  );

  return (
    <div className="quiz-wrapper">
      <div className="question-container">
        <header className="question-header">
          <h2 className="question-number">
            Question {currentIndex + 1} of {totalQuestions}
          </h2>
        </header>

        <h3 className="question-text">{question.question}</h3>

        {question.codeEditor ? renderEditor() : renderOptions()}

        <div className="navigation-buttons">
          {currentIndex > 0 && (
            <button
              onClick={onPrevious}
              className="nav-button backbtn-button"
              aria-label="Previous Question"
            >
              ← Previous
            </button>
          )}

          <button
            className="nav-button quit-button"
            onClick={handleQuitClick}
            aria-label="Quit Quiz"
          >
            ⬅ Quit Quiz
          </button>

          {!isLastQuestion ? (
            <button
              onClick={onNext}
              className="nav-button next-button"
              disabled={!selectedOption}
              aria-label="Next Question"
            >
              Next →
            </button>
          ) : (
            <button
              onClick={onSubmit}
              className="nav-button submitOne-button"
              disabled={!selectedOption}
              aria-label="Submit Quiz"
            >
              Submit Quiz
            </button>
          )}
        </div>
      </div>

      {showModal && (
        <div className="quit-modal-overlay" role="dialog" aria-modal="true">
          <div className="quit-modal">
            <h3>Are you sure you want to quit the quiz?</h3>
            <p>Your progress will be lost.</p>
            <div className="modal-buttons">
              <button className="modal-button confirm" onClick={confirmQuit}>
                Yes, Quit
              </button>
              <button className="modal-button cancel" onClick={cancelQuit}>
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Question;
