import "./App.css";
import { Routes, Route } from "react-router-dom";
import React from "react";
import Home from "./pages/Home/home.jsx";
import SkillsP from "../src/pages/SkillsP/skillsP.jsx";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/skills" element={<SkillsP />} />
      </Routes>
    </div>
  );
}

export default App;
