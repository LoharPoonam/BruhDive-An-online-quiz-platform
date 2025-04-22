import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./Navbar.css";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar = ({ onAboutClick }) => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavClick = (path) => {
    if (location.pathname === path) {
      // If already on the page, just scroll up smoothly
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      // Navigate to the page, then scroll to top after load
      navigate(path);
      setTimeout(() => window.scrollTo({ top: 0, behavior: "smooth" }), 100);
    }
    setIsOpen(false); // Close menu after clicking
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div
          className="navbar-logo"
          onClick={() => handleNavClick("/")}
          style={{ cursor: "pointer" }}
        >
          <img src="/BDlogo.png" alt="BruhDive Logo" />
          <span>BruhDive</span>
        </div>

        <button
          className="mobile-menu-button"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>

        <div className={`nav-links ${isOpen ? "active" : ""}`}>
          <button onClick={() => handleNavClick("/")}>Home</button>
          <button
            onClick={() => {
              handleNavClick("/about");
              onAboutClick(); // Keep existing About click functionality
            }}
          >
            About
          </button>
          <button onClick={() => handleNavClick("/quiz")}>Quiz</button>
          <button onClick={() => handleNavClick("/support")}>Support</button>
          <button onClick={() => handleNavClick("/resources")}>
            Resources
          </button>
          <button onClick={() => handleNavClick("/results")}>
            ViewResults
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
