import React, { useState, useEffect } from "react";
import gameService from "../../services/game/game";
import socketService from "../../services/socket/socket";
import { Timer } from "../../components/timer/timer";
import { choices } from "../../gameLogic/gameLogic";
import { GameLogic } from "../../gameLogic/gameLogic";

export const Game = () => {

  
  const [userChoice, setUserChoice] = useState(null);
  const [opponentChoice, setOpponentChoice] = useState(null);
  const [userScore, setUserScore] = useState(0);
  const [opponentScore, setOpponentScore] = useState(0);
  const [result , setResult] = useState(null);
  const [round, setRound] = useState(0);
  const [roundTime, setRoundTime] = useState(null);
  const [interRoundTime, setInterRoundTime] = useState(null);
  const gameLogic = new GameLogic(setUserChoice, setOpponentChoice, setUserScore, setOpponentScore, setResult, setRound, setRoundTime, setInterRoundTime);


  useEffect(() => {
    gameLogic.handleGameUpdate();
    gameLogic.startGame();
  }, [gameLogic])

  useEffect(() => {
    if (userChoice && opponentChoice) {
      if (userChoice === opponentChoice) {
        setResult("It's a draw!");
      }
      else if (userChoice === "rock" && opponentChoice === "scissors") {
        setResult("You win!");
        setUserScore(userScore + 1);
      }
      else if (userChoice === "rock" && opponentChoice === "paper") {
        setResult("You lose...");
        setOpponentScore(opponentScore + 1);
      }
      else if (userChoice === "paper" && opponentChoice === "rock") {
        setResult("You win!");
        setUserScore(userScore + 1);
      }
      else if (userChoice === "paper" && opponentChoice === "scissors") {
        setResult("You lose...");
        setOpponentScore(opponentScore + 1);
      }
      else if (userChoice === "scissors" && opponentChoice === "paper") {
        setResult("You win!");
        setUserScore(userScore + 1);
      }
      else if (userChoice === "scissors" && opponentChoice === "rock") {
        setResult("You lose...");
        setOpponentScore(opponentScore + 1);
      }
    }
  }, [userChoice, opponentChoice]);

  return (
    <div>
      {round === 0 && <h1>Waiting for your opponent to join the room...</h1>}
      {round > 0 && <>
      <h1>You VS Opponent</h1>
      <div>Your score: {userScore}</div>
      <div>Opponent score: {opponentScore}</div>
      <div>Round: {round}</div>
      {choices.map((choice) => {
        return (
          <button key={choice} onClick={() => gameLogic.sendUserChoice(choice)}>{choice}</button>
          );
        })}
      <p>Your choice: {userChoice}</p>
      <p>Opponent choice: {opponentChoice}</p>
      <Timer timeOver={() => gameLogic.roundTimeOver(userChoice)} seconds={roundTime} setSeconds={setRoundTime} />
      {interRoundTime >= 0 && 
      <>
      <h1>{ result }</h1>
      <h1>Next round in {interRoundTime} seconds</h1>
      <Timer timeOver={() => gameLogic.newRound(round)} seconds={interRoundTime} setSeconds={setInterRoundTime} />
      </>}
        </>
      }
    </div>
  );
}