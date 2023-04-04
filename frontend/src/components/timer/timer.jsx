import React, { useState, useEffect } from "react";

export const Timer = ({ timeOver, seconds, setSeconds }) => {
  useEffect(() => {
    if (seconds > 0) {
      setTimeout(() => setSeconds(seconds - 1), 1000);
    }
    if (seconds === 0) {
      timeOver();
    }
  }, [seconds]);

  return (
    <div>{seconds === 0 ? "Time is up!" : `Seconds remaining: ${seconds}`}</div>
  );
};
