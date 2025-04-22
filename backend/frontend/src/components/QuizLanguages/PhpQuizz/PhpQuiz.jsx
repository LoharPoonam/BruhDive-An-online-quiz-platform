import React, { useEffect, useState } from "react";
import Countdown from "./QuizComponents/PhpCountdown";
import Question from "./QuizComponents/PhpQuestion";
import Results from "./QuizComponents/PhpResults";
import QuizNav from "./QuizComponents/PhpQuizNav";

import { phpQuestions } from "../../../data/PhpQns/PhpQuestion";
import { phpQuestionsOne } from "../../../data/PhpQns/PhpQuestionOne";
import { phpQuestionsTwo } from "../../../data/PhpQns/PhpQuestionTwo";
import { phpQuestionsThree } from "../../../data/PhpQns/PhpQuestionThree";
import { phpQuestionsFour } from "../../../data/PhpQns/PhpQuestionFour";

const allSets = [
  phpQuestions,
  phpQuestionsOne,
  phpQuestionsTwo,
  phpQuestionsThree,
  phpQuestionsFour,
];

const PhpQuiz = () => {
  const [quizStarted, setQuizStarted] = useState(false);
  const [quizFinished, setQuizFinished] = useState(false);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [questionSet, setQuestionSet] = useState(null);
  const [answers, setAnswers] = useState([]);
  const [score, setScore] = useState(0);
  const [feedback, setFeedback] = useState({ strengths: [], improvements: [] });

  // Prevent tab switching or page becoming inactive
  useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.hidden && quizStarted && !quizFinished) {
        alert(
          "Quiz ended because you left the tab. Try to stay focused next time!"
        );
        resetQuiz(); // Force reset
      }
    };
    document.addEventListener("visibilitychange", handleVisibilityChange);
    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, [quizStarted, quizFinished]);

  // Load existing state (if any)
  useEffect(() => {
    const savedQuiz = JSON.parse(localStorage.getItem("ongoingPhpQuiz"));
    if (savedQuiz && savedQuiz.questionSet?.length > 0) {
      setQuestionSet(savedQuiz.questionSet);
      setAnswers(savedQuiz.answers);
      setCurrentQuestionIndex(savedQuiz.currentQuestionIndex);
      setQuizStarted(true);
    }
  }, []);

  // Save progress during quiz
  useEffect(() => {
    if (quizStarted && !quizFinished && questionSet) {
      localStorage.setItem(
        "ongoingPhpQuiz",
        JSON.stringify({
          questionSet,
          answers,
          currentQuestionIndex,
        })
      );
    }
  }, [quizStarted, quizFinished, questionSet, answers, currentQuestionIndex]);

  const handleStartQuiz = () => {
    const lastIndex = parseInt(localStorage.getItem("lastPhpSetIndex")) || 0;
    const nextIndex = (lastIndex + 1) % allSets.length;
    const selectedSet = allSets[nextIndex];

    setQuestionSet(selectedSet);
    setAnswers(Array(selectedSet.length).fill(null));
    setCurrentQuestionIndex(0);
    setQuizStarted(true);
    setQuizFinished(false);
    setScore(0);
    setFeedback({ strengths: [], improvements: [] });

    localStorage.setItem("lastPhpSetIndex", nextIndex);
    localStorage.setItem(
      "ongoingPhpQuiz",
      JSON.stringify({
        questionSet: selectedSet,
        answers: Array(selectedSet.length).fill(null),
        currentQuestionIndex: 0,
      })
    );
  };

  const handleOptionChange = (option) => {
    const newAnswers = [...answers];
    newAnswers[currentQuestionIndex] = option;
    setAnswers(newAnswers);
  };

  const handleNext = () => {
    if (currentQuestionIndex < questionSet.length - 1) {
      setCurrentQuestionIndex((prev) => prev + 1);
    }
  };

  const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex((prev) => prev - 1);
    }
  };

  const calculateScore = () => {
    let correct = 0;
    const strengths = [];
    const improvements = [];

    questionSet.forEach((q, i) => {
      if (answers[i] === q.correctAnswer) {
        correct++;
        strengths.push(q.topic || "General");
      } else {
        improvements.push(q.topic || "General");
      }
    });

    setScore(correct);
    setFeedback({ strengths, improvements });
    setQuizFinished(true);

    localStorage.removeItem("ongoingPhpQuiz");

    localStorage.setItem(
      "phpQuizResult",
      JSON.stringify({
        date: new Date().toISOString(),
        score: correct,
        outOf: questionSet.length,
        strengths,
        improvements,
      })
    );
  };

  const resetQuiz = () => {
    setQuizStarted(false);
    setQuizFinished(false);
    setQuestionSet(null);
    setAnswers([]);
    setScore(0);
    setCurrentQuestionIndex(0);
    setFeedback({ strengths: [], improvements: [] });
    localStorage.removeItem("ongoingPhpQuiz");
  };

  const restartQuiz = () => {
    resetQuiz();
    handleStartQuiz();
  };

  // Render logic
  if (!quizStarted) return <Countdown onStart={handleStartQuiz} />;
  if (!questionSet) return <div>Loading questions...</div>;
  if (quizFinished) {
    return (
      <Results
        score={score}
        totalQuestions={questionSet.length}
        strengths={feedback.strengths}
        improvements={feedback.improvements}
        userAnswers={answers}
        questionData={questionSet}
        onRestart={restartQuiz}
      />
    );
  }

  return (
    <div className="quiz-app">
      <QuizNav
        currentIndex={currentQuestionIndex}
        totalQuestions={questionSet.length}
      />
      <Question
        question={questionSet[currentQuestionIndex]}
        selectedOption={answers[currentQuestionIndex]}
        onOptionChange={handleOptionChange}
        onNext={handleNext}
        onPrevious={handlePrevious}
        currentIndex={currentQuestionIndex}
        totalQuestions={questionSet.length}
        onSubmit={calculateScore}
      />
    </div>
  );
};

export default PhpQuiz;
