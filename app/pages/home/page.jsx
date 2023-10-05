import styled from "styled-components";
import DisplayTimer from "../components/DisplayCounter";
import React, { useState, useEffect, useContext } from "react";
import TimerControls from "../components/TimerControls";
import PomodoroMessage from "../components/PomodoroMessage";
import Radio from "../components/Radio";
import Countdown from "../Hooks/Countdown";
import { useOutletContext } from "react-router-dom";

function Pomodoro() {
  const {
    minutes,
    setMinutes,
    seconds,
    setSeconds,
    isRunning,
    handlePause,
    handleStart,
    handleReset,
  } = useOutletContext();

  return (
    <StyledPomodoro>
      <DisplayTimer minutes={minutes} seconds={seconds} />
      <PomodoroMessage minutes={minutes} seconds={seconds} />
      <Radio />
      <TimerControls
        isRunning={isRunning}
        handleStart={handleStart}
        handlePause={handlePause}
        handleReset={handleReset}
      />
    </StyledPomodoro>
  );
}

export default Pomodoro;

const StyledPomodoro = styled.div`
  display: grid;
  margin-left: auto;
  margin-right: auto;
  gap: 16px;
  padding-bottom: 10px;
`;
