"use client";
import React from "react";
import styled from "styled-components";
import { FaSpotify } from "react-icons/fa";

function Footer() {
  const AUTH_URL =
    "https://accounts.spotify.com/authorize?client_id=9cae559518c9414eaf7cb90673188a83&response_type=code&redirect_uri=http://localhost:5173&scope=streaming%20user-read-email%20user-read-private%20user-library-read%20user-library-modify%20user-read-playback-state%20user-modify-playback-state";
  return (
    <StyledFooter>
      <div>Login with</div>
      <a href={AUTH_URL}>Spotify</a>
      <div>
        <FaSpotify />
      </div>
    </StyledFooter>
  );
}

export default Footer;

const StyledFooter = styled.footer`
  display: flex;
  gap: 8px;
  padding-bottom: 12px;
  align-self: flex-end;
  justify-self: center;
`;
