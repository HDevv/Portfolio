import React from "react";
import "../Contact/contact.css";
import {
  FaTwitter,
  FaEnvelope,
  FaLinkedinIn,
  FaGithub,
  FaMapMarkerAlt,
  FaPaperPlane,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const contact = () => {
  return (
    <div className="form_container">
      <div className="form_title">CONTACT</div>
      {/* Form */}
      <div className="form">
        <form className="form_inputs">
          <input id="name" type="text" placeholder="NAME" required></input>
          <input id="email" type="email" placeholder="EMAIL" required></input>
          <textarea
            id="message"
            type="text"
            rows="10"
            placeholder="MESSAGE"
            required
          ></textarea>

          <button className="send_btn" id="submit" type="submit" value="SEND">
            <div className="send_btn_alt">
              <i className="send_icon">
                <FaPaperPlane />
              </i>
              <span className="send_txt">SEND</span>
            </div>
          </button>
        </form>

        {/* RIGHT */}
        <div className="direct_contact_container">
          <ul className="contact_list">
            <li className="list_item">
              <i id="map_icon">
                <FaMapMarkerAlt />
              </i>
              <span className="contact_txt place">Reims, FRANCE 🥐</span>
            </li>
            <li className="list_item">
              <i id="mail_icon">
                <FaEnvelope />
              </i>
              <span className="contact_txt mail" title="Send me en email">
                lafrg533@gmail.com
              </span>
            </li>
          </ul>

          {/* ICONES */}

          <ul className="social_medias_contact">
            <Link to={"https://github.com/Hicham017"}>
              <li>
                <a href="#" target="_blank" className="contact_icon">
                  <i className="c_github" aria-hidden="true">
                    <FaGithub />
                  </i>
                </a>
              </li>
            </Link>
            <Link to={"https://www.linkedin.com/in/hicham-roldan-152a051b6/"}>
              <li>
                <a href="#" target="_blank" className="contact_icon">
                  <i className="c_linkedin" aria-hidden="true">
                    <FaLinkedinIn />
                  </i>
                </a>
              </li>
            </Link>
            <Link to={"https://twitter.com/ash___dev"}>
              <li>
                <a href="#" target="_blank" className="contact_icon">
                  <i className="c_twitter" aria-hidden="true">
                    <FaTwitter />
                  </i>
                </a>
              </li>
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default contact;
