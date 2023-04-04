import "reflect-metadata";
import { SocketControllers } from "socket-controllers";
import { Server } from "socket.io";
import { Container } from "typedi";
import express, { Express } from "express";
import http from "http";

const app: Express = express();
const server: http.Server = http.createServer(app);
const io: Server = new Server(server, {
  cors: {
    origin: "*",
  },
});

server.listen(8000, () => {
  console.log("listening on :8000");
});

app.get("/", function (req: any, res: any) {
  res.send("hello world");
});

new SocketControllers({
  io,
  container: Container,
  controllers: [__dirname + "/api/controllers/*.ts"],
});
