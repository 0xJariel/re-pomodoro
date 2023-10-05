import React, { useEffect, useState } from "react";
import CreateDefaultList from "./CreateDefaultList";

function CreatePlaylistList(accessToken, spotifyApi) {
  const { defaultList } = CreateDefaultList();
  const [playlistList, setPlaylistList] = useState(null);

  useEffect(() => {
    if (!accessToken) return;

    // set access token, playlists to choose from
    spotifyApi.setAccessToken(accessToken);

    spotifyApi.getUserPlaylists().then(
      function (data) {
        const arr = [...defaultList]; // Initialize with the default list
        const playlists = data.body.items;
        playlists.forEach((item) => {
          console.log(item);
          arr.push({
            name: item.name,
            playlistID: item.id,
            playlistUri: item.uri,
          });
        });

        setPlaylistList(arr);
        console.log("Retrieved playlists", data.body);
      },
      function (err) {
        console.log("Something went wrong!", err);
      }
    );
  }, [accessToken]);

  return { playlistList };
}

export default CreatePlaylistList;
