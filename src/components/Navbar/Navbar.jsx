import React from "react";
import hr_logo from "../../assets/HR_logo.png";
import { Navigate } from "react-router-dom";
import "../Navbar/Navbar.css";

const Navbar = () => {
  return (
    <nav className="nbar">
      <img src={hr_logo} alt="" />
      <div className="skills">
        <a>SKILLS</a>
      </div>
      <div className="projects">
        <a>PROJECTS</a>
      </div>
      <div className="about_me">
        <a>ABOUT ME</a>
      </div>
      <div className="contact">
        <a>CONTACT</a>
      </div>
    </nav>
  );
};

export default Navbar;
