import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTelegram } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import "./ContactMe.css";
const ContactMe = () => {
  const telegramURL = "https://t.me/JosephSamuelM";
  return (
    <section id="contact-me">
      <div className="contact-me">
        <h2 className="contactme-heading">
          <span className="white-text">OR</span>
          <br></br>
          <br></br>
          <span className="orange-text">Use Social Media </span>
          <span className="white-text">Links</span>
        </h2>
        <div className="social-media-icons-wrapper">
          <a
            href="https://wa.me/8925139905"
            target="_blank"
            rel="noopener noreferrer"
            className="social-media-button"
          >
            <div className="whatsapp-icon">
              <FaWhatsapp className="whatsapp-icon-inner" />
            </div>
          </a>

          <div className="social-media-button">
            <a
              href={telegramURL}
              target="_blank"
              rel="noopener noreferrer"
              className="telegram-icon"
            >
              <FontAwesomeIcon
                icon={faTelegram}
                className="telegram-icon-inner"
              />
            </a>
          </div>
          <a
            href="mailto:josephsamuelm2021@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="social-media-button"
          >
            <div className="mail-icon">
              <FontAwesomeIcon icon={faEnvelope} className="mail-icon-inner" />
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default ContactMe;
