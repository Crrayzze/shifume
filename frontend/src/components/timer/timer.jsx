import React, { useEffect } from "react";
import "./timer.css"

export const Timer = ({ timeOver, seconds, setSeconds }) => {
  const handleTime = () => {
    if (seconds > -1) {
      setTimeout(() => setSeconds(seconds - 1), 1000);
    }
    if (seconds === 0) {
      timeOver();
    }
  };

  let fontColor = "green";

  if (seconds === 5) fontColor = "green";
  else if (seconds === 4) fontColor = "yellowgreen";
  else if (seconds === 3) fontColor = "yellow";
  else if (seconds === 2) fontColor = "orange";
  else if (seconds <= 1) fontColor = "red";


  useEffect(() => {
    handleTime();
  }, [seconds]);

  return (
    <div className="timer">
      <h1 style={{ color: fontColor }}>{seconds}</h1>
    </div>
  );
};
