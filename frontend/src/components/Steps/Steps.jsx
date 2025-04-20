import React from "react";
import "./Steps.css";

const Steps = () => {
  const steps = [
    {
      icon: "🔍",
      title: "1. Choose Your Language",
      description:
        "Select from a wide range of programming languages and topics that interest you the most.",
    },
    {
      icon: "📝",
      title: "2. Take the Quiz",
      description:
        "Answer a series of tailored questions designed to assess your knowledge and skill level.",
    },
    {
      icon: "📊",
      title: "3. Get Your Results",
      description:
        "Receive instant feedback and detailed analysis of your strengths and areas for improvement.",
    },
    {
      icon: "🚀",
      title: "4. Improve Your Skills",
      description:
        "Use our personalized recommendations and resources to level up your coding abilities.",
    },
  ];

  return (
    <section className="steps-section">
      <div className="steps-container">
        <h2 className="section-title">How It Works</h2>
        <div className="steps-grid">
          {steps.map((step, index) => (
            <div key={index} className="step-card">
              <div className="step-icon">{step.icon}</div>
              <h3 className="step-title">{step.title}</h3>
              <p className="step-description">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Steps;
