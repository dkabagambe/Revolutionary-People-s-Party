import React from "react";
import "../styles/MissionSection.css";

const MissionSection = () => {
  return (
    <div className="mission-container">
      <section className="mission">
        <h2 className="section-title">Short Mission</h2>
        <p className="mission-text">
          RPP is dedicated to building a just, inclusive, and accountable Uganda
          by championing transparent leadership, empowering citizens, and
          restoring dignity through people-centered governance and equitable
          development.
        </p>
        {/* <div className="values">
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
        </div> */}
      </section>

      <section className="policies">
        <h2 className="section-title">
          Core Values and Founding Ideas of the Revolutionary Peoples Party
          (RPP)
        </h2>
        <div className="policy-grid">
          <div className="policy-card">
            <h4>People-Centered Governance</h4>
            <p>
              Leadership must serve the people first, prioritizing public
              welfare over personal gain.
            </p>
          </div>
          <div className="policy-card">
            <h4>Transparency and Accountability</h4>
            <p>
              All leaders must be answerable to the people, and all processes
              open to scrutiny.
            </p>
          </div>
          <div className="policy-card">
            <h4>Equity and Social Justice:</h4>
            <p>
              Every Ugandan, regardless of background, deserves equal
              opportunity, dignity, and protection under the law.
            </p>
          </div>
          <div className="policy-card">
            <h4>Inclusive Participation</h4>
            <p>
              Youth, women, and marginalized groups must be actively involved in
              shaping national decisions.
            </p>
          </div>
          <div className="policy-card">
            <h4>Unity and National Identity</h4>
            <p>
              The party promotes unity beyond tribe, religion, or region, rooted
              in pride for Uganda and Africa at large.
            </p>
          </div>
          <div className="policy-card">
            <h4>Pan-Africanism and Sovereignty</h4>
            <p>
              RPP supports African self-determination, economic independence,
              and solidarity with other progressive movements across the
              continent.
            </p>
          </div>
          <div className="policy-card">
            <h4>Meritocracy in Leadership</h4>
            <p>
              Leadership at all levels must be based on competence, integrity,
              and patriotism—not favoritism or political loyalty.
            </p>
          </div>
          <div className="policy-card">
            <h4>Civic Empowerment</h4>
            <p>
              Informed, educated citizens are essential to building a functional
              democracy and holding leaders accountable.
            </p>
          </div>
          <div className="policy-card">
            <h4>Anti-Corruption Stance</h4>
            <p>
              Zero tolerance for misuse of public office or funds; integrity is
              non-negotiable.
            </p>
          </div>
          <div className="policy-card">
            <h4>Transformational Change</h4>
            <p>
              Not content with reforms alone, RPP seeks a fundamental rethinking
              of governance to serve the future of all Ugandans.
            </p>
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
