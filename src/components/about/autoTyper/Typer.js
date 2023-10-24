import React from "react";
import Typewriter from "typewriter-effect";

const Type = () => {
  return (
    <>
      <div style={{ fontSize: 28, marginTop: 20 }}>
        <Typewriter
          options={{
            strings: [
              "Front-End Developer",
              "You-Tuber",
              "Web-Designer",
              "UI-Developer",
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
