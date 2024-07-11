import React from "react";
import "./Skills.css";
import { FaReact } from "react-icons/fa";
import {
  SiRedux,
  SiHtml5,
  SiMui,
  SiTailwindcss,
  SiNetlify,
} from "react-icons/si";
import { DiCss3 } from "react-icons/di";
import { SiJavascript } from "react-icons/si";
import { VscGithub } from "react-icons/vsc";
import { BsBootstrap } from "react-icons/bs";
import { SiTypescript } from "react-icons/si";
import { FaSass } from "react-icons/fa";
import { SiNextdotjs } from "react-icons/si";
import { FiFramer } from "react-icons/fi";
import { SiExpress } from "react-icons/si";
import { FaNode } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";

const Skills = () => {
  return (
    <>
      <div className="skillwrapper">
        <div className="section main" data-aos="fade-right">
          <h2 className="section__title different">Skills</h2>
          <div className="skills">
            <div>
              <SiHtml5 />
              <h5>HTML</h5>
            </div>

            <div>
              <DiCss3 />
              <h5>CSS</h5>
            </div>
            <div>
              <SiJavascript />
              <h5>Javascript</h5>
            </div>
            <div>
              <BsBootstrap />
              <h5>Bootstrap</h5>
            </div>
            <div>
              <FaReact />
              <h5>React</h5>
            </div>

            <div>
              <SiMui />
              <h5>Material UI</h5>
            </div>
            <div>
              <SiRedux />
              <h5>Redux</h5>
            </div>

            <div>
              <SiTailwindcss />
              <h5>Tailwind </h5>
            </div>
            <div>
              <VscGithub />
              <h5>Github</h5>
            </div>
            <div>
              <SiNetlify />
              <h5>Netlify</h5>
            </div>
            <div>
              <FaSass />
              <h5>Sass</h5>
            </div>
            <div>
              <FiFramer />
              <h5>Framer</h5>
            </div>
            <div>
              <SiTypescript />
              <h5>TypeScript</h5>
            </div>
            <div>
              <SiNextdotjs />
              <h5>Next JS</h5>
            </div>
            {/* <div>
              <SiExpress />
              <h5>Express JS</h5>
            </div>
            <div>
              <FaNode />
              <h5>Node JS</h5>
            </div>
            <div>
              <SiMongodb />
              <h5>Mongo DB</h5>
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Skills;
