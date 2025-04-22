import React from "react";
import { useNavigate } from "react-router-dom";
import "./About.css";

const About = () => {
  const navigate = useNavigate();

  const handlequiz = () => {
    navigate("/Quiz");
    window.scrollTo(0, 0); // Scrolls to the top after navigation
  };

  return (
    <div className="about-container">
      <header className="about-header">
        <h1>About BruhDive</h1>
        <p className="tagline">
          Transforming Learning Through Intelligent Assessment
        </p>
      </header>

      <section className="mission-section">
        <div className="mission-content">
          <h2>Our Mission</h2>
          <p>
            At BruhDive, we're revolutionizing skill assessment by combining
            advanced analytics with personalized learning. Our platform goes
            beyond traditional testing to provide actionable insights that help
            users identify weaknesses, optimize study time, and accelerate their
            learning journey.
          </p>
        </div>
        <div className="mission-stats">
          <div className="stat-item">
            <span className="stat-number">1000+</span>
            <span className="stat-label">Active Learners</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">50+</span>
            <span className="stat-label">Skills Assessed</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">75%</span>
            <span className="stat-label">User Satisfaction</span>
          </div>
        </div>
      </section>

      <section className="features-section">
        <h2>Why Choose BruhDive?</h2>
        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon">📊</div>
            <h3>Intelligent Analytics</h3>
            <p>
              Our sophisticated algorithms analyze your performance across
              multiple dimensions, providing detailed insights into your
              strengths and areas for improvement.
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">🎯</div>
            <h3>Personalized Pathways</h3>
            <p>
              Get customized learning recommendations tailored to your unique
              skill profile and learning objectives.
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">⚡</div>
            <h3>Real-Time Feedback</h3>
            <p>
              Receive immediate evaluation of your solutions with actionable
              suggestions for improvement.
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">🌐</div>
            <h3>Comprehensive Skill Coverage</h3>
            <p>
              From fundamental concepts to advanced techniques, our assessments
              cover the full spectrum of technical skills.
            </p>
          </div>
        </div>
      </section>

      <section className="team-section">
        <h2>Our Expertise</h2>
        <p className="team-description">
          BruhDive was founded by a team of learning scientists, assessment
          specialists, and software engineers passionate about making skill
          development more efficient and effective. With decades of combined
          experience in education technology, we've created a platform that
          truly understands how people learn.
        </p>
      </section>

      <section className="cta-section">
        <h2>Ready to Transform Your Learning?</h2>
        <button className="cta-button" onClick={handlequiz}>
          Start Your Assessment Now
        </button>
      </section>
    </div>
  );
};

export default About;
