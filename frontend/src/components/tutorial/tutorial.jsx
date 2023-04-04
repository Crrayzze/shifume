import React from "react";
import tutorialPicture from '../../assets/tutorial.png'
import './tutorial.css'

export const Tutorial = () => {
  return (
    <div>
      <h1>Tutorial</h1>
      <img src={tutorialPicture} alt="Tutorial" className="tutorial-image" />
    </div>
  );
}