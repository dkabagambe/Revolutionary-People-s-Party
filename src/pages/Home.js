import React from "react";
import "../styles/Home.css";
import videorpp from "../img/rpp.mp4";
import MissionSection from "./MissionSection";
import VideoSection from "./VideoSection";
import IssuesSection from "./IssuesSection";
import CandidatesSection from "./CandidatesSection";

const Home = () => {
  return (
    <>
      <div className="home">
        <section className="hero">
          <video autoPlay muted loop playsInline className="hero-video">
            <source src={videorpp} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="overlay">
            <h1 className="hero-title">Revolutionary People’s Party(RPP)</h1>
            <p className="hero-subtitle">we are fired up and ready to win</p>
          </div>
        </section>
        <section className="cta">
          <h2>Get Updates</h2>
          <p>Stay informed with the latest news and policy updates.</p>
          <button className="cta-button">Sign Up</button>
        </section>
      </div>
      <MissionSection />
      <VideoSection />
      <IssuesSection />
      <CandidatesSection />
    </>
  );
};

export default Home;
