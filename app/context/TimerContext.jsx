"use client";
import React, { createContext, useContext, useReducer, useEffect } from "react";

const TimerContext = createContext();

const initialState = {
  minutes: 25, // Initial minutes
  seconds: 0, // Initial seconds
  isRunning: false, // Initial timer state (not running)
};

function timerReducer(state, action) {
  switch (action.type) {
    case "SET_TIMER":
      const minutes = parseInt(action.minutes, 10);
      const seconds = parseInt(action.seconds, 10);

      return {
        ...state,
        minutes: isNaN(minutes) ? 0 : minutes,
        seconds: isNaN(seconds) ? 0 : seconds,
      };
    case "DECREMENT":
      if (state.isRunning) {
        if (state.minutes === 0 && state.seconds === 0) {
          return state; // Don't allow negative values
        }
        if (state.seconds === 0) {
          return { ...state, minutes: state.minutes - 1, seconds: 59 };
        } else {
          return { ...state, seconds: state.seconds - 1 };
        }
      }
      return state;
    case "TOGGLE_TIMER":
      return { ...state, isRunning: !state.isRunning };
    default:
      return state;
  }
}

export function TimerProvider({ children }) {
  const [state, dispatch] = useReducer(timerReducer, initialState);

  // Timer logic to decrement the timer every second
  useEffect(() => {
    let timerInterval;

    if (state.isRunning) {
      timerInterval = setInterval(() => {
        dispatch({ type: "DECREMENT" });
      }, 1000);
    }

    return () => {
      clearInterval(timerInterval);
    };
  }, [state.isRunning]);

  return (
    <TimerContext.Provider
      value={{ timerState: state, timerDispatch: dispatch }}
    >
      {children}
    </TimerContext.Provider>
  );
}

export function useTimer() {
  const context = useContext(TimerContext);
  if (!context) {
    throw new Error("useTimer must be used within a TimerProvider");
  }
  return context;
}
