import React from "react";
import styled from "styled-components";
import { BsFillPlayFill, BsFillPauseFill } from "react-icons/bs";
function TimerControls({ isRunning, handleStart, handlePause, handleReset }) {
  return (
    <StyledTimerControls>
      {!isRunning ? (
        <div className="start" onClick={handleStart} disabled={isRunning}>
          <BsFillPlayFill />
        </div>
      ) : (
        <div className="pause" onClick={handlePause}>
          <BsFillPauseFill />
        </div>
      )}
    </StyledTimerControls>
  );
}

export default TimerControls;

const StyledTimerControls = styled.section`
  margin-left: auto;
  margin-right: auto;

  .start,
  .pause {
    display: grid;
    justify-content: center;
    align-items: center;
    background-color: #222222;
    border-radius: 14px;
    font-size: 55px;
    width: 80px;
    height: 56px;
    color: white;
    cursor: pointer;
  }
`;
