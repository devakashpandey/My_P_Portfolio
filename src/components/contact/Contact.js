import React, { useContext } from "react";
import "./Contact.css";
import { VscGithub } from "react-icons/vsc";
import { CgMail } from "react-icons/cg";
import { BsInstagram } from "react-icons/bs";
import { FaLinkedin, FaTwitter } from "react-icons/fa";
import { ThemeContext } from "../../context/Theme";

const Contact = () => {
  const [{ theme }] = useContext(ThemeContext);
  return (
    <>
      <div className="section">
        <h2 className="section__title" data-aos="fade-right">
          Get in <span className="different">Touch</span>
        </h2>
        <div className="contactMain">
          <div className={"contactcontainer " + theme} data-aos="fade-right">
            <a
              href="https://www.linkedin.com/in/devakashpandey/"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedin className="linkedin" />
            </a>
            <a
              href="https://github.com/devakashpandey"
              target="_blank"
              rel="noreferrer"
            >
              <VscGithub className="github" />
            </a>
            <a
              href="mailto:developerakky@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              <CgMail className="email" />
            </a>
            <a
              href="https://www.instagram.com/codingwithakash/"
              target="_blank"
              rel="noreferrer"
            >
              <BsInstagram className="instagram" />
            </a>
            <a
              href="https://twitter.com/devakky04"
              target="_blank"
              rel="noreferrer"
            >
              <FaTwitter className="twitter" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
