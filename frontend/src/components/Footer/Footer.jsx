import React from "react";
import { FaTwitter, FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-brand">
            <h2 className="footer-logo">BruhDive</h2>
            <p className="footer-tagline">Stay lit, stay coding!🏆💻.</p>
            <div className="footer-social">
              <a
                href="https://twitter.com/"
                aria-label="Twitter"
                className="social-icon"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaTwitter />
              </a>
              <a
                href="https://instagram.com/"
                aria-label="Instagram"
                className="social-icon"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram />
              </a>
              <a
                href="https://www.linkedin.com/in/poonamlohar/"
                aria-label="LinkedIn"
                className="social-icon"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://github.com/LoharPoonam"
                aria-label="GitHub"
                className="social-icon"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub />
              </a>
            </div>
          </div>

          <div className="footer-columns">
            <div className="footer-column">
              <h3 className="footer-heading">Explore</h3>
              <div className="footer-links">
                <a href="/">Home</a>
                <a href="/About">About Us</a>
                <a href="/Quiz">Browse Quizzes</a>
              </div>
            </div>

            <div className="footer-column">
              <h3 className="footer-heading">Support</h3>
              <div className="footer-links">
                <a
                  href="https://discord.gg/AyHN492y"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Community
                </a>
                <a href="/ContactPage">Contact Us</a>
                <a href="/feedback">Feedback</a>
              </div>
            </div>

            <div className="footer-column">
              <h3 className="footer-heading">Legal</h3>
              <div className="footer-links">
                <a
                  href="https://www.termsfeed.com/live/e1ceb7ae-eef0-4fe9-9c58-d44396246b07"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Privacy Policy
                </a>
                <a
                  href="https://www.termsfeed.com/live/47701f09-4f3f-4e5f-8784-2a1cf9340492"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Terms of Service
                </a>
                <a
                  href="https://www.termsfeed.com/live/4b2fe53f-de83-45f0-9b2c-85e54bae1d43"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Cookie Policy
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-copyright">
            © {new Date().getFullYear()} BruhDive. All rights reserved.
          </div>
          <div className="footer-legal-links">
            <a
              href="https://www.termsfeed.com/live/47701f09-4f3f-4e5f-8784-2a1cf9340492"
              target="_blank"
              rel="noopener noreferrer"
            >
              Terms
            </a>
            <span className="divider">•</span>
            <a
              href="https://www.termsfeed.com/live/e1ceb7ae-eef0-4fe9-9c58-d44396246b07"
              target="_blank"
              rel="noopener noreferrer"
            >
              Privacy
            </a>
            <span className="divider">•</span>
            <a
              href="https://www.termsfeed.com/live/4b2fe53f-de83-45f0-9b2c-85e54bae1d43"
              target="_blank"
              rel="noopener noreferrer"
            >
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
