import React, { useEffect, useState } from "react";
import { Game } from "../../scenes/game/game";
import socketService from "../../services/socket/socket";
import { JoinRoom } from "../../components/joinRoom/joinRoom";
import "./main.css";

export const Main = () => {
  const [isInRoom, setIsInRoom] = useState(false);

  const connectSocket = async () => {
    await socketService.connect("http://localhost:8000").catch((err) => {
      console.log("Error: ", err);
    });
  };

  useEffect(() => {
    connectSocket();
    console.log("useEffect run");
  }, []);

  return (
    <div className="main-container">
      <h1 className="game-name">SHIFUMI</h1>
      
      {!isInRoom && <JoinRoom setIsInRoom={setIsInRoom} />}
      {isInRoom && <Game setIsInRoom={setIsInRoom} />}
    </div>
  );
};

