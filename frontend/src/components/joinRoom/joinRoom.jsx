import React from "react";
import { useState } from "react";
import socketService from "../../services/socket/socket";
import gameService from "../../services/game/game";

export const JoinRoom = ({ setIsInRoom }) => {
  const [roomID, setRoomID] = useState("");
  const [isJoining, setIsJoining] = useState(false);

  const handleRoomIDChange = (e) => {
    const value = e.target.value;
    setRoomID(value);
  };

  const connectToRoom = async (ID, socket) => {
    setIsJoining(true);

    const joined = await gameService.joinGameRoom(socket, ID).catch((err) => {
      console.log("Error: ", err);
      alert(err);
    });

    if (joined) setIsInRoom(true);

    setIsJoining(false);
  };

  const joinRoom = async (e) => {
    e.preventDefault();
    const socket = socketService.socket;

    if (!roomID || roomID.trim() === "" || !socket) return;

    connectToRoom(roomID, socket);
  };

  const createRoom = async () => {
    let randomID = "";
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    for (let i = 0; i < 6; i++) {
      randomID += characters.charAt(
        Math.floor(Math.random() * characters.length)
      );
    }
    const socket = socketService.socket;

    if (!randomID || randomID.trim() === "" || !socket) return;

    connectToRoom(randomID, socket);
  };

  return (
    <div>
      <form>
        <h1>Create a new room</h1>
        <button disabled={isJoining} onClick={createRoom}>
          {isJoining ? "Joining..." : "Create"}
        </button>
      </form>
      <form onSubmit={joinRoom}>
        <h1>Enter room ID to join the game</h1>
        <input
          type="text"
          placeholder="Room ID"
          value={roomID}
          onChange={handleRoomIDChange}
        />
        <button type="submit" disabled={isJoining}>
          {isJoining ? "Joining..." : "Join"}
        </button>
      </form>
    </div>
  );
};
