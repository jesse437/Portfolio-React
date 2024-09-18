import { useState } from "react";
import "../src/components/Portfolio";

// Import the image
import React from "react";
import Images from "../../images/html.png";
import Images from "./images/portfolio1.png";
import Images from "./images/project.png";
import Images from "./images/pwa.png";
import Images from "./images/task.png";
import Images from "./images/weather.png";

const Images = () => {
  return (
    <div>
      <img src={html.png} alt="pOne" />
      <img src={portfolio1.png} alt="pTwo" />
      <img src={project.png} alt="pThree" />
      <img src={pwa.png} alt="pFour" />
      <img src={task.png} alt="pFive" />
      <img src={weather.png} alt="pSix" />
    </div>
  );
};

export default Portfolio;
