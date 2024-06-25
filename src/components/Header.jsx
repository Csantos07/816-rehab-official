import React from "react";

const Header = () => {
  return (
    <header className="header">
      <img className="nav-logo" src="/logos/enlarged-logo.png" alt="" />
      <div className="hamburger" id="hamburger">
        <div class="bar"></div>
        <div class="bar"></div>
        <div class="bar"></div>
      </div>
    </header>
  );
};

export default Header;
