import React from "react";
import tutorialPicture from "../../assets/tutorial.png";
import "./tutorial.css";

export const Tutorial = () => {
  return (
    <div className="tutorial-wrapper">
      <h1>Tutorial</h1>
      <div className="tutorial-image-container">
        <img src={tutorialPicture} alt="Tutorial" className="tutorial-image" />
      </div>
    </div>
  );
};
