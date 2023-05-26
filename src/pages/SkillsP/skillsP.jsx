import React from "react";
import Skills from "../../components/skills/skills";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/footer/footer";

const skillsP = () => {
  return (
    <div className="skillsP">
      <Navbar />
      <Skills />
      <Footer />
    </div>
  );
};

export default skillsP;
