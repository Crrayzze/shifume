class GameService {

  async joinGameRoom(socket, roomId) {
    return new Promise((resolve, reject) => {
      console.log('joinGameRoom')
      socket.emit('join_game', { roomId });
      socket.on('room_joined', () => resolve(true))
      socket.on('room_join_error', ({ error }) => reject(error))
    })
  }

  updateGame(socket, gameChoice) {
    // console.log('updateGame: ', gameChoice)
    socket.emit('update_game', { gameChoice: gameChoice, from: socket.id });
  }

  // Should maybe change this to onGameUpdate
  async onGameUpdate(socket, listener) {
    socket.on('on_game_update', listener);
    console.log('onGameUpdate')
  }

}

const gameService = new GameService();

export default gameService;