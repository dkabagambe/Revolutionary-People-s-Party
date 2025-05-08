import React from "react";
import "../styles/CandidatesSection.css";
import mutasa from "../img/charles mutasa kafeero.jpeg";
import Muweebwa from "../img/muweebwa.jpg";
import Musana from "../img/musana.jpg";
import ssenjako from "../img/ssenjako.jpg";
import Raphael from "../img/magezi.jpg";
import Nalugo from "../img/nalugo.jpg";
import mushabe from "../img/mushabe.jpg";
import musiige from "../img/musiige.jpg";
const candidates = [
  {
    name: "charles mutasa kafeero",
    constituency: "president of uganda",
    imageUrl: mutasa,
  },
  {
    name: "Muweebwa Betty",
    constituency: "Woman mp Mityana District",
    imageUrl: Muweebwa,
  },
  {
    name: "Musana Jafali",
    constituency: "Bukoli south constituency",
    imageUrl: Musana,
  },
  {
    name: "ssenjako Dafala",
    constituency: "kawempe south constituency",
    imageUrl: ssenjako,
  },
  {
    name: "Magezi Raphael",
    constituency: "Youth Mp Eastern Region",
    imageUrl: Raphael,
  },
  {
    name: "Nalugo Mercy Kabanda",
    constituency: "kimaanya kabonera Masaka city",
    imageUrl: Nalugo,
  },
  {
    name: "lawrence mushabe",
    constituency: "Bukanga County constituency",
    imageUrl: mushabe,
  },
  {
    name: "musiige ronald elvis",
    constituency: "Busiro south constituency",
    imageUrl: musiige,
  },
  // Add the rest of the candidates here...
];

const CandidatesSection = () => {
  return (
    <div className="candidates-section">
      <h2 className="candidates-title">Meet Our Candidates</h2>
      <div className="candidates-grid">
        {candidates.map((candidate, index) => (
          <div key={index} className="candidate-card">
            <img
              src={candidate.imageUrl}
              alt={candidate.name}
              className="candidate-poster"
            />
            <div className="candidate-info">
              <h3>{candidate.name}</h3>
              <p>{candidate.constituency}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CandidatesSection;
