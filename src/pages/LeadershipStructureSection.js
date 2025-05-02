import React, { useState } from "react";

import "../styles/LeadershipStructureSection.css";
import videorpp from "../img/rpp.mp4";

const leadershipData = [
  {
    title: "Supreme National Executive Committee",
    description:
      "The Supreme National Executive Committee (TSNEC) is the top leadership body of the Revolutionary Peoples Party, responsible for setting the party’s overall direction, crafting strategic policies, and overseeing all activities at the national level.",
    points: [
      "Composition: Comprised of the party's top leadership, including the President, Deputy President, Secretary-General, Deputy Secretary-General, Treasurer-General, International Liaison General and other elected members.",
      "Responsibilities: Overall strategic direction, policy formulation, and oversight of party activities nationwide.",
      "Selection Criteria: Members should be chosen based on merit, considering factors such as educational qualifications, leadership experience, integrity, and commitment to national and Pan-African ideals.",
    ],
  },
  {
    title: "Provincial Executive Committees",
    description:
      "Provincial Executive Committees (PECs) coordinate party activities at the regional level and ensure effective implementation of national policies across provinces.",
    points: [
      "Composition: Led by the Provincial Chairperson, supported by a Secretary, Treasurer, Organizing Secretary, and other regional officials.",
      "Responsibilities: Manage provincial programs, build local leadership capacity, liaise with TSNEC, and mobilize support for national initiatives.",
      "Selection Criteria: Selected from respected regional leaders with strong community ties, proven leadership, and alignment with party values.",
    ],
  },
  {
    title: "District and Constituency Committees",
    description:
      "These grassroots-level structures ensure the party remains connected to local communities and responsive to citizen needs.",
    points: [
      "Composition: Elected locally, including District Chairpersons, Constituency Secretaries, Mobilizers, and Community Liaisons.",
      "Responsibilities: Organize local events, recruit members, communicate community feedback to higher bodies, and maintain active engagement.",
      "Selection Criteria: Based on community trust, activism, and ability to represent local interests faithfully.",
    ],
  },
  {
    title: "Specialized Wings & Committees",
    description:
      "These units promote inclusivity, innovation, and strategic input across key focus groups within the party.",
    points: [
      "Composition: Includes Youth Wing, Women’s Wing, Veterans’ Association, and Policy Research Committees.",
      "Responsibilities: Advocate for group-specific issues, foster mentorship, drive policy development, and ensure representative participation.",
      "Selection Criteria: Chosen for passion, relevant experience, advocacy work, and commitment to inclusive growth.",
    ],
  },
];

const HeroAndLeadership = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="hero-page">
      {/* Hero Section */}
      <section className="hero-section">
        <video autoPlay muted loop className="hero-video">
          <source src={videorpp} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="hero-overlay">
          <h1>Revolutionary Peoples Party</h1>
          <p>Transforming leadership, empowering communities.</p>
          <button className="cta-button">Join the Movement</button>
        </div>
      </section>

      {/* Leadership Structure Section */}
      <section className="leadership-structure">
        <h2 className="section-title">Our Leadership Structure</h2>
        <div className="tab-buttons">
          {leadershipData.map((item, index) => (
            <button
              key={index}
              className={`tab-button ${index === activeIndex ? "active" : ""}`}
              onClick={() => setActiveIndex(index)}
            >
              {item.title}
            </button>
          ))}
        </div>
        <div className="tab-content">
          <h3>{leadershipData[activeIndex].title}</h3>
          <p>{leadershipData[activeIndex].description}</p>

          <ul>
            {leadershipData[activeIndex].points.map((point, i) => (
              <li key={i}>{point}</li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
};

export default HeroAndLeadership;
