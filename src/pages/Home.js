import React from "react";
import "../styles/Home.css";
import videorpp from "../img/VID-20250501-WA0052.mp4";
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
          {/* <div className="overlay">
            <h1 className="hero-title">Revolutionary People’s Party(RPP)</h1>
            <p className="hero-subtitle">we are fired up and ready to win</p>
          </div> */}
        </section>
        <section className="cta">
          <h2>
            Mission Statement for the Revolutionary Peoples Party (RPP) – Uganda
          </h2>
          <p>
            The Revolutionary Peoples Party (RPP) is committed to transforming
            Uganda through inclusive, transparent, and accountable governance
            that places citizens at the heart of national development. Our
            mission is to dismantle entrenched systems of corruption,
            marginalization, and political elitism by empowering every
            Ugandan—regardless of background—to participate meaningfully in
            shaping their future. We aim to rebuild public trust in leadership
            by advocating for justice, equitable resource distribution, and a
            governance model rooted in people-centered policies, civic
            education, and grassroots mobilization. Guided by the spirit of
            Pan-Africanism and democratic renewal, RPP seeks to bridge the gap
            between government and citizens, restore institutional integrity,
            and uphold the fundamental rights and aspirations of all Ugandans
          </p>
          <button className="cta-button">Join RPP</button>
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
