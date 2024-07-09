import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Home/Home";
import Provider from "./Provider/Provider";
import "./Main.css";

const Main = () => {
  return (
    <main className="main">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/provider" element={<Provider />} />
      </Routes>
    </main>
  );
};

export default Main;
