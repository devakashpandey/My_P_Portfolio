import React from "react";
import GitHubCalendar from "react-github-calendar";
import "./Github.css";

const Github = () => {
  return (
    <>
      <div className="section github" data-aos="fade-right">
        <h2 className="section__title different">
          Days I <span className="different"> Code</span>
        </h2>
        <div className="github" data-aos="fade-right">
          <GitHubCalendar
            username="devakashpandey"
            blockSize={16}
            blockMargin={6}
            fontSize={16}
          />
        </div>
      </div>
    </>
  );
};

export default Github;
