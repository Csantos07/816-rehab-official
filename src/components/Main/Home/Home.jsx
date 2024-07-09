// Home.js
import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <div className="home-container">
      <img className="mobile" src="/logos/mobile-splash-logo.png" alt="" />
      <img className="desktop" src="/logos/desktop-splash-logo.png" alt="" />
      <a
        href="https://816rehabandperformance.janeapp.com/#/staff_member/1/bio"
        target="_blank"
        rel="noopener noreferrer"
      >
        <button className="call-to-action">Free Discovery Call</button>
      </a>
    </div>
  );
};

export default Home;
