import React from "react";

const GameContext = React.createContext({
  isInRoom: false,
  setIsInRoom: () => {},
});

export default GameContext;
