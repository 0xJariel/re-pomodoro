import React from "react";
import styled from "styled-components";
import tomato from "../assets/imgs/tomato.png";
import leaf from "../assets/imgs/leaf.png";

function PomodoroMessage({ minutes, seconds }) {
  return (
    <StyledMessage>
      <div className="img">
        {minutes !== 0 || seconds !== 0 ? (
          <img
            src={leaf}
            alt="tomato leaf"
            style={{ maxWidth: "50px", height: "auto" }}
          />
        ) : (
          <img
            src={tomato}
            alt="tomato leaf"
            style={{ maxWidth: "100px", height: "auto" }}
          />
        )}
      </div>
      <div className="motivation">
        {minutes !== 0 || seconds !== 0 ? (
          <div className="start">Grow a tomato!</div>
        ) : (
          <div className="end">
            Congrats!! You focused for 25 minutes and grew a tomato!
          </div>
        )}
      </div>
    </StyledMessage>
  );
}

export default PomodoroMessage;

const StyledMessage = styled.section`
  justify-self: center;
  padding-top: 15px;
  padding-bottom: 25px;

  .img {
    margin-left: auto;
    margin-right: auto;
    display: flex;
    justify-content: center;

    /* background-color: rebeccapurple; */
  }
  .start {
    font-size: 18px;
    max-width: 180px;
    text-align: center;
  }
  .end {
    font-size: 18px;
    max-width: 220px;
    text-align: center;
  }

  .img {
  }
`;
