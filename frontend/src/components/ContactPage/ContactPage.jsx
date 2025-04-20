import React, { useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import {
  FiMail,
  FiPhone,
  FiHelpCircle,
  FiUser,
  FiCode,
  FiUsers,
} from "react-icons/fi";
import { FaStar, FaRegStar } from "react-icons/fa";
import "./ContactPage.css";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    feedback: "",
  });
  const [currentRating, setCurrentRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);
  const [activeTab, setActiveTab] = useState("contact");
  const [modal, setModal] = useState({ show: false, message: "", type: "" });
  const [isLoading, setIsLoading] = useState(false);

  // Initialize EmailJS
  useEffect(() => {
    emailjs.init("DSlAHjifjyxPB7H46");
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const showModal = (message, type = "success") => {
    setModal({ show: true, message, type });
    setTimeout(() => setModal({ show: false, message: "", type: "" }), 5000);
  };

  const rate = (stars) => {
    setCurrentRating((prev) => (prev === stars ? 0 : stars));
  };

  const submitForm = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    if (!formData.name || !formData.email || !formData.message) {
      showModal("Please fill out all fields.", "error");
      setIsLoading(false);
      return;
    }

    const userTemplateParams = {
      to_name: formData.name,
      to_email: formData.email,
      from_name: "BruhDive Support",
      message: formData.message,
      reply_to: "support@bruhdive.com",
    };

    const adminTemplateParams = {
      user_name: formData.name,
      user_email: formData.email,
      message: formData.message,
      received_at: new Date().toLocaleString(),
    };

    try {
      // Send to user
      await emailjs.send(
        "service_d06pjbi",
        "template_2bi9y0i",
        userTemplateParams,
        "gceGah4BS0TTJh4OR"
      );

      // Send to admin
      await emailjs.send(
        "service_d06pjbi",
        "template_hrhnsnx",
        adminTemplateParams,
        "gceGah4BS0TTJh4OR"
      );

      showModal(
        "Your message has been sent! Check your email for confirmation."
      );
      setFormData({
        name: "",
        email: "",
        message: "",
        feedback: "",
      });
    } catch (error) {
      console.error("Email error:", error);
      showModal(
        "Failed to send message. Please try again or contact us directly.",
        "error"
      );
    } finally {
      setIsLoading(false);
    }
  };

  const submitFeedback = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    if (!formData.name || !formData.email) {
      showModal("Please fill out your name and email.", "error");
      setIsLoading(false);
      return;
    }

    if (currentRating === 0) {
      showModal("Please select a star rating.", "error");
      setIsLoading(false);
      return;
    }

    const feedbackData = {
      user_name: formData.name,
      user_email: formData.email,
      rating: currentRating,
      feedback: formData.feedback || "No additional comments",
      date: new Date().toLocaleDateString(),
    };

    try {
      // Send to user
      await emailjs.send(
        "service_wa34h4k",
        "template_0kwx4qi",
        {
          ...feedbackData,
          to_email: formData.email,
        },
        "DSlAHjifjyxPB7H46"
      );

      // Send to admin
      await emailjs.send(
        "service_wa34h4k",
        "template_k4yfznb",
        {
          ...feedbackData,
          to_email: "shitsharingu@gmail.com",
        },
        "DSlAHjifjyxPB7H46"
      );

      showModal("Thank you for your feedback!");
      setFormData({
        name: "",
        email: "",
        message: "",
        feedback: "",
      });
      setCurrentRating(0);
    } catch (error) {
      console.error("Feedback error:", error);
      showModal("Failed to submit feedback. Please try again.", "error");
    } finally {
      setIsLoading(false);
    }
  };

  const supportCategories = [
    {
      icon: <FiUser size={24} />,
      title: "Account & Profile",
      description: "Manage your account settings and security preferences",
    },
    {
      icon: <FiCode size={24} />,
      title: "Learning Platform",
      description: "Get help with courses, assignments, and technical issues",
    },
    {
      icon: <FiUsers size={24} />,
      title: "Community",
      description: "Peer programming, code reviews, and community guidelines",
    },
  ];

  const supportChannels = [
    {
      icon: <FiMail size={24} />,
      title: "Email Support",
      contact: "help@bruhdive.com",
      details: "Response within 24 hours",
    },
    {
      icon: <FiPhone size={24} />,
      title: "Phone Support",
      contact: "+1 (555) 123-4567",
      details: "Mon-Fri, 9am-6pm EST",
    },
    {
      icon: <FiHelpCircle size={24} />,
      title: "Live Chat (Offline)",
      contact: "Try Email Instead",
      details:
        "Live support is currently unavailable. Reach out via contact form or email for assistance.",
    },
  ];

  return (
    <div className="contact-page">
      {modal.show && (
        <div className={`popup-message ${modal.type}`}>{modal.message}</div>
      )}

      <div className="support-grid">
        {supportCategories.map((category, index) => (
          <div className="support-category" key={index}>
            <div className="category-icon">{category.icon}</div>
            <h3>{category.title}</h3>
            <p>{category.description}</p>
          </div>
        ))}
      </div>

      <div className="tab-navigation">
        <button
          className={`tab-button ${activeTab === "contact" ? "active" : ""}`}
          onClick={() => setActiveTab("contact")}
        >
          Contact Us
        </button>
        <button
          className={`tab-button ${activeTab === "feedback" ? "active" : ""}`}
          onClick={() => setActiveTab("feedback")}
        >
          Give Feedback
        </button>
      </div>

      <div className="main-content">
        {activeTab === "contact" && (
          <div className="contact-section">
            <div className="contact-form-wrapper">
              <form onSubmit={submitForm} className="contact-form">
                <h2>Send us a message</h2>
                <div className="form-group">
                  <label htmlFor="name">Your Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="message">How can we help?</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Describe your issue or question..."
                    rows="5"
                    required
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="submit-button"
                  disabled={isLoading}
                >
                  {isLoading ? "Sending..." : "Send Message"}
                </button>
              </form>
            </div>

            <div className="support-channels">
              <h2>Other ways to reach us</h2>
              {supportChannels.map((channel, index) => (
                <div className="channel-card" key={index}>
                  <div className="channel-icon">{channel.icon}</div>
                  <h3>{channel.title}</h3>
                  <p className="channel-contact">{channel.contact}</p>
                  {channel.details && (
                    <p className="channel-details">{channel.details}</p>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === "feedback" && (
          <form onSubmit={submitFeedback} className="feedback-form">
            <h2>We'd love your feedback</h2>
            <p className="feedback-description">
              Your input helps us improve our services. Please share your
              experience with us.
            </p>

            <div className="form-group">
              <label htmlFor="feedback-name">Your Name</label>
              <input
                type="text"
                id="feedback-name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="John Doe"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="feedback-email">Email Address</label>
              <input
                type="email"
                id="feedback-email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="your@email.com"
                required
              />
            </div>

            <div className="rating-section">
              <h3>How would you rate your experience?</h3>
              <div className="rating">
                {[1, 2, 3, 4, 5].map((star) => (
                  <span
                    key={star}
                    className={`star ${
                      (hoverRating || currentRating) >= star ? "filled" : ""
                    }`}
                    onClick={() => rate(star)}
                    onMouseEnter={() => setHoverRating(star)}
                    onMouseLeave={() => setHoverRating(0)}
                  >
                    {(hoverRating || currentRating) >= star ? (
                      <FaStar size={32} />
                    ) : (
                      <FaRegStar size={32} />
                    )}
                  </span>
                ))}
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="feedback-message">Tell us more (optional)</label>
              <textarea
                id="feedback-message"
                name="feedback"
                value={formData.feedback}
                onChange={handleChange}
                placeholder="What did you like or what could we improve?"
                rows="4"
              ></textarea>
            </div>
            <button
              type="submit"
              className="submit-button"
              disabled={isLoading}
            >
              {isLoading ? "Submitting..." : "Submit Feedback"}
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default ContactPage;
