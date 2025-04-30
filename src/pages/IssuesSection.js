import React from "react";
import "../styles/IssuesSection.css";

const issues = [
  {
    title: "Youth Wing",
    description:
      "Focuses on engaging young Ugandans, promoting political education, and nurturing future leaders.",
    icon: "🧒 ",
  },
  {
    title: "Women’s Wing",
    description:
      "Advocates for gender equality, women's rights, and increased female participation in politics.",
    icon: "👭",
  },
  {
    title: "Veterans' Wing",
    description:
      "Leverages the experience of seasoned members to mentor new entrants and preserve institutional memory.",
    icon: "👴🏿",
  },
  {
    title: "Policy and Research Committee",
    description:
      "Develops evidence-based policies and conducts research to inform party positions.",
    icon: "📚",
  },
];

const IssuesSection = () => {
  return (
    <div className="issues-section">
      <h2 className="issues-title">Specialized Wings and Committees</h2>
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
