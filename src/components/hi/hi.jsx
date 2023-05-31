import React from "react";
import "../hi/hi.css";
import Hi_img from "../../assets/home_img.svg";

const hi = () => {
  return (
    <article className="me_container">
      <div className="txt">
        <h2>
          Hi 👋, I'm <span>Hicham ROLDAN</span>
        </h2>
        <p>A full stack web developer</p>
        <p>
          I can design exactly the site and logo you want, visually express your
          desires and help you stand out from the competition
        </p>
      </div>
      <img className="hi_img" src={Hi_img} />
    </article>
  );
};

export default hi;
