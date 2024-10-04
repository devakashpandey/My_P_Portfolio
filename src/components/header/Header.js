import React, { useContext } from "react";
import "./Header.css";
import Navbar from "../navbar/Navbar";
import { ThemeContext } from "../../context/Theme";

const Header = () => {
  const [{ theme }] = useContext(ThemeContext);

  return (
    <>
      <header className={"header center " + theme}>
        <h3>
          <a href="#home" className="link">
            Akash
          </a>
        </h3>
        <Navbar />
      </header>
    </>
  );
};

export default Header;
