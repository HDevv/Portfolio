import React, { useRef } from "react";
import "../Contact/contact.css";
import {
  FaTwitter,
  FaEnvelope,
  FaLinkedinIn,
  FaGithub,
  FaMapMarkerAlt,
  FaPaperPlane,
} from "react-icons/fa";
import emailjs from "@emailjs/browser";

const contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_kngh",
        "template_qjm9qc2",
        form.current,
        "QJL_6J8jpGAVL1FiD"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div className="form_container">
      <div className="form_title">CONTACT</div>
      {/* Form */}
      <div className="form">
        <form className="form_inputs" ref={form} onSubmit={sendEmail}>
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
            <li>
              <a href="#" target="_blank" className="contact_icon">
                <i className="c_github" aria-hidden="true">
                  <FaGithub />
                </i>
              </a>
            </li>
            <li>
              <a href="#" target="_blank" className="contact_icon">
                <i className="c_linkedin" aria-hidden="true">
                  <FaLinkedinIn />
                </i>
              </a>
            </li>
            <li>
              <a href="#" target="_blank" className="contact_icon">
                <i className="c_twitter" aria-hidden="true">
                  <FaTwitter />
                </i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default contact;
