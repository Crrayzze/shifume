class GameService {

  async joinGameRoom(socket, roomId) {
    return new Promise((resolve, reject) => {
      socket.emit('join_game', { roomId });
      socket.on('room_joined', () => resolve(true))
      socket.on('room_join_error', ({ error }) => reject(error))
    })
  }

  updateGame(socket, gameChoice) {
    socket.emit('update_game', { gameChoice: gameChoice, from: socket.id });
  }

  async onGameUpdate(socket, listener) {
    socket.on('on_game_update', listener);
  }

  async onGameStart(socket, listener) {
    socket.on("start_game", listener);
  }

  newRound(socket, round) {
    socket.emit("start_new_round", { round: round });
  }

  async onNewRound(socket, listener) {
    socket.on("on_new_round", listener);
  }

}

const gameService = new GameService();

export default gameService;