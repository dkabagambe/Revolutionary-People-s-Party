import React from "react";
import "../styles/IssuesSection.css";

const issues = [
  {
    title: "Economic Growth",
    description: "Policies that create jobs and strengthen small businesses.",
    icon: "💼",
  },
  {
    title: "Education Reform",
    description: "Improving schools and empowering parents' choices.",
    icon: "🎓",
  },
  {
    title: "Healthcare",
    description: "Affordable healthcare solutions for all citizens.",
    icon: "🏥",
  },
  {
    title: "National Security",
    description: "Strong borders and support for law enforcement.",
    icon: "🛡️",
  },
  {
    title: "Freedom & Rights",
    description: "Defending freedom of speech and religious liberty.",
    icon: "🗽",
  },
  {
    title: "Innovation & Technology",
    description: "Investing in modern infrastructure and tech innovation.",
    icon: "💡",
  },
];

const IssuesSection = () => {
  return (
    <div className="issues-section">
      <h2 className="issues-title">Our Priorities</h2>
      <div className="issues-grid">
        {issues.map((issue, index) => (
          <div key={index} className="issue-card">
            <div className="issue-icon">{issue.icon}</div>
            <h3 className="issue-title">{issue.title}</h3>
            <p className="issue-description">{issue.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default IssuesSection;
