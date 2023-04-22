import React from "react";
import Typewriter from "typewriter-effect";

const Type = () => {
  return (
    <>
      <div style={{ fontSize: 28, marginTop: 20 }}>
        <Typewriter
          options={{
            strings: [
              "Front-End Web Developer",
              "YouTuber",
              "Video Gamer",
              "Web Designer",
              "Video Editor",
            ],
            autoStart: true,
            loop: true,
            deleteSpeed: 50,
          }}
        />
      </div>
    </>
  );
};

export default Type;
