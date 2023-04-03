import React, { useState, useEffect } from "react";
import gameService from "../../services/game/game";
import socketService from "../../services/socket/socket";

export const Game = () => {

  const [userChoice, setUserChoice] = useState(null);
  const [opponentChoice, setOpponentChoice] = useState(null);
  const [userScore, setUserScore] = useState(0);
  const [opponentScore, setOpponentScore] = useState(0);
  const [result , setResult] = useState(null);
  const choices = ["rock", "paper", "scissors"];

  const handleUserChoice = (choice) => {
    // console.log("handleUserChoice: ", choice)
    setUserChoice(choice);
    if (socketService.socket)
      gameService.updateGame(socketService.socket, choice);
    // handleOpponentChoice();
  }
  
  const handleOpponentChoice = () => {
    const randomChoice = choices[Math.floor(Math.random() * choices.length)];
    setOpponentChoice(randomChoice);
  }

  const handleGameUpdate = () => {
    if (socketService.socket)
      gameService.onGameUpdate(socketService.socket, (data) => {
        if (data.from !== socketService.socket.id)
        setOpponentChoice(data.gameChoice);
        console.log("handleGameUpdate: ", data)
      });
  }

  useEffect(() => {
    handleGameUpdate();
  }, [])

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
      <h1>You VS Opponent</h1>
      <div>Your score: {userScore}</div>
      <div>Opponent score: {opponentScore}</div>
      {choices.map((choice) => {
        return (
          <button key={choice} onClick={() => handleUserChoice(choice)}>{choice}</button>
        );
      })}
      <p>Your choice: {userChoice}</p>
      <p>Opponent choice: {opponentChoice}</p>
      <h1>{ result }</h1>
    </div>
  );
}