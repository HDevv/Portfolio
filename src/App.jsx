import "./App.css";
import { Routes, Route } from "react-router-dom";
import React from "react";
import Home from "./pages/Home/home.jsx";
import SkillsP from "../src/pages/SkillsP/skillsP.jsx";
import Projects from "../src/pages/Projects/projects.jsx";
import AboutMe from "../src/pages/AboutMe/AboutMe.jsx";
import Contact from "../src/pages/Contact/contact";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/skills" element={<SkillsP />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/about_me" element={<AboutMe />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
