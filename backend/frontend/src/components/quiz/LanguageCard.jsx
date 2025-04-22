import React from "react";
import { useNavigate } from "react-router-dom";
import "./LanguageCard.css";

const LanguageCard = ({ language }) => {
  const navigate = useNavigate();

  const getCategoryIcon = () => {
    const icons = {
      python: "🐍",
      java: "☕",
      "c++": "🔧",
      javascript: "✨",
      php: "💻",
      sql: "📊",
      c: "⚙️",
      "c#": "🎮",
      kotlin: "🤖",
      path: "🛡️",
    };
    return icons[language.toLowerCase()] || "🔮";
  };

  const getLanguageDescription = () => {
    const descriptions = {
      Python:
        "A versatile language known for its simplicity and powerful libraries. Ideal for data science, AI, web development, and automation.",
      Java: "A robust, object-oriented language widely used in enterprise applications, Android development, and large-scale systems.",
      "C++":
        "A powerful system programming language crucial for performance-critical applications like game development and system software.",
      JavaScript:
        "The backbone of web interactivity, essential for creating dynamic and responsive web applications.",
      PHP: "A server-side scripting language popular for web development and creating dynamic website content.",
      SQL: "The standard language for managing and manipulating relational databases across various industries.",
      C: "A fundamental systems programming language that provides low-level access to computer memory and system resources.",
      "C#": "Microsoft's versatile language used for Windows applications, game development with Unity, and enterprise software.",
      Kotlin:
        "A modern language for Android development, known for its conciseness and interoperability with Java.",
      Path: "Hey Bruh! worry about your tech path? Test yourself and discover which tech path fits you best!!",
    };
    return (
      descriptions[language] ||
      "Hey Bruh! worry about your tech path? Test yourself and discover which tech path fits you best!!"
    );
  };

  const handleClick = () => {
    const safeSlug = language
      .toLowerCase()
      .replace("#", "sharp") // Convert C# ➝ csharp
      .replace(/\s+/g, "-"); // Replace spaces

    navigate(`/quiz/${safeSlug}`);

    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, 100);
  };

  return (
    <div className="language-card">
      <div className="language-card-content">
        <div className="language-icon">{getCategoryIcon()}</div>
        <h3 className="language-title">{language}</h3>
        <p className="language-description">{getLanguageDescription()}</p>
      </div>
      <button className="start-button" onClick={handleClick}>
        Dive In! 🚀
      </button>
    </div>
  );
};

export default LanguageCard;
