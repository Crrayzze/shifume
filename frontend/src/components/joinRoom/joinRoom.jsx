import React from "react";
import { useState } from "react";
import socketService from "../../services/socket/socket";
import gameService from "../../services/game/game";
import "./joinRoom.css";
import { Tutorial } from "../tutorial/tutorial";

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
    <div className="join-room-wrapper">
      <div>
        <h1 className="play-label">Play</h1>
        <div className="join-room-container">
          <form>
            <h1 className="join-room-label">Create a new game</h1>
            <button
              disabled={isJoining}
              onClick={createRoom}
              className="simple-button"
            >
              {isJoining ? "Joining..." : "Create"}
            </button>
          </form>
          <div className="or">OR</div>
          <form onSubmit={joinRoom}>
            <div>
              <h1 className="join-room-label">Join a game with its code</h1>
              <input
                type="text"
                placeholder="Room ID"
                value={roomID}
                onChange={handleRoomIDChange}
                className="join-room-input"
              />
            </div>
            <button
              type="submit"
              disabled={isJoining}
              className="simple-button"
            >
              {isJoining ? "Joining..." : "Join"}
            </button>
          </form>
          <div className="vertical-separator"></div>
        </div>
      </div>
      <Tutorial />
    </div>
  );
};
