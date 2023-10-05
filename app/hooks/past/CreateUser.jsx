import React from "react";
import { useState, useEffect } from "react";

const CreateUser = (accessToken, spotifyApi) => {
  const [userID, setUserID] = useState();
  const [displayName, setDisplayName] = useState();

  useEffect(() => {
    if (!accessToken) return;
    // set access token, playlists to choose from
    spotifyApi.setAccessToken(accessToken);

    // Get the authenticated user & setUserID
    spotifyApi.getMe().then(
      function (data) {
        console.log("Some information about the authenticated user", data.body);
        // unnessessary I think because it defaults to logged in user if none is specified
        console.log(data.body);
        setDisplayName(data.body.display_name);
        setUserID(data.body.id);
      },
      function (err) {
        console.log("Something went wrong!", err);
      }
    );
  }, [accessToken]);
  return { userID, displayName };
};

export default CreateUser;
