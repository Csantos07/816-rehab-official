import React from "react";

const Header = () => {
  return (
    <header className="header">
      <img className="nav-logo" src="/logos/enlarged-logo.png" alt="" />
      <a
        href="https://816rehabandperformance.janeapp.com/#/staff_member/1/bio"
        target="_blank"
      >
        <div className="hamburger" id="hamburger">
          <div class="bar"></div>
          <div class="bar"></div>
          <div class="bar"></div>
        </div>
      </a>
    </header>
  );
};

export default Header;
