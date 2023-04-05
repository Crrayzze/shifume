import gameService from "../services/game/game";
import socketService from "../services/socket/socket";

export const choices = ["paper", "rock", "scissors"];

export class GameLogic {
  constructor(
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
  ) {
    this.setUserChoice = setUserChoice;
    this.setOpponentChoice = setOpponentChoice;
    this.setUserScore = setUserScore;
    this.setOpponentScore = setOpponentScore;
    this.setResult = setResult;
    this.setRound = setRound;
    this.setRoundTime = setRoundTime;
    this.setInterRoundTime = setInterRoundTime;
    this.setIsWaitingForOpponentChoice = setIsWaitingForOpponentChoice;
    this.setIsGameOver = setIsGameOver;
    this.initialRoundTime = 5;
    this.initialInterRoundTime = 5;
    this.requiredScoreToWin = 30;
  }

  sendUserChoice(choice) {
    console.log("sending user choice", choice)
    this.setUserChoice(choice);
  }

  roundTimeOver(userChoice) {
    if (socketService.socket) {
      if (userChoice) {
        gameService.updateGame(socketService.socket, userChoice);
      } else {
        const random = choices[Math.floor(Math.random() * choices.length)];
        this.setUserChoice(random);
        gameService.updateGame(socketService.socket, random);
      }
    }
  }

  handleGameUpdate() {
    if (socketService.socket) {
      gameService.onGameUpdate(socketService.socket, (data) => {
        if (data.from !== socketService.socket.id) {
          this.setOpponentChoice(data.gameChoice);
          this.setInterRoundTime(this.initialInterRoundTime);
          this.setIsWaitingForOpponentChoice(false);
        }
      });
    }
  }

  startGame() {
    if (socketService.socket) {
      gameService.onGameStart(socketService.socket, (data) => {
        this.setRound(1);
        this.setRoundTime(this.initialRoundTime);
      });
    }
  }

  newRound(round) {
    const newRound = round + 1;
    if (socketService.socket) {
      this.setRound(newRound);
      gameService.newRound(socketService.socket, newRound);
      gameService.onNewRound(socketService.socket, (data) => {
        this.setUserChoice(null);
        this.setOpponentChoice(null);
        this.setRoundTime(this.initialRoundTime);
        this.setResult(null);
        this.setInterRoundTime(null);
        this.setIsWaitingForOpponentChoice(true);
      });
    }
  }

  checkRoundResult(userChoice, opponentChoice, userScore, opponentScore) {
    if (userChoice && opponentChoice) {
      if (userChoice === opponentChoice) {
        this.setResult("It's a draw!");
      } else if (userChoice === "rock" && opponentChoice === "scissors") {
        this.setResult("You win!");
        this.setUserScore(userScore + 1);
      } else if (userChoice === "rock" && opponentChoice === "paper") {
        this.setResult("You lose...");
        this.setOpponentScore(opponentScore + 1);
      } else if (userChoice === "paper" && opponentChoice === "rock") {
        this.setResult("You win!");
        this.setUserScore(userScore + 1);
      } else if (userChoice === "paper" && opponentChoice === "scissors") {
        this.setResult("You lose...");
        this.setOpponentScore(opponentScore + 1);
      } else if (userChoice === "scissors" && opponentChoice === "paper") {
        this.setResult("You win!");
        this.setUserScore(userScore + 1);
      } else if (userChoice === "scissors" && opponentChoice === "rock") {
        this.setResult("You lose...");
        this.setOpponentScore(opponentScore + 1);
      }
    }
  }

  verifyWinCondition(userScore, opponentScore) {
    console.log("verifying win condition")
    console.log(userScore, opponentScore)
    if (userScore === this.requiredScoreToWin) {
      this.setResult("You win the game!");
      this.setRound(null);
      this.setRoundTime(null);
      this.setInterRoundTime(null);
      this.setIsGameOver(true);
      return true
    } else if (opponentScore === this.requiredScoreToWin) {
      this.setResult("You lose the game...");
      this.setRound(null);
      this.setRoundTime(null);
      this.setInterRoundTime(null);
      this.setIsGameOver(true);
      return true
    }
    return false
  }

  leaveTheGame() {
    if (socketService.socket) {
      gameService.leaveGameRoom(socketService.socket);
    }
  }
}
