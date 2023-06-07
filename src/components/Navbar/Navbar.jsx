import React from "react";
import hr_logo from "../../assets/HR_logo.png";
import { NavLink, Link } from "react-router-dom";
import "../Navbar/Navbar.css";

const Navbar = () => {
  return (
    <nav className="nbar">
      <img src={hr_logo} alt="" />
      <Link to="/skills">
        <div className="skills">SKILLS</div>
      </Link>
      <Link to="/projects">
        <div className="projects">PROJECTS</div>
      </Link>
      <Link to="/about_me">
        <div className="about_me">ABOUT ME</div>
      </Link>

      <div className="contact">CONTACT</div>
    </nav>
  );
};

export default Navbar;
