// Home.js
import React from "react";

const Provider = () => {
  return (
    <div className="provider">
      <h1>Your Provider</h1>

      <img src="/logos/mobile-provider-image.png" alt="Dr. Michael Santos" />

      <p>
        Dr. Michael Santos is a licensed chiropractor based out of Kansas City.
        He graduated from the University of South Florida in 2013 with a degree
        in biomedical sciences.
      </p>
      <p>
        Before starting graduate studies, Michael gained experience in
        operations management and personal training. As a personal trainer he
        discovered a deeper desire to help those dealing with pain and injury.
      </p>
      <p>
        In 2021, Michael completed his doctorate of chiropractic at Palmer
        College in Port Orange, FL.
      </p>

      <button className="call-to-action">Free Discovery Call</button>
    </div>
  );
};

export default Provider;
