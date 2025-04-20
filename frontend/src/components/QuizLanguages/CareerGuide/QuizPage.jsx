import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Confetti from "react-confetti";
import { fetchQuiz } from "../../../utils/fetchQuiz";
import "./QuizPage.css";

function QuizPage() {
  const navigate = useNavigate();
  const [questions, setQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [quizComplete, setQuizComplete] = useState(false);
  const [domainPerformance, setDomainPerformance] = useState({});
  const [loading, setLoading] = useState(true);
  const [careerRecommendations, setCareerRecommendations] = useState([]);
  const [topDomains, setTopDomains] = useState([]);
  const [overallScore, setOverallScore] = useState(0);
  const [fetchingRecommendations, setFetchingRecommendations] = useState(false);
  const [showQuitModal, setShowQuitModal] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);

  // Function to load questions - extracted to be reusable
  const loadQuizQuestions = async (checkSaved = true) => {
    try {
      setLoading(true);

      if (checkSaved) {
        const quizCompleted = localStorage.getItem("quizCompleted");
        if (!quizCompleted) {
          const savedQuizState = localStorage.getItem("quizState");
          if (savedQuizState) {
            const {
              questions: savedQuestions,
              currentQuestion: savedCurrentQuestion,
              selectedAnswers: savedSelectedAnswers,
              domainPerformance: savedDomainPerformance,
            } = JSON.parse(savedQuizState);

            setQuestions(savedQuestions);
            setCurrentQuestion(savedCurrentQuestion);
            setSelectedAnswers(savedSelectedAnswers);
            setDomainPerformance(savedDomainPerformance);
            setLoading(false);
            return;
          }
        }
      }

      // Fetch new quiz
      const data = await fetchQuiz();
      setQuestions(data);

      // Setup domain performance
      const domains = [...new Set(data.map((q) => q.domain))];
      const initialPerformance = {};
      domains.forEach((domain) => {
        initialPerformance[domain] = {
          attempted: 0,
          correct: 0,
        };
      });
      setDomainPerformance(initialPerformance);

      setLoading(false);
    } catch (error) {
      console.error("Failed to load quiz:", error);
      setLoading(false);
    }
  };

  // Load saved quiz state or new quiz on component mount
  useEffect(() => {
    loadQuizQuestions();
  }, []);

  // Confetti effect
  useEffect(() => {
    if (quizComplete) {
      setShowConfetti(true);
      const timer = setTimeout(() => {
        setShowConfetti(false);
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [quizComplete]);

  // Save quiz state to localStorage whenever it changes
  useEffect(() => {
    if (questions.length > 0) {
      const quizState = {
        questions,
        currentQuestion,
        selectedAnswers,
        domainPerformance,
      };
      localStorage.setItem("quizState", JSON.stringify(quizState));
    }
  }, [questions, currentQuestion, selectedAnswers, domainPerformance]);

  const handleAnswerSelect = (questionIndex, answer) => {
    setSelectedAnswers({
      ...selectedAnswers,
      [questionIndex]: answer,
    });
  };

  // This function now returns the updated domain performance instead of using setState
  const getUpdatedDomainPerformance = (questionIndex) => {
    const currentQ = questions[questionIndex];
    const domain = currentQ.domain;
    const isCorrect = selectedAnswers[questionIndex] === currentQ.answer;

    return {
      ...domainPerformance,
      [domain]: {
        attempted: domainPerformance[domain].attempted + 1,
        correct: isCorrect
          ? domainPerformance[domain].correct + 1
          : domainPerformance[domain].correct,
      },
    };
  };

  const handleNextQuestion = () => {
    // Update domain performance for the current question
    const updatedPerformance = getUpdatedDomainPerformance(currentQuestion);
    setDomainPerformance(updatedPerformance);

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      finalizeQuiz(updatedPerformance);
    }
  };

  const handlePreviousQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const finalizeQuiz = (updatedPerformance) => {
    // Calculate results based on the updated performance
    calculateResults(updatedPerformance);

    // Now fetch recommendations using the final performance data
    fetchCareerRecommendations(updatedPerformance);

    setQuizComplete(true);

    // Save quiz result to localStorage for history
    saveQuizResultToHistory(updatedPerformance);

    // Clear saved quiz state
    localStorage.removeItem("quizState");

    // Mark that quiz has been completed
    localStorage.setItem("quizCompleted", "true");
  };

  const saveQuizResultToHistory = (finalPerformance) => {
    // Calculate total correct answers
    let totalCorrect = 0;
    let totalQuestions = questions.length;

    Object.entries(finalPerformance).forEach(([_, stats]) => {
      totalCorrect += stats.correct;
    });

    // Determine level based on score percentage
    const scorePercentage = Math.round((totalCorrect / totalQuestions) * 100);
    let level = "Beginner";
    if (scorePercentage >= 80) level = "Expert";
    else if (scorePercentage >= 60) level = "Intermediate";

    // Create result object
    const result = {
      language: "Tech Career", // Could be more specific based on quiz type
      score: totalCorrect,
      total: totalQuestions,
      level:
        "Career Explorer (No formal levels - just insights to guide your journey!) 😉",
      timestamp: Date.now(),
      topDomain: topDomains.length > 0 ? topDomains[0] : "General",
    };

    // Get existing results or initialize empty array
    const existingResults = JSON.parse(
      localStorage.getItem("quizResults") || "[]"
    );

    // Add new result and save back to localStorage
    existingResults.unshift(result); // Add to beginning of array

    // Limit to last 10 results to prevent localStorage from growing too large
    const limitedResults = existingResults.slice(0, 10);

    localStorage.setItem("quizResults", JSON.stringify(limitedResults));
  };

  const calculateResults = (finalPerformance) => {
    const scores = {};
    let totalCorrect = 0;
    let totalAttempted = 0;

    Object.entries(finalPerformance).forEach(([domain, stats]) => {
      if (stats.attempted > 0) {
        scores[domain] = {
          percentage: Math.round((stats.correct / stats.attempted) * 100),
          correct: stats.correct,
          attempted: stats.attempted,
        };
        totalCorrect += stats.correct;
        totalAttempted += stats.attempted;
      }
    });

    const overall =
      totalAttempted > 0
        ? Math.round((totalCorrect / totalAttempted) * 100)
        : 0;
    setOverallScore(overall);

    const strongDomains = Object.entries(scores)
      .filter(([_, stats]) => stats.percentage >= 60)
      .sort((a, b) => b[1].percentage - a[1].percentage)
      .map(([domain]) => domain);

    setTopDomains(strongDomains);
  };

  const fetchCareerRecommendations = async (finalPerformance) => {
    try {
      setFetchingRecommendations(true);

      const response = await fetch(
        "http://localhost:5000/api/career-recommendations",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ domainPerformance: finalPerformance }),
        }
      );

      if (response.ok) {
        const data = await response.json();
        setCareerRecommendations(data);
      } else {
        const recommendations =
          generateFallbackRecommendations(finalPerformance);
        setCareerRecommendations(recommendations);
      }
    } catch (error) {
      console.error("Failed to fetch career recommendations:", error);
      const recommendations = generateFallbackRecommendations(finalPerformance);
      setCareerRecommendations(recommendations);
    } finally {
      setFetchingRecommendations(false);
    }
  };

  const generateFallbackRecommendations = (finalPerformance) => {
    const scores = {};
    let totalCorrect = 0;
    let totalAttempted = 0;

    Object.entries(finalPerformance).forEach(([domain, stats]) => {
      if (stats.attempted > 0) {
        scores[domain] = {
          percentage: Math.round((stats.correct / stats.attempted) * 100),
          correct: stats.correct,
          attempted: stats.attempted,
        };
        totalCorrect += stats.correct;
        totalAttempted += stats.attempted;
      }
    });

    const overallScore =
      totalAttempted > 0
        ? Math.round((totalCorrect / totalAttempted) * 100)
        : 0;

    const strongDomains = Object.entries(scores)
      .filter(([_, stats]) => stats.percentage >= 70)
      .sort((a, b) => b[1].percentage - a[1].percentage)
      .map(([domain]) => domain);

    const topDomain = strongDomains[0];

    if (!topDomain || overallScore < 50) {
      return [
        {
          title: "Tech Explorer",
          description:
            "You're still building your foundation in tech. Explore different domains and practice more to find your strengths.",
          keySkills: [
            "Problem Solving",
            "Fundamentals of Programming",
            "Technical Curiosity",
            "Self-Learning",
          ],
          icon: "🔍",
        },
      ];
    }

    const domainToCareer = {
      "Web Development": {
        title: "Frontend Developer",
        description:
          "You've shown strength in creating web interfaces and understanding user-centric design.",
        keySkills: ["JavaScript", "React", "HTML/CSS", "UI Design"],
        icon: "💻",
      },
      "Frontend / UI/UX": {
        title: "Frontend Developer",
        description:
          "You've demonstrated a strong grasp of frontend development and design principles.",
        keySkills: ["HTML", "CSS", "React", "UX Design"],
        icon: "🎨",
      },
      "Backend / Java / Node": {
        title: "Backend Developer",
        description:
          "You performed well in backend logic and server-side technology.",
        keySkills: ["Node.js", "Java", "APIs", "Database Design"],
        icon: "⚙️",
      },
      "Data Structures & Algorithms": {
        title: "Software Engineer",
        description:
          "Your strong problem-solving skills make you a great fit for software engineering.",
        keySkills: [
          "Algorithms",
          "Data Structures",
          "System Design",
          "Debugging",
        ],
        icon: "🧠",
      },
      "DevOps / Cloud": {
        title: "DevOps Engineer",
        description:
          "Your knowledge of infrastructure and deployment practices suggests a great fit for DevOps.",
        keySkills: ["CI/CD", "Cloud Platforms", "Docker", "Monitoring"],
        icon: "☁️",
      },
      Cybersecurity: {
        title: "Security Analyst",
        description:
          "You've shown awareness in protecting systems, which suits cybersecurity roles.",
        keySkills: [
          "Network Security",
          "Threat Modeling",
          "Encryption",
          "Risk Management",
        ],
        icon: "🛡️",
      },
      "Software Engineering": {
        title: "Software Developer",
        description:
          "You've shown strong understanding of core software engineering concepts.",
        keySkills: [
          "System Design",
          "Code Quality",
          "Version Control",
          "Design Patterns",
        ],
        icon: "🧮",
      },
      "Database Systems": {
        title: "Database Engineer",
        description:
          "You have strong skills in managing and optimizing databases.",
        keySkills: ["SQL", "Data Modeling", "Database Performance", "Indexing"],
        icon: "📊",
      },
      "Machine Learning / AI": {
        title: "AI Developer",
        description:
          "You've shown promising capabilities in machine learning and AI.",
        keySkills: ["Python", "ML Models", "Data Analysis", "Deep Learning"],
        icon: "🤖",
      },
      "Mobile Development": {
        title: "Mobile App Developer",
        description:
          "You understand mobile platforms and UI, ideal for mobile app development.",
        keySkills: ["Flutter", "React Native", "Swift/Kotlin", "Mobile UX"],
        icon: "📱",
      },
    };

    return [
      domainToCareer[topDomain] || {
        title: "Tech Generalist",
        description:
          "You have a balanced skill set across domains, making you adaptable to various tech roles.",
        keySkills: ["Web", "Backend", "Problem Solving", "Collaboration"],
        icon: "🔧",
      },
    ];
  };

  const handleRetakeQuiz = async () => {
    setQuizComplete(false);
    setSelectedAnswers({});
    setCurrentQuestion(0);
    setCareerRecommendations([]);

    // Clear saved state and completion flag
    localStorage.removeItem("quizState");
    localStorage.removeItem("quizCompleted");

    setLoading(true);
    await loadQuizQuestions(false); // force fresh questions
  };

  const navigateToResources = () => {
    navigate("/resources");
  };

  const navigateToQuizHome = () => {
    navigate("/quiz");
  };

  const handleQuitQuiz = () => {
    setShowQuitModal(true);
  };

  const confirmQuitQuiz = () => {
    localStorage.removeItem("quizState");
    localStorage.removeItem("quizCompleted");
    navigate("/quiz");
  };

  const cancelQuitQuiz = () => {
    setShowQuitModal(false);
  };

  const getScoreColor = (percentage) => {
    if (percentage >= 80) return "cg-excellent";
    if (percentage >= 70) return "cg-good";
    if (percentage >= 50) return "cg-average";
    return "cg-needs-improvement";
  };

  if (loading) {
    return (
      <div className="cg-quiz-loading">
        <div className="cg-loading-spinner"></div>
        <p>Loading your career guidance quiz...</p>
      </div>
    );
  }

  if (questions.length === 0) {
    return <p>No questions available. Please try again later.</p>;
  }

  if (quizComplete) {
    return (
      <div className="cg-results-container">
        {showConfetti && <Confetti recycle={false} numberOfPieces={500} />}
        <div className="cg-results-header">
          <h1>Your Career Guidance Results</h1>
          <div className="cg-overall-score">
            <div className={`cg-score-circle ${getScoreColor(overallScore)}`}>
              <span className="cg-score-text">{overallScore}%</span>
            </div>
            <p>Overall Performance</p>
          </div>
        </div>

        <div className="cg-recommendations-section">
          <h2>Career Recommendations</h2>
          {fetchingRecommendations ? (
            <div className="cg-loading-spinner"></div>
          ) : (
            <div className="cg-recommendations-grid">
              {careerRecommendations.map((recommendation, index) => (
                <div className="cg-recommendation-card" key={index}>
                  <div className="cg-recommendation-icon">
                    {recommendation.icon}
                  </div>
                  <h3>{recommendation.title}</h3>
                  <p>{recommendation.description}</p>
                  <div className="cg-key-skills">
                    <h4>Key Skills to Develop:</h4>
                    <ul>
                      {recommendation.keySkills?.map((skill, i) => (
                        <li key={i}>{skill}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="cg-action-buttons">
          <button className="cg-primary-btn" onClick={navigateToResources}>
            See Learning Resources
          </button>
          <button className="cg-secondary-btn" onClick={handleRetakeQuiz}>
            Next Quiz
          </button>
          <button className="cg-tertiary-btn" onClick={navigateToQuizHome}>
            Back to Main Quiz
          </button>
        </div>
      </div>
    );
  }

  const currentQ = questions[currentQuestion];
  const progress = ((currentQuestion + 1) / questions.length) * 100;

  return (
    <div className="cg-quiz-container">
      {/* Quit Quiz Confirmation Modal */}
      {showQuitModal && (
        <div className="cg-modal-overlay">
          <div className="cg-modal">
            <h3>Are you sure you want to quit the quiz?</h3>
            <p>Your progress will be lost if you quit now.</p>
            <div className="cg-modal-buttons">
              <button className="cg-btn-secondary" onClick={cancelQuitQuiz}>
                Cancel
              </button>
              <button className="cg-btn-primary" onClick={confirmQuitQuiz}>
                Quit Quiz
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="cg-quiz-header">
        <h1>Tech Career Guidance Quiz</h1>
        <div className="cg-quiz-progress">
          <div className="cg-progress-bar">
            <div
              className="cg-progress-bar-fill"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
          <p>
            {currentQuestion + 1} of {questions.length}
          </p>
        </div>
      </div>

      <div className="cg-question-card">
        <h2 className="cg-question-text">{currentQ?.question}</h2>

        <div className="cg-options-container">
          {currentQ?.options?.map((option, idx) => (
            <div
              key={idx}
              className={`cg-option ${
                selectedAnswers[currentQuestion] === option.charAt(0)
                  ? "cg-selected"
                  : ""
              }`}
              onClick={() =>
                handleAnswerSelect(currentQuestion, option.charAt(0))
              }
            >
              {option}
            </div>
          ))}
        </div>
      </div>

      <div className="cg-quiz-actions">
        <button className="cg-btn-quit" onClick={handleQuitQuiz}>
          Quit Quiz
        </button>

        <div className="cg-quiz-nav-buttons">
          <button
            className="cg-btn-previous"
            onClick={handlePreviousQuestion}
            disabled={currentQuestion === 0}
          >
            Previous
          </button>

          <button
            className="cg-btn-next"
            onClick={handleNextQuestion}
            disabled={!selectedAnswers[currentQuestion]}
          >
            {currentQuestion === questions.length - 1
              ? "Finish Quiz"
              : "Next Question"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default QuizPage;
