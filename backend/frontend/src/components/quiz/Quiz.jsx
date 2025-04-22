import React, { useState, useRef, useEffect } from "react";
import LanguageCard from "./LanguageCard";
import "./Quiz.css";

const Quiz = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [isAnimating, setIsAnimating] = useState(true);
  const headerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-slide-up");
          }
        });
      },
      { threshold: 0.1 }
    );

    const currentHeaderRef = headerRef.current;
    if (currentHeaderRef) {
      observer.observe(currentHeaderRef);
    }

    return () => {
      if (currentHeaderRef) {
        observer.unobserve(currentHeaderRef);
      }
    };
  }, []);

  const languages = [
    "Python",
    "Java",
    "C++",
    "JavaScript",
    "PHP",
    "SQL",
    "C",
    "C#",
    "Kotlin",
    "Test Yourself",
  ];

  const filteredLanguages = languages.filter((lang) =>
    lang.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="quiz-container">
      <div ref={headerRef} className="quiz-header">
        <div className="header-content">
          <h1>Master Your Coding Journey</h1>
          <p>
            Embark on a personalized learning path tailored to your programming
            aspirations. Our interactive quiz helps you discover the perfect
            programming language and tech domain that aligns with your goals,
            learning style, and career objectives.
          </p>
          <div className="header-features">
            <div className="feature">
              <span className="feature-icon">🎯</span>
              <span>Personalized Recommendations</span>
            </div>
            <div className="feature">
              <span className="feature-icon">🚀</span>
              <span>Career-Focused Insights</span>
            </div>
            <div className="feature">
              <span className="feature-icon">📊</span>
              <span>Skill Level Assessment</span>
            </div>
          </div>
        </div>
      </div>

      <div className="quiz-section">
        <h2>Choose Your Language or Domain</h2>
        <p>
          Select a programming language or tech domain to begin your
          personalized learning journey
        </p>

        <div className="search-container">
          <input
            type="text"
            className="search-input"
            placeholder="Search languages or domains..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <span className="search-icon"></span>
        </div>

        <div className="language-grid">
          {filteredLanguages.length > 0 ? (
            filteredLanguages.map((language, index) => (
              <div
                key={index}
                className="language-card-wrapper"
                style={{
                  animationDelay: `${index * 0.1}s`,
                }}
              >
                <LanguageCard language={language} />
              </div>
            ))
          ) : (
            <div className="no-results">
              No languages or domains found matching your search.
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Quiz;
