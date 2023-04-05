import React, { useState, useEffect, useMemo } from "react";
import { Timer } from "../../components/timer/timer";
import { GameLogic } from "../../gameLogic/gameLogic";
import { WaitingRoom } from "../../components/waitingRoom/waitingRoom";
import { GameInfo } from "../../components/gameInfo/gameInfo";
import { GameButtons } from "../../components/gameButtons/gameButtons";
import { Waiting } from "../../components/waiting/waiting";
import { RoundResult } from "../../components/roundResult/roundResult";
import { GameOver } from "../../components/gameOver/gameOver";

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

  const handleChoice = (choice) => {
    gameLogic.sendUserChoice(choice);
  };

  const leaveRoom = () => {
    gameLogic.leaveTheGame();
    setIsInRoom(false);
  };

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
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userChoice, opponentChoice]);

  return (
    <div>
      {round === 0 && <WaitingRoom />}
      {round > 0 && (
        <>
          {/* Game info */}
          <GameInfo opponentScore={opponentScore} userScore={userScore} />

          {/* TODO: Timer */}

          {/* Button */}
          {roundTime > -1 && !isGameOver && (
            <>
              <Timer
                timeOver={() => {
                  gameLogic.roundTimeOver(userChoice);
                }}
                seconds={roundTime}
                setSeconds={setRoundTime}
                show={true}
              />
              <GameButtons handleChoice={handleChoice} roundTime={roundTime} />
            </>
          )}

          {/* Waiting for opponentChoice */}
          {isWaitingForOpponentChoice && roundTime < 0 && !isGameOver && (
            <Waiting />
          )}

          {/* Inter round */}
          {interRoundTime >= 0 &&
            !isWaitingForOpponentChoice &&
            !isGameOver && (
              <>
                <RoundResult
                  roundResult={result}
                  opponentChoice={opponentChoice}
                  userChoice={userChoice}
                />
                <Timer
                  timeOver={() => {
                    if (!gameLogic.verifyWinCondition(userScore, opponentScore))
                      gameLogic.newRound(round);
                  }}
                  seconds={interRoundTime}
                  setSeconds={setInterRoundTime}
                  show={false}
                />
              </>
            )}
        </>
      )}

      {/* Game Over */}
      {isGameOver && <GameOver handleButtonClick={leaveRoom} result={result} />}
    </div>
  );
};
