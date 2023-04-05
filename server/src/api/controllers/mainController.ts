import {
  ConnectedSocket,
  OnConnect,
  SocketController,
  SocketIO,
} from "socket-controllers";
import { Socket, Server } from "socket.io";
import { Service } from "typedi";

@SocketController()
@Service()
export class MainController {
  @OnConnect()
  onConnection(@ConnectedSocket() socket: Socket, @SocketIO() io: Server) {
    console.log("New Socket connected: ", socket.id);

  }
}
