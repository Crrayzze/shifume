import io from "socket.io-client";

class SocketService {
  socket = null;

  connect(url) {
    return new Promise((result, reject) => {
      this.socket = io(url);

      if (!this.socket) {
        reject("Socket connection failed");
      }

      this.socket.on("connect", () => {
        console.log("Socket connected");
        result(this.socket);
      });

      this.socket.on("connect_error", (error) => {
        console.log("Socket connection error: ", error);
        reject(error);
      });
    });
  }
}

const socketService = new SocketService();

export default socketService;
