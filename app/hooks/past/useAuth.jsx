import React, { useState, useEffect } from "react";
import axios from "axios";
import { redirect } from "react-router-dom";

function useAuth(code) {
  const [accessToken, setAccessToken] = useState();
  const [refreshToken, setRefreshToken] = useState();
  const [expiresIn, setExpiresIn] = useState();

  useEffect(() => {
    // Only execute this effect when 'code' changes
    // needed to prevent infinite refresh at the begining
    if (code) {
      const getToken = async () => {
        try {
          const response = await axios.post("http://localhost:3001/login", {
            code,
          });

          console.log(response.data);
          setAccessToken(response.data.accessToken);
          setRefreshToken(response.data.refreshToken);
          setExpiresIn(response.data.expiresIn);
        } catch (err) {
          console.log(err);
          window.location = "/";
        }
      };
      getToken();
    }
  }, [code]);

  useEffect(() => {
    if (!refreshToken || !expiresIn) return;
    // Only execute this effect when 'refreshToken' or 'expiresIn' changes
    const timeout = setInterval(() => {
      const getRefreshedTokens = async () => {
        try {
          const response = await axios.post("http://localhost:3001/refresh", {
            refreshToken,
          });

          console.log(response.data);
          setAccessToken(response.data.accessToken);
          setExpiresIn(response.data.expiresIn);
        } catch (err) {
          console.log(err);
          // Handle token refresh error if needed
        }
      };
      getRefreshedTokens();
    }, (expiresIn - 60) * 1000);

    // Clear the interval when 'refreshToken' or 'expiresIn' changes or when the component unmounts
    return () => clearInterval(timeout);
  }, [refreshToken, expiresIn]);

  return accessToken;
}

export default useAuth;
