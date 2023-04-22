import React, { useContext } from "react";
import "./Footer.css";
import { ThemeContext } from "../../context/Theme";

const Footer = () => {
  const [{ theme }] = useContext(ThemeContext);
  const currYear = new Date();
  const year = currYear.getFullYear();
  return (
    <>
      <div className={"section " + theme}>
        <div className="footerBox">
          <span className="copyright">
            Copyright © {year} - All Rights Reserved
          </span>
          <a href="/" rel="noreferrer">
            <h4 className="name">Akash Pandey</h4>
          </a>
        </div>
      </div>
    </>
  );
};

export default Footer;
