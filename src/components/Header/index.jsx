import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="header">
      <Link to="/">
        <img className="nav-logo" src="/logos/enlarged-logo.png" alt="" />
      </Link>

      <a
        href="https://816rehabandperformance.janeapp.com/#/staff_member/1/bio"
        target="_blank"
        rel="noopener noreferrer"
        className="nav-button"
      >
        <div className="hamburger" id="hamburger">
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
      </a>
    </header>
  );
};

export default Header;
