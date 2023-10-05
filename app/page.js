"use client";
import styled from "styled-components";
import Timer from "./components/Timer";
import Radio from "./components/Radio";

function Pomodoro() {
  return (
    <div>
      <div className="timerDisplay">
        <Timer />
        <Radio />
      </div>
    </div>
  );
}

export default Pomodoro;
