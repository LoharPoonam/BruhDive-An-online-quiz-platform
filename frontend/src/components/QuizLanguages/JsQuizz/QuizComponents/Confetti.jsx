import React, { useEffect, useState } from "react";

const ConfettiAnimation = () => {
  const [confetti, setConfetti] = useState([]);

  useEffect(() => {
    const generateConfetti = () => {
      const confettiCount = 100;
      const newConfetti = Array.from({ length: confettiCount }, (_, index) => ({
        id: index,
        left: `${Math.random() * 100}%`,
        animationDelay: `${Math.random() * 2}s`,
        color: getRandomColor(),
        size: `${Math.random() * 10 + 5}px`,
      }));
      setConfetti(newConfetti);
    };

    generateConfetti();
  }, []);

  const getRandomColor = () => {
    const colors = [
      "#ff6b6b",
      "#4ecdc4",
      "#45b7d1",
      "#ff9ff3",
      "#6a5af9",
      "#2575fc",
    ];
    return colors[Math.floor(Math.random() * colors.length)];
  };

  return (
    <div className="confetti-container">
      {confetti.map((piece) => (
        <div
          key={piece.id}
          style={{
            position: "absolute",
            left: piece.left,
            top: "-10px",
            width: piece.size,
            height: piece.size,
            backgroundColor: piece.color,
            borderRadius: "50%",
            animation: "fall 3s linear infinite",
            animationDelay: piece.animationDelay,
            opacity: 0.7,
          }}
        />
      ))}
      <style jsx>{`
        @keyframes fall {
          to {
            transform: translateY(100vh) rotate(360deg);
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
};

export default ConfettiAnimation;
