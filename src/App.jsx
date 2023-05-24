import "./App.css";
import { Routes, Route } from "react-router-dom";
import React from "react";
import Home from "./pages/Home/home.jsx";
import Skills from "../src/components/skills/skills.jsx";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
