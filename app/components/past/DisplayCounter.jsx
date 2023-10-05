import React, { useState, useEffect } from "react";
import styled from "styled-components";

function DisplayTimer({ minutes, seconds }) {
  return (
    <StyledDisplayCounter>
      <div>{minutes > 9 ? minutes : `0${minutes}`}</div>
      <div>:</div>
      <div>{seconds > 9 ? seconds : `0${seconds}`}</div>
    </StyledDisplayCounter>
  );
}

export default DisplayTimer;

const StyledDisplayCounter = styled.section`
  display: flex;
  font-size: 65px;
  padding-bottom: 30px;
  justify-content: center;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
`;
