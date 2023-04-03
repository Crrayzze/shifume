import './App.css';
import React, { useEffect, useState } from 'react';
import { Home } from './pages/home/home';
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
      <Home />
      <JoinRoom />
    </GameContext.Provider>
  );
}

export default App;
