import React from "react";
import { Rock } from "../rock/rock";
import { Paper } from "../paper/paper";
import { Scissors } from "../scissors/scissors";
import "./roundResult.css";

export const RoundResult = ({ roundResult, userChoice, opponentChoice }) => {
  const isWin = roundResult === "You win!";

  return (
    <div className="round-result-container">
      <div className="round-result-choices">
        <div>
          {userChoice === "rock" ? (
            <Rock />
          ) : userChoice === "paper" ? (
            <Paper />
          ) : (
            <Scissors />
          )}
        </div>
        <h1>VS</h1>
        <div>
          {opponentChoice === "rock" ? (
            <Rock />
          ) : opponentChoice === "paper" ? (
            <Paper />
          ) : (
            <Scissors />
          )}
        </div>
      </div>
      <h1 className={"round-result " + (isWin ? "win" : "lose")}>
        {roundResult}
      </h1>
    </div>
  );
};
