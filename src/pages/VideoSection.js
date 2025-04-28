import React from "react";
import "../styles/VideoSection.css";

const VideoSection = () => {
  return (
    <div className="video-section">
      <h2 className="video-title">Watch Our Story</h2>
      <div className="video-grid">
        <div className="video-card">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/nvwOWAzk1y8?si=uzRPA3dDBaPeJnca"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
          <p>Leader's Message</p>
        </div>
        <div className="video-card">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/nvwOWAzk1y8?si=uzRPA3dDBaPeJnca"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
          <p>Leader's Message</p>
        </div>
        <div className="video-card">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/nvwOWAzk1y8?si=uzRPA3dDBaPeJnca"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
          <p>Leader's Message</p>
        </div>
      </div>
    </div>
  );
};

export default VideoSection;
