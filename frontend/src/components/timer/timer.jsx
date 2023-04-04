import React, { useEffect } from "react";

export const Timer = ({ timeOver, seconds, setSeconds }) => {
  
  const handleTime = () => {
    if (seconds > 0) {
      setTimeout(() => setSeconds(seconds - 1), 1000);
    }
    if (seconds === 0) {
      timeOver();
    }
  };

  useEffect(() => {
    handleTime();
  }, [seconds]);

  return (
    <div>{seconds === 0 ? "Time is up!" : `Seconds remaining: ${seconds}`}</div>
  );
};
