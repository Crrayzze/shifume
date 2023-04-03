import { ConnectedSocket, MessageBody, OnMessage, SocketController, SocketIO } from "socket-controllers";
import { Server, Socket } from "socket.io";
import { Service } from "typedi";

@SocketController()
@Service()
export class GameController {

  private getGameRoom(socket: Socket): string | null {
    const rooms = Array.from(socket.rooms.values()).filter(room => room !== socket.id);
    const room = rooms && rooms.length > 0 ? rooms[0] : null;
    return room;
  }

  @OnMessage("update_game")
  async update_game(@SocketIO() io: Server, @ConnectedSocket() socket: Socket, @MessageBody() message: any) {
    const room = this.getGameRoom(socket);
    // console.log("update_game", room, message)
    if (room) {
      io.to(room).emit("on_game_update", message);
    }

  }

}