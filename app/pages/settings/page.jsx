import React from "react";
import styled from "styled-components";
import { useContext } from "react";
import { useOutletContext } from "react-router-dom";

function Settings() {
  const { minutes, setMinutes, seconds, setSeconds } = useOutletContext();

  return (
    <StyledSettings>
      Set Timer:
      <div className="option">
        Minutes:
        <input
          type="number"
          value={minutes}
          onChange={(e) => setMinutes(e.target.value)}
        />
      </div>
      <div className="option">
        Seconds:
        <input
          type="number"
          value={seconds}
          onChange={(e) => setSeconds(e.target.value)}
        />
      </div>
    </StyledSettings>
  );
}

export default Settings;

const StyledSettings = styled.div`
  padding-top: 20px;
  padding-bottom: 20px;
  display: grid;
  justify-content: center;

  gap: 8px;

  input {
    width: 70px;
  }
`;
