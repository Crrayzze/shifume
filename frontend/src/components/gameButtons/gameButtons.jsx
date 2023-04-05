import React from "react";
import "./gameButtons.css";
import { Rock } from "../rock/rock";
import { Paper } from "../paper/paper";
import { Scissors } from "../scissors/scissors";
// import { choices } from "../../gameLogic/gameLogic";
// import { gameLogic } from "../../gameLogic/gameLogic";

export const GameButtons = () => {
  return (
    <div>
      <div className="game-buttons-container">
        <div className="game-button" onClick={() => console.log("paper")}>
          <Paper />
        </div>
      </div>
      <div className="game-buttons-container">
        <div className="game-button" onClick={() => console.log("scissors")}>
          <Scissors />
        </div>
        <div className="game-button " onClick={() => console.log("rock")}>
          <Rock />
        </div>
      </div>
    </div>
  );
};
