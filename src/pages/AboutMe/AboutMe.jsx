import React from "react";
import "./../AboutMe/AboutMe.css";
import Meme from "../../assets/meme.jpg";

const AboutMe = () => {
  return (
    <div className="about_me">
      <div className="about_txt">
        <p className="about_title">WELCOME</p>
        <ul className="sub_txt">
          <li>
            Full-stack web developer passionate about PROBLEM SOLVING and
            CREATING
          </li>
          <li>
            I regularly carry out technology watches to keep abreast of the
            latest updates
          </li>
          <li>
            I come out of a professional training in which I had to present big
            projects in front of a jury, carried out with a mentor and also
            independently finally having my diploma,
          </li>
          <li>
            I work from time to time for individuals and continue to train on my
            personal side projects
          </li>
        </ul>
      </div>
      <div className="meme">
        <p className="meme_txt"></p>
        <img
          className="meme_img"
          src={Meme}
          alt="full-stack représentation with meme"
        />
      </div>
    </div>
  );
};

export default AboutMe;
