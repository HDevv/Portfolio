import React from "react";
import "../footer/footer.css";
import { FaTwitter, FaEnvelope, FaLinkedinIn, FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";

const footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <Link to={"https://twitter.com/ash___dev"}>
          <div className="icon">
            <i id="twitter">
              <FaTwitter />
            </i>
          </div>
        </Link>
        <Link to={"https://github.com/Hicham017"}>
          <div className="icon">
            <i id="github">
              <FaGithub />
            </i>
          </div>
        </Link>
        <Link to={"https://www.linkedin.com/in/hicham-roldan-152a051b6/"}>
          <div className="icon">
            <i id="linkedin">
              <FaLinkedinIn />
            </i>
          </div>
        </Link>

        <Link>
          <div className="icon">
            <i id="mail">
              <FaEnvelope />
            </i>
          </div>
        </Link>
      </div>
    </footer>
  );
};

export default footer;
