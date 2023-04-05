"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GameController = void 0;
const socket_controllers_1 = require("socket-controllers");
const socket_io_1 = require("socket.io");
const typedi_1 = require("typedi");
let GameController = class GameController {
    getGameRoom(socket) {
        const rooms = Array.from(socket.rooms.values()).filter((room) => room !== socket.id);
        const room = rooms && rooms.length > 0 ? rooms[0] : null;
        return room;
    }
    update_game(io, socket, message) {
        return __awaiter(this, void 0, void 0, function* () {
            const room = this.getGameRoom(socket);
            if (room) {
                io.to(room).emit("on_game_update", message);
            }
        });
    }
    start_new_round(io, socket, message) {
        return __awaiter(this, void 0, void 0, function* () {
            const room = this.getGameRoom(socket);
            if (room) {
                io.to(room).emit("on_new_round", message);
                io.emit("on_new_round", message);
            }
        });
    }
};
__decorate([
    (0, socket_controllers_1.OnMessage)("update_game"),
    __param(0, (0, socket_controllers_1.SocketIO)()),
    __param(1, (0, socket_controllers_1.ConnectedSocket)()),
    __param(2, (0, socket_controllers_1.MessageBody)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [socket_io_1.Server,
        socket_io_1.Socket, Object]),
    __metadata("design:returntype", Promise)
], GameController.prototype, "update_game", null);
__decorate([
    (0, socket_controllers_1.OnMessage)("start_new_round"),
    __param(0, (0, socket_controllers_1.SocketIO)()),
    __param(1, (0, socket_controllers_1.ConnectedSocket)()),
    __param(2, (0, socket_controllers_1.MessageBody)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [socket_io_1.Server,
        socket_io_1.Socket, Object]),
    __metadata("design:returntype", Promise)
], GameController.prototype, "start_new_round", null);
GameController = __decorate([
    (0, socket_controllers_1.SocketController)(),
    (0, typedi_1.Service)()
], GameController);
exports.GameController = GameController;
