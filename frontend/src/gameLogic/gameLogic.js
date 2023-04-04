import gameService from "../services/game/game";
import socketService from "../services/socket/socket";

export const choices = ["rock", "paper", "scissors"];

export class GameLogic {
  constructor(
    setUserChoice,
    setOpponentChoice,
    setUserScore,
    setOpponentScore,
    setResult,
    setRound,
    setRoundTime,
    setInterRoundTime
  ) {
    this.setUserChoice = setUserChoice;
    this.setOpponentChoice = setOpponentChoice;
    this.setUserScore = setUserScore;
    this.setOpponentScore = setOpponentScore;
    this.setResult = setResult;
    this.setRound = setRound;
    this.setRoundTime = setRoundTime;
    this.setInterRoundTime = setInterRoundTime;
  }

  sendUserChoice(choice) {
    this.setChoice(choice);
    if (socketService.socket)
      gameService.updateGame(socketService.socketsocket, choice);
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
          this.setInterRoundTime(5);
        }
      });
    }
  }

  startGame() {
    if (socketService.socket) {
      gameService.onGameStart(socketService.socket, (data) => {
        this.setRound(1);
        this.setRoundTime(5);
      });
    }
  }

  newRound(round) {
    if (socketService.socket) {
      gameService.newRound(socketService.socket, round + 1);
      gameService.onNewRound(socketService.socket, (data) => {
        this.setRound(round + 1);
        this.setUserChoice(null);
        this.setOpponentChoice(null);
        this.setRoundTime(5);
        this.setResult(null);
        this.setInterRoundTime(null);
      });
    }
  }
}
