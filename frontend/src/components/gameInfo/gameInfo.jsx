import React from "react"
import "./gameInfo.css"

export const GameInfo = ({ userScore, opponentScore }) => {
  return (
    <div className="gameInfo">
      <h1>You VS Opponent</h1>
      <div>Your score: {userScore}</div>
      <div>Opponent score: {opponentScore}</div>
    </div>
  )
}