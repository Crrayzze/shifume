import React from "react";
import { useState, useContext } from "react";
import socketService from "../../services/socket/socket";
import gameService from "../../services/game/game";
import GameContext from "../../context/gameContext";

export const JoinRoom = () => {
  const [roomID, setRoomID] = useState("");
  const [isJoining, setIsJoining] = useState(false);

  const { isInRoom, setIsInRoom } = useContext(GameContext);

  const handleRoomIDChange = (e) => {
    const value = e.target.value;
    setRoomID(value);
  };

  const joinRoom = async (e) => {
    e.preventDefault();
    const socket = socketService.socket;

    if (!roomID || roomID.trim() === "" || !socket) return;

    setIsJoining(true);

    const joined = await gameService
      .joinGameRoom(socket, roomID)
      .catch((err) => {
        console.log("Error: ", err);
        alert(err);
      });

    if (joined) setIsInRoom(true);

    setIsJoining(false);
  };

  return (
    <div>
      <form onSubmit={joinRoom}>
        <h1>Enter room ID to join the game</h1>
        <input
          type="text"
          placeholder="Room ID"
          value={roomID}
          onChange={handleRoomIDChange}
        />
        <button type="submit" disabled={isJoining}>
          {isJoining ? "Joininng..." : "Join"}
        </button>
      </form>
    </div>
  );
};
