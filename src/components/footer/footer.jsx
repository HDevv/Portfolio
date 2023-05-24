import React from "react";
import "../footer/footer.css";
import { FaTwitter, FaEnvelope, FaLinkedinIn, FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";

const footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <Link to={"https://twitter.com/ash___dev"}>
          <i id="twitter">
            <FaTwitter />
          </i>
        </Link>
        <Link to={"https://github.com/Hicham017"}>
          <i id="github">
            <FaGithub />
          </i>
        </Link>
        <Link to={"https://www.linkedin.com/in/hicham-roldan-152a051b6/"}>
          <i id="linkedin">
            <FaLinkedinIn />
          </i>
        </Link>

        <Link>
          <i id="mail">
            <FaEnvelope />
          </i>
        </Link>
      </div>
    </footer>
  );
};

export default footer;
