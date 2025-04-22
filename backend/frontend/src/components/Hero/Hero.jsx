import React, { useState, useEffect } from "react";
import "./Hero.css";

const Hero = () => {
  const [currentMessage, setCurrentMessage] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const [floatingLogos, setFloatingLogos] = useState([]);

  const messages = [
    "Hey Bro! Wassup!",
    "Welcome to BruhDive, where coding meets chill vibes!",
    "Ready to flex those coding skills? Don't stress—just vibe out and dive in!",
    "Quick time! Let's roll!",
  ];

  const logoData = [
    "JavaScript",
    "Python",
    "Java",
    "C++",
    "C",
    "C#",
    "Ruby",
    "PHP",
    "Swift",
    "Kotlin",
    "Go",
    "Rust",
    "TypeScript",
    "Perl",
    "Dart",
    "Scala",
    "R",
    "Objective-C",
    "Lua",
    "Haskell",
    "SQL",
    "Shell",
    "PowerShell",
    "Groovy",
    "F#",
    "Elixir",
    "Erlang",
    "Julia",
    "COBOL",
    "Fortran",
    "Lisp",
    "Scheme",
    "Bash",
    "MATLAB",
    "Prolog",
    "Ada",
    "ABAP",
    "Forth",
    "Delphi",
    "VHDL",
    "Verilog",
    "PL/SQL",
    "PostScript",
    "SAS",
    "ML",
    "Hack",
    "Smalltalk",
    "Modula-2",
    "Crystal",
    "RPG",
  ];

  // Generate pastel colors
  const getRandomPastelColor = () => {
    const hue = Math.floor(Math.random() * 360);
    return `hsl(${hue}, 70%, 85%)`;
  };

  // Initialize floating logos
  useEffect(() => {
    const initialLogos = logoData.map((lang, index) => ({
      id: index,
      text: lang,
      color: getRandomPastelColor(),
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 0.8 + 0.7,
      speed: Math.random() * 0.2 + 0.1,
      direction: Math.random() * 360,
    }));
    setFloatingLogos(initialLogos);

    // Animation loop for floating logos
    const logoInterval = setInterval(() => {
      setFloatingLogos((prevLogos) =>
        prevLogos.map((logo) => {
          const rad = logo.direction * (Math.PI / 180);
          let newX = logo.x + Math.cos(rad) * logo.speed;
          let newY = logo.y + Math.sin(rad) * logo.speed;

          if (newX < 0 || newX > 100) {
            return {
              ...logo,
              x: newX < 0 ? 0 : 100,
              direction: 180 - logo.direction,
            };
          }
          if (newY < 0 || newY > 100) {
            return {
              ...logo,
              y: newY < 0 ? 0 : 100,
              direction: -logo.direction,
            };
          }

          return { ...logo, x: newX, y: newY };
        })
      );
    }, 50);

    return () => clearInterval(logoInterval);
  }, []);

  // Message rotation effect
  useEffect(() => {
    const messageInterval = setInterval(() => {
      setIsVisible(false);
      setTimeout(() => {
        setCurrentMessage((prev) => (prev + 1) % messages.length);
        setIsVisible(true);
      }, 500);
    }, 4000);

    return () => clearInterval(messageInterval);
  }, [messages.length]);

  return (
    <section className="hero">
      <div className="floating-logos">
        {floatingLogos.map((logo) => (
          <div
            key={logo.id}
            className="floating-logo"
            style={{
              color: logo.color,
              left: `${logo.x}vw`,
              top: `${logo.y}vh`,
              fontSize: `${logo.size}rem`,
              opacity: 0.7,
              transform: `rotate(${logo.direction - 90}deg)`,
              transition: "all 0.5s ease-out",
            }}
          >
            {logo.text}
          </div>
        ))}
      </div>

      <div className="hero-content">
        <h1 className={`hero-text ${isVisible ? "visible" : ""}`}>
          {messages[currentMessage]}
        </h1>
      </div>
    </section>
  );
};

export default Hero;
