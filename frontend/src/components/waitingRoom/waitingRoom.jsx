import React from "react";
import gameService from "../../services/game/game";
import "./waitingRoom.css";

export const WaitingRoom = () => {
  return (
    <div className="waiting-room-container">
      {/* <h1>Waiting Room</h1> */}
      <div className="waiting-room">
        <h3 className="waiting-room-text">
          Waiting for your opponent to join the room...
        </h3>
        <h3>Share this code with your friend: {gameService.roomId}</h3>
      </div>
    </div>
  );
};
