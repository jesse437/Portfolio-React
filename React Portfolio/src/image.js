import React from 'react';
import imgOne from './images/html.png';
import imgTwo from './images/portfolio1.png';
import imgThree from './images/project.png';
import imgFour from './images/pwa.png';
import imgFive from './images/task.png';
import imgSix from './images/weather.png';




function Images() {
  return (
    <div>
      <img src="imgOne" alt="pOne" />
      <img src="imgTwo" alt="pTwo" />
      <img src="imgThree" alt="pThree" />
      <img src="imgFour" alt="pFour" />
      <img src="imgFive" alt="pFive" />
      <img src="imgSix" alt="pSix" />
    </div>
  );
}

export default Images;
