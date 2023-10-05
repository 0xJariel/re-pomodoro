import React from "react";
import { useState, useEffect } from "react";

function Countdown({ seconds, minutes, setMinutes, setSeconds }) {
  const [isRunning, setIsRunning] = useState(false);

  const decreaseMinute = () => {
    setMinutes(minutes - 1);
  };

  const decreaseSecond = () => {
    setSeconds((prevSeconds) => (prevSeconds === 0 ? 59 : prevSeconds - 1));
  };

  useEffect(() => {
    let countdownInterval;

    if (isRunning) {
      countdownInterval = setInterval(() => {
        console.log(seconds, minutes);
        if (seconds === 0 && minutes === 0) {
          console.log(seconds, minutes);
          handlePause();
          return;
        }
        console.log("interval running");
        decreaseSecond();

        if (seconds === 0 && minutes > 0) {
          decreaseMinute();
        }
      }, 1000);
    }

    return () => {
      clearInterval(countdownInterval); // Clear the interval when the component unmounts
    };
  }, [isRunning, minutes, seconds]);

  const handleStart = () => {
    if (!isRunning) {
      setIsRunning(true);
    }
  };

  const handlePause = () => {
    setIsRunning(false);
  };

  const handleReset = () => {
    setIsRunning(false);
    setMinutes(0);
    setSeconds(5);
  };
  return { isRunning, handlePause, handleReset, handleStart };
}

export default Countdown;
