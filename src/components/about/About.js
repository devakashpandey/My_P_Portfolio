import React from "react";
import "./About.css";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

import DescriptionIcon from "@mui/icons-material/Description";
import Typer from "./autoTyper/Typer";
import Intro from "./introduction/Intro";
import Timeline from "./timeline/Timeline";
// import Skills from "../skills/Skills";

const About = () => {
  return (
    <>
      <div className="about center">
        <h1 data-aos="fade-right" className="my-name">
          Hey, I am <span className="name"> Akash Pandey</span>
        </h1>
        <Typer />
        <p className="about-descrip" data-aos="fade-right">
          A Front-End Developer with passion to create beautiful websites loaded
          with features. I love to work on web application & making new designs
          using technologies like Javascript, React JS, Tailwind CSS, Material
          UI, Redux & Firebase.
        </p>
        <div className="contact center">
          <a
            href="https://github.com/devakashpandey"
            aria-label="github"
            target="_blank"
            rel="noreferrer"
            className="link link--icon"
            title="Github"
          >
            <GitHubIcon style={{ fontSize: "30px" }} />
          </a>

          <a
            href="https://www.linkedin.com/in/devakashpandey/"
            aria-label="linkedin"
            className="link link--icon"
            target="_blank"
            rel="noreferrer"
            title="Linkedin"
          >
            <LinkedInIcon style={{ fontSize: "30px" }} />
          </a>

          <a
            href="https://drive.google.com/file/d/1Qmdiqj-IKi0AYwNCdQEkEhKJ3QZxw2fP/view?usp=drive_link"
            aria-label="resume"
            className="link link--icon"
            target="_blank"
            rel="noreferrer"
            title="Resume"
          >
            <DescriptionIcon style={{ fontSize: "30px" }} />
          </a>
        </div>
      </div>

      {/* ----------- My introduction section starts ------- */}
      <Intro />

      {/* ----------- My timeline section starts ------- */}
      <Timeline />

      {/* ----------- My skills section starts ------- */}

      <section id="#skills">{/* <Skills /> */}</section>
    </>
  );
};

export default About;
