import { ConnectedSocket, OnConnect, SocketController, SocketIO } from "socket-controllers";
import { Socket, Server } from "socket.io";

@SocketController()
export class MainController {

  @OnConnect()
  onConnection(@ConnectedSocket() socket: Socket, @SocketIO() io: Server) {
    console.log("New client connected: ", socket.id);
  }
}