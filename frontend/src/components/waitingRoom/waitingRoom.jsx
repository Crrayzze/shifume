import React from "react";
import gameService from "../../services/game/game";
import "./waitingRoom.css";
import { IoCopy } from "react-icons/io5";

export const WaitingRoom = () => {
  const copyRoomID = () => {
    navigator.clipboard.writeText(gameService.roomId);
  };

  return (
    <div className="waiting-room">
      <h3 className="waiting-room-text first-elem">
        Waiting for your opponent to join the room...
      </h3>
      <h3 className="waiting-room-text">Share this code with your friend:</h3>
      <div className="waiting-room-code">
        {gameService.roomId}
        <IoCopy className="copy-button" onClick={copyRoomID} />
      </div>
    </div>
  );
};
