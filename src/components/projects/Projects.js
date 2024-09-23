import React from "react";
import "./Projects.css";
import { FaReact, FaSass } from "react-icons/fa";
import {
  SiMui,
  SiTailwindcss,
  SiReactrouter,
  SiFirebase,
  SiRedux,
  SiFramer,
  SiReact,
} from "react-icons/si";
import { DiCss3 } from "react-icons/di";

import projectCrypto from "../../assets/projects/crypto.png";
import tmoviesImg from "../../assets/projects/t-movies.png";
import amazonImg from "../../assets/projects/amazon.png";
import filmy from "../../assets/projects/filmy.png";
import sdstore from "../../assets/projects/sdstore.png";
import sdcampus from "../../assets/projects/sdcampus.png";

const Projects = () => {
  return (
    <>
      <div className="section">
        <h2 className="section__title different">Projects</h2>
        <div className="allProjects">
          <div className="projects_container" data-aos="fade-right">
            <div className="project">
              <div className="project_banner">
                <div>
                  <img src={projectCrypto} alt="t-movies" />
                </div>
              </div>
              <div className="project_info">
                <h2>Crypto Tracker</h2>
                <p>
                  A Crypto Currency Tracker in which you can see the market
                  price, 24hr change of top 100 Bitcoins with graph & also have
                  Sign up and Sign in functionality.You can also add to cart the
                  Bitcoin after Log in.
                </p>
                <div>
                  <FaReact title="React" />
                  <DiCss3 title="CSS 3" />
                  <SiMui title="Material UI" />
                  <SiReactrouter title="React Router" />
                  <SiFirebase title="Firebase" />
                </div>
                <div>
                  <a
                    href="https://live-crypto-currency-tracker.netlify.app/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt onbt">
                      See Demo
                    </span>
                  </a>
                  <a
                    href="https://github.com/devakashpandey/CryptoCurrency-Tracker-Project"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt">
                      View Code
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="projects_container" data-aos="fade-right">
            <div className="project">
              <div className="project_banner">
                <div>
                  <img src={sdcampus} alt="" />
                </div>
              </div>
              <div className="project_info">
                <h2>SD Campus</h2>
                <p>
                  Designed and developed pre-login website pages for a learning
                  platform using React.js ensuring a fully responsive and
                  user-friendly interface across devices. Created an intuitive
                  UI for students to join online classes and engage in
                  one-on-one conversations with instructors, improving the
                  learning and communication experience.
                </p>
                <div>
                  <FaReact title="React" />
                  <SiRedux title="Redux" />
                  <SiMui title="Material UI" />
                  <SiReactrouter title="React Router" />
                </div>
                <div>
                  <a
                    href="https://www.sdcampus.com/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt onbt">
                      See Demo
                    </span>
                  </a>
                  <a href="" rel="noreferrer">
                    <span type="button" className="btns onbt">
                      View Code
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="projects_container" data-aos="fade-right">
            <div className="project">
              <div className="project_banner">
                <div>
                  <img src={tmoviesImg} alt="t-movies" />
                </div>
              </div>
              <div className="project_info">
                <h2>T-Movies</h2>
                <p>
                  A TV Shows & Movies web app where you see the all Trending,
                  Popular, Top Rated TV shows & Movies. See full information
                  like Rating, Details, Actor, Trailer with Skeleton loading &
                  Lazy load image and also filter with Category & Sorting.
                </p>
                <div>
                  <FaSass title="Sass" />
                  <FaReact title="React" />
                  <SiReactrouter title="React Router" />
                  <SiRedux title="Redux" />
                  <SiMui title="Material UI" />
                </div>
                <div>
                  <a
                    href="https://t-movies-react.netlify.app/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt">
                      See Demo
                    </span>
                  </a>
                  <a
                    href="https://github.com/devakashpandey/T-Movies-Project"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt">
                      View Code
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="projects_container" data-aos="fade-right">
            <div className="project">
              <div className="project_banner">
                <div>
                  <img src={amazonImg} alt="" />
                </div>
              </div>
              <div className="project_info">
                <h2>Amazon Clone</h2>
                <p>
                  A Amazon Clone in which we can add products to cart & delete
                  from cart using Redux Toolkit & save the data in Local storage
                  using Redux-Persist. Sign up & Sign in functionality is also
                  here.
                </p>
                <div>
                  <FaReact title="React" />
                  <SiTailwindcss title="Tailwind css" />
                  <SiRedux title="Redux" />

                  <SiMui title="Material UI" />
                  <SiFramer title="Framer Motion" />
                  <SiFirebase />
                </div>
                <div>
                  <a
                    href="https://new-amazon-clone-2023.netlify.app"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt onbt">
                      See Demo
                    </span>
                  </a>
                  <a
                    href="https://github.com/devakashpandey/Amazon-Clone-Project"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt">
                      View Code
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
