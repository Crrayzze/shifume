class GameService {

  async joinGameRoom(socket, roomId) {
    return new Promise((resolve, reject) => {
      console.log('joinGameRoom')
      socket.emit('join_game', { roomId });
      socket.on('room_joined', () => resolve(true))
      socket.on('room_join_error', ({ error }) => reject(error))
    })
  }

}

const gameService = new GameService();

export default gameService;