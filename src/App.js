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
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import ScrollToTop from "./components/scrollToTop/ScrollToTop";

const App = () => {
  const [{ theme }] = useContext(ThemeContext);

  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);
  return (
    <>
      <div id="top" className={`${theme} app`}>
        {/* ------ header section ------ */}
        <section id="#home">
          <Header />
        </section>
        {/* -------about section------ */}
        <main>
          <About />
        </main>
        {/* -------skills section------- */}
        <Skills />
        {/* -------github section-------- */}
        <Github />
        {/* -------projects section------- */}
        <section id="#projects">
          <Projects />
        </section>
        {/* -------contacts section------- */}
        <section id="#contact">
          <Contact />
        </section>
        {/* -------footer section------- */}
        <Footer />
        {/* -------scrool to top button------- */}
        <ScrollToTop />
      </div>
    </>
  );
};

export default App;
