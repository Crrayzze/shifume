import React from "react";
import "./gameInfo.css";

export const GameInfo = ({ userScore, opponentScore }) => {
  return (
    <div className="game-info-container">
      <div className="game-info-vs">
        <div>
          <h1>You</h1>
          <div className="game-info-score your-score">
            {userScore || 0} <span className="game-info-pts">pts</span>
          </div>
        </div>

        <h1>VS</h1>
        <div>
          <h1>Opponent</h1>
          <div className="game-info-score opponent-score">
            {opponentScore || 0} <span className="game-info-pts">pts</span>
          </div>
        </div>
      </div>
      <div></div>
    </div>
  );
};
