import React from "react";
import { Link } from "react-router-dom";
import "../styles/AboutUs.css";
import rally from "../img/4a14dc9f-f8e8-42be-a281-45a3ca29f9f5.jpeg";
import cmk from "../img/cmk.jpg";
import jafar from "../img/dafali.jpg";
import who from "../img/who-we-are.jpg";
const AboutUs = () => {
  return (
    <div className="about-us">
      {/* Section 1: Hero */}
      <section className="hero-section">
        <div className="hero-content">
          <h1>Revolutionary Peoples Party (RPP)</h1>
          <p>People-Centered Governance for a Brighter Future</p>
          <Link to="/manifesto" className="hero-btn">
            View Our Manifesto
          </Link>
        </div>
      </section>

      {/* Section 2: Our Story */}
      <section className="our-story">
        <div className="story-text">
          <h2>About Us – Revolutionary Peoples Party (RPP)</h2>
          <p>
            The Revolutionary Peoples Party (RPP) is a citizen-led political
            organization dedicated to transforming Uganda’s political, social,
            and economic landscape through inclusive, ethical, and visionary
            leadership. Formed in 2013, RPP was born out of a shared frustration
            with the failures of governance that have long marginalized ordinary
            Ugandans and eroded public trust in state institutions. As a party,
            we stand for the restoration of dignity, justice, and equal
            opportunity for every citizen. We are committed to building a Uganda
            where power is decentralized, public resources are protected, and
            development reaches even the most remote communities. RPP champions
            a participatory democracy where the voices of youth, women, and
            underrepresented groups are central to national progress. With roots
            in grassroots mobilization and a vision anchored in Pan-African
            ideals, we believe that real change begins with political will and
            ends with citizen empowerment. Our members include passionate
            Ugandans from diverse backgrounds—teachers, farmers, students,
            businesspeople, and professionals—united by a common purpose: to
            create a Uganda that works for everyone, not just a privileged few.
            We reject corruption, impunity, and division, and instead promote a
            future built on unity, integrity, and shared prosperity. RPP is not
            just a political party—it is a movement of hope, resilience, and
            action.
          </p>
          <blockquote>
            “From the people, for the people — our revolution is now.”
          </blockquote>
        </div>
        <div className="story-image">
          <img src={who} alt="Founding rally" />
        </div>
      </section>

      {/* Section 3: Our Team */}
      <section className="our-team">
        <h2>The Team Behind the Movement</h2>
        <div className="team-cards">
          <div className="team-member">
            <img src={cmk} alt="President" />
            <h3>Hon. Charles Mutaasa KAFEERO </h3>
            <p>Party President</p>
            <Link to="https://www.facebook.com/profile.php?id=100079234951848">
              See Profile
            </Link>
          </div>
          <div className="team-member">
            <img src={jafar} alt="Coordinator" />
            <h3>Musana Jafali</h3>
            <p>Head of Mobilization</p>
            <Link to="https://www.facebook.com/musana.jafali">See Profile</Link>
          </div>
        </div>
      </section>

      {/* Section 4: What We Do */}
      <section className="what-we-do">
        <h2>Revolutionary Peoples Party (RPP) – Goals</h2>
        <div className="accordion">
          <details>
            <summary>Governance Policies</summary>
            <p>
              <span>
                Establish a transparent and accountable government rooted in
                democratic values and people-centered service delivery.
              </span>
              <span>
                Decentralize power and enhance local government autonomy to
                improve service delivery and community participation.
              </span>
            </p>
            <span>
              Enforce strict anti-corruption measures, including public asset
              audits, whistleblower protections, and swift justice.
            </span>
          </details>
          <details>
            <summary>Economic Vision</summary>
            <p>
              <span>
                Promote a self-reliant, inclusive economy driven by agriculture,
                innovation, and value addition in natural resources.
              </span>
              <span>
                Support SMEs and informal sector growth through access to
                affordable credit, markets, and technical training.
              </span>
              <span>
                Invest in rural infrastructure, energy, and ICT to bridge the
                urban-rural development gap.
              </span>
              <span>
                Prioritize job creation, particularly for youth and women,
                through public-private partnerships and industrialization.
              </span>
              <span>
                Advocate for fair trade policies and regional economic
                integration to strengthen Uganda’s competitiveness.
              </span>
            </p>
          </details>
          <details>
            <summary>Leadership and Civic Development</summary>
            <p>
              <span>
                Foster ethical, visionary leadership committed to public service
                rather than personal gain.
              </span>
              <span>
                Promote meritocracy in public appointments and eliminate
                political patronage.
              </span>
              <span>
                Institutionalize civic education programs to cultivate an
                informed and active citizenry.
              </span>
              <span>
                Encourage youth and women’s participation in leadership at all
                levels.
              </span>
              <span>
                Cultivate a culture of political tolerance, dialogue, and
                national unity over sectarian divisions.
              </span>
            </p>
          </details>
        </div>
      </section>

      <section className="our-story">
        <div className="story-image">
          <img src={rally} alt="Founding rally" />
        </div>
        <div className="story-text">
          <h2>Who We Are – Revolutionary Peoples Party (RPP)</h2>
          <p>
            The Revolutionary Peoples Party (RPP) is a progressive political
            movement in Uganda founded on the principles of justice, equity, and
            democratic renewal. Registered in 2013, RPP emerged in response to
            growing public frustration with widespread corruption, governance
            failures, and the exclusion of ordinary Ugandans from meaningful
            participation in national development. We are a people-centered
            party, driven by the conviction that real change can only be
            achieved when leadership is accountable, transparent, and grounded
            in the lived realities of its citizens. RPP brings together Ugandans
            from all walks of life—youth, women, workers, farmers, and
            professionals—who are united by a shared desire to reclaim the
            nation’s destiny and build a fair, inclusive society. We believe
            that every Ugandan has the right to dignity, opportunity, and a
            voice in shaping the policies that affect their lives. Through
            grassroots mobilization, civic empowerment, and bold policy reforms,
            we are laying the foundation for a new era of leadership that puts
            people first.
          </p>
          <blockquote>“Transforming Lives, Building a Nation.”</blockquote>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
