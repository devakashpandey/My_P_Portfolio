import React, { useContext, useState } from "react";
import "./Navbar.css";
import Brightness2Icon from "@mui/icons-material/Brightness2";
import WbSunnyRoundedIcon from "@mui/icons-material/WbSunnyRounded";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { ThemeContext } from "../../context/Theme";

const Navbar = () => {
  const [{ theme, toggeltheme }] = useContext(ThemeContext);
  const [showNavList, setShowNavList] = useState(false);

  const toggleNavList = (id) => {
    var element = document.getElementById(id);
    if (element) {
      element.scrollIntoView();
    }
    setShowNavList(!showNavList);
  };

  return (
    <>
      <nav className="nav">
        <ul
          style={{ display: showNavList ? "flex" : null }}
          className="nav-list"
        >
          <li className="navlist-item">
            <a
              href="#home"
              onClick={() => toggleNavList("#home")}
              className="link link-nav"
            >
              Home
            </a>
          </li>
          <li className="navlist-item">
            <a
              href="#about"
              onClick={() => toggleNavList("#about")}
              className="link link-nav"
            >
              About
            </a>
          </li>
          <li className="navlist-item">
            <a
              href="#skills"
              onClick={() => toggleNavList("#skills")}
              className="link link-nav"
            >
              Skills
            </a>
          </li>
          <li className="navlist-item">
            <a
              href="#projects"
              onClick={() => toggleNavList("#projects")}
              className="link link-nav"
            >
              Projects
            </a>
          </li>
          <li className="navlist-item">
            <a
              href="#contact"
              onClick={() => toggleNavList("#contact")}
              className="link link-nav"
            >
              Contact
            </a>
          </li>
        </ul>

        <button
          type="button"
          onClick={toggeltheme}
          className="btn btn-icon nav-theme"
          aria-label="toggle theme"
          style={{ backgroundColor: "inherit" }}
        >
          {theme === "dark" ? <WbSunnyRoundedIcon /> : <Brightness2Icon />}
        </button>

        {/* mobile hamberger menu  */}

        <button
          type="button"
          onClick={toggleNavList}
          className="btn btn-icon nav-hamburger"
          aria-label="toggle navigation"
        >
          {showNavList ? <CloseIcon /> : <MenuIcon />}
        </button>
      </nav>
    </>
  );
};

export default Navbar;
