import React from "react";
import "./ScrollToTop.css";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";

const ScroolToTop = () => {
  return (
    <>
      <div className="scroll-top">
        <a href="#top">
          <ArrowUpwardIcon fontSize="large" />
        </a>
      </div>
    </>
  );
};

export default ScroolToTop;
