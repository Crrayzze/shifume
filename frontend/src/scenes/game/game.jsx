import React, { useState, useEffect, useMemo } from "react";
import { Timer } from "../../components/timer/timer";
import { choices } from "../../gameLogic/gameLogic";
import { GameLogic } from "../../gameLogic/gameLogic";

export const Game = () => {
  const [userChoice, setUserChoice] = useState(null);
  const [opponentChoice, setOpponentChoice] = useState(null);
  const [userScore, setUserScore] = useState(0);
  const [opponentScore, setOpponentScore] = useState(0);
  const [result, setResult] = useState(null);
  const [round, setRound] = useState(0);
  const [roundTime, setRoundTime] = useState(null);
  const [interRoundTime, setInterRoundTime] = useState(null);
  const [isWaitingForOpponentChoice, setIsWaitingForOpponentChoice] =
    useState(true);
  const gameLogic = useMemo(() => {
    return new GameLogic(
      setUserChoice,
      setOpponentChoice,
      setUserScore,
      setOpponentScore,
      setResult,
      setRound,
      setRoundTime,
      setInterRoundTime,
      setIsWaitingForOpponentChoice
    );
  }, []);

  useEffect(() => {
    gameLogic.handleGameUpdate();
    gameLogic.startGame();
  }, [gameLogic]);

  useEffect(() => {
    if (userChoice && opponentChoice) {
      if (userChoice === opponentChoice) {
        setResult("It's a draw!");
      } else if (userChoice === "rock" && opponentChoice === "scissors") {
        setResult("You win!");
        setUserScore(userScore + 1);
      } else if (userChoice === "rock" && opponentChoice === "paper") {
        setResult("You lose...");
        setOpponentScore(opponentScore + 1);
      } else if (userChoice === "paper" && opponentChoice === "rock") {
        setResult("You win!");
        setUserScore(userScore + 1);
      } else if (userChoice === "paper" && opponentChoice === "scissors") {
        setResult("You lose...");
        setOpponentScore(opponentScore + 1);
      } else if (userChoice === "scissors" && opponentChoice === "paper") {
        setResult("You win!");
        setUserScore(userScore + 1);
      } else if (userChoice === "scissors" && opponentChoice === "rock") {
        setResult("You lose...");
        setOpponentScore(opponentScore + 1);
      }
    }
  }, [userChoice, opponentChoice]);

  return (
    <div>
      {round === 0 && <h1>Waiting for your opponent to join the room...</h1>}
      {round > 0 && (
        <>
          <h1>You VS Opponent</h1>
          <div>Your score: {userScore}</div>
          <div>Opponent score: {opponentScore}</div>
          <div>Round: {round}</div>
          {choices.map((choice) => {
            return (
              <button
                key={choice}
                onClick={() => gameLogic.sendUserChoice(choice)}
              >
                {choice}
              </button>
            );
          })}
          <p>Your choice: {userChoice}</p>
          <p>Opponent choice: {opponentChoice}</p>
          <Timer
            timeOver={() => gameLogic.roundTimeOver(userChoice)}
            seconds={roundTime}
            setSeconds={setRoundTime}
          />
          {isWaitingForOpponentChoice && roundTime === 0 && (
            <h1>Waiting for opponent choice</h1>
          )}
          {interRoundTime >= 0 && !isWaitingForOpponentChoice && (
            <>
              <h1>{result}</h1>
              <h1>Next round in {interRoundTime} seconds</h1>
              <Timer
                timeOver={() => gameLogic.newRound(round)}
                seconds={interRoundTime}
                setSeconds={setInterRoundTime}
              />
            </>
          )}
        </>
      )}
    </div>
  );
};
