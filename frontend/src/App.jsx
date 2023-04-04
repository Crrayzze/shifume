import "./App.css";
import React, { useEffect, useState } from "react";
import { Game } from "./scenes/game/game";
import socketService from "./services/socket/socket";
import { JoinRoom } from "./components/joinRoom/joinRoom";

function App() {
  const [isInRoom, setIsInRoom] = useState(false);

  const connectSocket = async () => {
    await socketService
      .connect("http://localhost:8000")
      .catch((err) => {
        console.log("Error: ", err);
      });
  };

  useEffect(() => {
    connectSocket();
    console.log("useEffect run")
  }, []);

  return (
    <div>
      {!isInRoom && <JoinRoom setIsInRoom={setIsInRoom} />}
      {isInRoom && <Game setIsInRoom={setIsInRoom}/>}
    </div>
  );
}

export default App;
