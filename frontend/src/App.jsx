import './App.css';
import React, { useEffect } from 'react';
import { Home } from './pages/home/home';
import { io } from 'socket.io-client';

function App() {

  const connect = () => {
    const socket = io('http://localhost:8000');
    console.log(socket)
  }

  useEffect(() => {
    connect()
  }, []);

  return (
    <div>
      <Home />
    </div>
  );
}

export default App;
