import React, { useState } from "react";
import "./gameButtons.css";
import { Rock } from "../rock/rock";
import { Paper } from "../paper/paper";
import { Scissors } from "../scissors/scissors";
// import { choices } from "../../gameLogic/gameLogic";

export const GameButtons = ({ handleChoice, roundTime }) => {
  const [clicked, setClicked] = useState(false);
  const [paper, setPaper] = useState(false);
  const [rock, setRock] = useState(false);
  const [scissors, setScissors] = useState(false);

  const handleClick = (choice) => {
    if (roundTime > 0 && !clicked) {
      setClicked(true);
      handleChoice(choice);
      if (choice === "paper") {
        setPaper(true);
      }
      if (choice === "rock") {
        setRock(true);
      }
      if (choice === "scissors") {
        setScissors(true);
      }
    }
  };

  return (
    <div>
      <div className="game-buttons-container">
        <div
          className={
            "game-button " +
            (clicked ? (paper ? "selected" : "other-button-selected") : "")
          }
          onClick={() => handleClick("paper")}
        >
          <Paper />
        </div>
      </div>
      <div className="game-buttons-container">
        <div
          className={
            "game-button " +
            (clicked ? (scissors ? "selected" : "other-button-selected") : "")
          }
          onClick={() => handleClick("scissors")}
        >
          <Scissors />
        </div>
        <div
          className={
            "game-button " +
            (clicked ? (rock ? "selected" : "other-button-selected") : "")
          }
          onClick={() => handleClick("rock")}
        >
          <Rock />
        </div>
      </div>
    </div>
  );
};
