import React, { useState, useEffect } from "react";
import gameService from "../../services/game/game";
import socketService from "../../services/socket/socket";
import { Timer } from "../../components/timer/timer";

export const Game = () => {

  const [userChoice, setUserChoice] = useState(null);
  const [opponentChoice, setOpponentChoice] = useState(null);
  const [userScore, setUserScore] = useState(0);
  const [opponentScore, setOpponentScore] = useState(0);
  const [result , setResult] = useState(null);
  const [round, setRound] = useState(0);
  const [seconds, setSeconds] = useState(null);

  const choices = ["rock", "paper", "scissors"];

  const handleUserChoice = (choice) => {
    setUserChoice(choice);
    if (socketService.socket)
      gameService.updateGame(socketService.socket, choice);
  }

  const timOver = () => {
    if (socketService.socket) {
      if (userChoice)
        gameService.updateGame(socketService.socket, userChoice);
      else {
        const random = choices[Math.floor(Math.random() * choices.length)];
        setUserChoice(random);
        gameService.updateGame(socketService.socket, random);
      }
    }
  }

  const handleGameUpdate = () => {
    if (socketService.socket)
      gameService.onGameUpdate(socketService.socket, (data) => {
        if (data.from !== socketService.socket.id)
        setOpponentChoice(data.gameChoice);
        console.log("handleGameUpdate: ", data)
      });
  }
    
  const handleGameStart = () => {
    if (socketService.socket)
      gameService.onGameStart(socketService.socket, (data) => {
        console.log("handleGameStart: ", data)
        setRound(1);
        setSeconds(5);
      });
  }

  const handleGameRound = () => {
    if (socketService.socket) {
      gameService.newRound(socketService.socket, round + 1)
      gameService.onNewRound(socketService.socket, (data) => {
        console.log("handleGameRound: ", data)
        setRound(data.round);
        setUserChoice(null);
        setOpponentChoice(null);
        setResult(null);
        setSeconds(5);
      });
    }
  }

  useEffect(() => {
    handleGameUpdate();
    handleGameStart();
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
      handleGameRound()
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
          <button key={choice} onClick={() => handleUserChoice(choice)}>{choice}</button>
          );
        })}
      <p>Your choice: {userChoice}</p>
      <p>Opponent choice: {opponentChoice}</p>
      <h1>{ result }</h1>
      <div style={{width: "100px"}}>
        <Timer timOver={timOver} seconds={seconds} setSeconds={setSeconds} />
      </div>
        </>
      }
    </div>
  );
}