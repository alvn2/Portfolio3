import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Software Developer",
          "Full Stack Developer",
          "React Developer",
          "Node.js Developer",
          "Python Developer",
          "Java Developer",
          "UI/UX Designer",
          "Freelancer",
          "MERN Stack Developer",
          "Open Source Contributor",
          "cybersecurity enthusiastic Contributor"
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
