import React, { useEffect } from "react";
import "./timer.css";

export const Timer = ({ timeOver, seconds, setSeconds, show }) => {
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
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [seconds]);

  return (
    <div className={"timer " + (show ? "" : "hide")}>
      <h1 style={{ color: fontColor }}>
        {seconds === 0 ? "Time is over!" : `${seconds}`}
      </h1>
    </div>
  );
};
