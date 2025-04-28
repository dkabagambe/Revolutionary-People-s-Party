import React from "react";
import "../styles/MissionSection.css";

const MissionSection = () => {
  return (
    <div className="mission-container">
      <section className="mission">
        <h2 className="section-title">Our Mission</h2>
        <p className="mission-text">
          We are committed to building a stronger, freer nation for every
          American. Our principles are rooted in liberty, opportunity, and
          justice for all.
        </p>
        <div className="values">
          <div className="value-card">
            <h3>Freedom</h3>
            <p>Protecting individual rights and constitutional liberties.</p>
          </div>
          <div className="value-card">
            <h3>Opportunity</h3>
            <p>Empowering every citizen to achieve the American Dream.</p>
          </div>
          <div className="value-card">
            <h3>Security</h3>
            <p>Ensuring safety at home and strength abroad.</p>
          </div>
          <div className="value-card">
            <h3>Innovation</h3>
            <p>Driving economic growth and technology leadership.</p>
          </div>
        </div>
      </section>

      <section className="policies">
        <h2 className="section-title">Key Issues</h2>
        <div className="policy-grid">
          <div className="policy-card">
            <h4>Healthcare</h4>
            <p>Affordable, accessible healthcare for every American.</p>
          </div>
          <div className="policy-card">
            <h4>Economy</h4>
            <p>Lower taxes, more jobs, and economic freedom.</p>
          </div>
          <div className="policy-card">
            <h4>Education</h4>
            <p>Quality education and school choice for families.</p>
          </div>
          <div className="policy-card">
            <h4>National Security</h4>
            <p>Strong borders and a strong military to protect our future.</p>
          </div>
        </div>
      </section>

      <section className="get-involved">
        <h2 className="section-title">Get Involved</h2>
        <p>Join the movement. Help us make a difference!</p>
        <div className="buttons">
          <button className="involved-button">Volunteer</button>
          <button className="involved-button">Donate</button>
          <button className="involved-button">Attend Events</button>
        </div>
      </section>
    </div>
  );
};

export default MissionSection;
