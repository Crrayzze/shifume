import './App.css';
import React, { useEffect, useState } from 'react';
import { Game } from './scenes/game/game';
import socketService from './services/socket/socket';
import { JoinRoom } from './components/joinRoom/joinRoom';
import GameContext from './context/gameContext';

function App() {

  const [isInRoom, setIsInRoom] = useState(false);

  const connectSocket = async () => {
    const socket = await socketService.connect("http://localhost:8000").catch((err) => {
      console.log("Error: ", err);
    });
  };

  useEffect(() => {
    connectSocket();
  }, []);

  const gameContextValue = {
    isInRoom,
    setIsInRoom
  };

  return (
    <GameContext.Provider value={gameContextValue}>
      {!isInRoom && <JoinRoom />}
      {isInRoom && <Game />}
    </GameContext.Provider>
  );
}

export default App;
