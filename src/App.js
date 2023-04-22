import React, { useEffect, useContext } from "react";
import "./App.css";
import Aos from "aos";
import "aos/dist/aos.css";
import { ThemeContext } from "./context/Theme";
import Header from "./components/header/Header";
import About from "./components/about/About";
import Skills from "./skills/Skills";
import Github from "./components/myGithub/Github";
import Projects from "./components/projects/Projects";

const App = () => {
  const [{ theme }] = useContext(ThemeContext);

  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);
  return (
    <>
      <div id="top" className={`${theme} app`}>
        <section id="#home">
          <Header />
        </section>

        <main>
          <About />
        </main>
        <Skills />

        <Github />

        <section id="#projects">
          <Projects />
        </section>

        {/* <section id="#contact">
          <Contact />
        </section>

        <Footer />

        <ScrollToTop /> */}
      </div>
    </>
  );
};

export default App;
