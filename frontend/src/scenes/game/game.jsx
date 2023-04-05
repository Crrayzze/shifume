import React, { useState, useEffect, useMemo } from "react";
import { Timer } from "../../components/timer/timer";
import { choices } from "../../gameLogic/gameLogic";
import { GameLogic } from "../../gameLogic/gameLogic";
import { WaitingRoom } from "../../components/waitingRoom/waitingRoom";
import { GameInfo } from "../../components/gameInfo/gameInfo";
import { GameButtons } from "../../components/gameButtons/gameButtons";

export const Game = ({ setIsInRoom }) => {
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
  const [isGameOver, setIsGameOver] = useState(false);
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
      setIsWaitingForOpponentChoice,
      setIsGameOver
    );
  }, []);

  useEffect(() => {
    gameLogic.handleGameUpdate();
    gameLogic.startGame();
  }, [gameLogic]);

  useEffect(() => {
    gameLogic.checkRoundResult(
      userChoice,
      opponentChoice,
      userScore,
      opponentScore
    );
  }, [userChoice, opponentChoice]);

  return (
    <div>
      {round === 0 && <WaitingRoom />}
      {round > 0 && (
        <>
          {/* Game info */}
          <GameInfo opponentScore={opponentScore} userScore={userScore} />
          
          {/* TODO: Timer */}
          <Timer
            timeOver={() => {
              gameLogic.roundTimeOver(userChoice);
            }}
            seconds={roundTime}
            setSeconds={setRoundTime}
          />

          {/* Button */}
          <GameButtons />
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

          {/* could be removed or moved to the inter round? */}
          <p>Your choice: {userChoice}</p>
          <p>Opponent choice: {opponentChoice}</p>
          {isWaitingForOpponentChoice && roundTime === 0 && !isGameOver && (
            <h1>Waiting for opponent choice</h1>
          )}

          {/* Inter round */}
          {interRoundTime >= 0 &&
            !isWaitingForOpponentChoice &&
            !isGameOver && (
              <>
                <h1>{result}</h1>
                <h1>Next round in {interRoundTime} seconds</h1>
                <Timer
                  timeOver={() => {
                    if (!gameLogic.verifyWinCondition(userScore, opponentScore))
                      gameLogic.newRound(round);
                    console.log("actual round: ", round);
                  }}
                  seconds={interRoundTime}
                  setSeconds={setInterRoundTime}
                />
              </>
            )}
        </>
      )}

      {/* Game Over */}
      {isGameOver && (
        <>
          <h1>Game over!</h1>
          <h1>{result}</h1>
          <button
            onClick={() => {
              setIsInRoom(false);
              gameLogic.leaveTheGame();
            }}
          >
            Leave room
          </button>
        </>
      )}
    </div>
  );
};
