import React from "react";
import "./gameOver.css";

export const GameOver = ({ result, handleButtonClick }) => {

    const isWin = result === "You win!";


  return (
    <div className="game-over-container">
      <h1 className="game-over">Game over!</h1>
      <h1 className={"game-over " + ((isWin) ? "win" : "lose")}>{result}</h1> s
      <button className="simple-button" onClick={handleButtonClick}>Quit</button>
    </div>
  );
};