"use client";
import React, { useState } from "react";
import { useTimer } from "../context/TimerContext";
// Destructure into 4 components: TimerDisplay, TimerButtons, PomodoroMessage, TimerSettings

function Timer() {
  const { timerState, timerDispatch } = useTimer();
  const { minutes, seconds, isRunning } = timerState;

  const toggleTimer = () => {
    timerDispatch({ type: "TOGGLE_TIMER" });
  };

  const handleMinutesChange = (event) => {
    const newMinutes = parseInt(event.target.value, 10);

    if (isRunning) {
      timerDispatch({ type: "TOGGLE_TIMER" });
    }

    timerDispatch({ type: "SET_TIMER", minutes: newMinutes, seconds });
  };

  const handleSecondsChange = (event) => {
    const newSeconds = parseInt(event.target.value, 10);

    if (isRunning) {
      timerDispatch({ type: "TOGGLE_TIMER" });
    }

    timerDispatch({ type: "SET_TIMER", minutes, seconds: newSeconds });
  };

  // Helper function to format a number with a leading zero
  const formatWithLeadingZero = (num) => (num < 10 ? `0${num}` : num);

  return (
    <div>
      <h1>
        Time Remaining: {formatWithLeadingZero(minutes)} :
        {formatWithLeadingZero(seconds)}
      </h1>
      <button onClick={toggleTimer}>
        {isRunning ? "Stop Timer" : "Start Timer"}
      </button>
      <button
        onClick={() =>
          timerDispatch({ type: "SET_TIMER", minutes: 25, seconds: 0 })
        }
      >
        Reset Timer
      </button>
      <div>
        <label>
          Minutes:
          <input
            type="number"
            value={minutes}
            onChange={handleMinutesChange}
            disabled={isRunning}
          />
        </label>
        <label>
          Seconds:
          <input
            type="number"
            value={seconds}
            onChange={handleSecondsChange}
            disabled={isRunning}
          />
        </label>
      </div>
    </div>
  );
}

export default Timer;
