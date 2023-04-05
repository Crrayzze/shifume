"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const socket_controllers_1 = require("socket-controllers");
const socket_io_1 = require("socket.io");
const typedi_1 = require("typedi");
const express_1 = __importDefault(require("express"));
const http_1 = __importDefault(require("http"));
const app = (0, express_1.default)();
const server = http_1.default.createServer(app);
const io = new socket_io_1.Server(server, {
    cors: {
        origin: "*",
    },
});
server.listen(8000, () => {
    console.log("listening on :8000");
});
app.get("/", function (req, res) {
    res.send("hello world");
});
new socket_controllers_1.SocketControllers({
    io,
    container: typedi_1.Container,
    controllers: [__dirname + "/api/controllers/*.ts"],
});
