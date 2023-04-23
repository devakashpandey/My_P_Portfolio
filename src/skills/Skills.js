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
import { SiJavascript, SiFirebase } from "react-icons/si";
import { VscGithub } from "react-icons/vsc";
import { BsBootstrap } from "react-icons/bs";

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
              <VscGithub />
              <h5>Github</h5>
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
              <h5>Tailwind</h5>
            </div>
            <div>
              <SiNetlify />
              <h5>Netlify</h5>
            </div>
            <div>
              <SiFirebase />
              <h5>Firebase</h5>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Skills;

{
  /* <div className="skills">
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
  <VscGithub />
  <h5>Github</h5>
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
  <h5>Tailwind</h5>
</div>
<div>
  <SiNetlify />
  <h5>Netlify</h5>
</div>
<div>
  <SiFirebase />
  <h5>Firebase</h5>
</div> */
}
