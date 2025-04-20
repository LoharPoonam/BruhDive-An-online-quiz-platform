import React from "react";
import "./Feedback.css";

const Feedback = () => {
  const testimonials = [
    {
      text: "BruhDive helped me understand where I stand in my coding journey. The guidance was spot on!",
      author: "- Alex Chen",
    },
    {
      text: "The most chill way to assess your programming skills. No stress, just pure learning!",
      author: "- Sarah Johnson",
    },
    {
      text: "Finally found my weak spots and got actionable advice on how to improve. Thanks BruhDive!",
      author: "- Mike Thompson",
    },
    {
      text: "I love how BruhDive makes learning fun and engaging. Highly recommended for beginners!",
      author: "- Emily Davis",
    },
    {
      text: "The quizzes are challenging but rewarding. I feel more confident in my coding skills now!",
      author: "- John Smith",
    },
    {
      text: "BruhDive is a game-changer for anyone looking to improve their programming skills. 10/10!",
      author: "- Laura Wilson",
    },
  ];

  return (
    <section className="feedback">
      <h2>What People Are Saying</h2>
      <div className="feedback-container">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="feedback-box">
            <p>{testimonial.text}</p>
            <div className="feedback-author">{testimonial.author}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Feedback;
