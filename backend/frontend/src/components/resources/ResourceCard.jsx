import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./resources.css";

const resourceData = [
  {
    icon: "💼",
    title: "Internships",
    description:
      "Find the latest tech internship opportunities to kickstart your career in the IT industry.",
    link: "/internships",
  },
  {
    icon: "📚",
    title: "Courses",
    description:
      "Access high-quality programming courses and tutorials from top content creators.",
    link: "/courses",
  },
  {
    icon: "🗺️",
    title: "Roadmaps",
    description:
      "Follow step-by-step career roadmaps to become a skilled professional in your chosen field.",
    link: "/roadmaps",
  },
  {
    icon: "🏆",
    title: "Hackathon Events",
    description:
      "Stay updated with the latest hackathon events to showcase your skills and network.",
    link: "/hackathons",
  },
  {
    icon: "🎓",
    title: "Certification Courses",
    description:
      "Enhance your resume with industry-recognized certifications and credentials.",
    link: "/certifications",
  },
  {
    icon: "🤖",
    title: "Amazing AI Tools",
    description:
      "Discover cutting-edge AI tools to boost your productivity and enhance your projects.",
    link: "/ai-tools",
  },
  {
    icon: "💡",
    title: "Project Ideas",
    description:
      "Get inspired with project ideas across different domains to build your portfolio.",
    link: "/project-ideas",
  },
  {
    icon: "🧮",
    title: "DSA Materials",
    description:
      "Master Data Structures and Algorithms with comprehensive learning resources.",
    link: "/dsa-materials",
  },
];

const ResourceCard = ({ icon, title, description, link }) => (
  <div className="resource-card">
    <div className="card-icon">{icon}</div>
    <h3 className="card-title">{title}</h3>
    <p className="card-description">{description}</p>
    {/* Use Link instead of <a> for internal navigation */}
    <Link to={link} className="card-link">
      Explore {title}
    </Link>
  </div>
);

const ResourcesPage = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredResources = resourceData.filter(
    (resource) =>
      resource.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      resource.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="resources-page">
      {/* Hero Section */}
      <div className="hero-content">
        <h1>Find Your Next Tech Resource</h1>
        <p>Explore curated resources to help you level up your IT career.</p>
        <div className="search-box">
          <input
            type="text"
            placeholder="Search for resources..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button>Search</button>
        </div>
      </div>

      {/* Resource Cards Section */}
      <section className="resource-container">
        <div className="resources-grid">
          {filteredResources.length > 0 ? (
            filteredResources.map((resource, index) => (
              <ResourceCard key={index} {...resource} />
            ))
          ) : (
            <p className="not-found">❌ No matching resources found.</p>
          )}
        </div>
      </section>
    </div>
  );
};

export default ResourcesPage;
