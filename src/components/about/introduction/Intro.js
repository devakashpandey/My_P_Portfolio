import React, { useContext } from "react";
import "./Intro.css";
import { ThemeContext } from "../../../context/Theme";
import profilePic from "../../../assets/my.png";
import { FaArrowAltCircleRight } from "react-icons/fa";

const Intro = () => {
  const [{ theme }] = useContext(ThemeContext);
  return (
    <>
      <section id="#about">
        <div className="section">
          <h2 className="section-title" data-aos="fade-right">
            About <span className="different">Me</span>
          </h2>
          <div className={"introduction " + theme}>
            <div className="my-pic">
              <img src={profilePic} alt="myPic" />
            </div>
            <div className="intro-data">
              <h4>
                Hi Everyone, My name is{" "}
                <span className="different">Akash Pandey</span> and I am from{" "}
                <span className="different"> Bihar (India)</span>. I have
                completed my graduation in BCA from{" "}
                <span className="different">AKU University, Patna</span>. Then I
                joined Front-end development course of{" "}
                <span className="different">Unacademy </span> & also studied it
                myself from{" "}
                <span className="different">YouTube & Websites.</span>
              </h4>
              <h4 className="terms" data-aos="fade-right">
                Terms that can describe me apart form Coding :
              </h4>
              <h4 className="different" data-aos="fade-right">
                <span className="icons">
                  <FaArrowAltCircleRight />
                </span>
                Kho Kho Player
              </h4>
              <h4 className="different" data-aos="fade-right">
                <span className="icons">
                  <FaArrowAltCircleRight />
                </span>
                Video Gamer
              </h4>
              <h4 className="different" data-aos="fade-right">
                <span className="icons">
                  <FaArrowAltCircleRight />
                </span>
                YouTuber
              </h4>
              <h4 className="different" data-aos="fade-right">
                <span className="icons">
                  <FaArrowAltCircleRight />
                </span>
                Editor
              </h4>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Intro;
