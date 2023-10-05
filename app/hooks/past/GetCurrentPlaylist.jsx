import React from "react";

function GetCurrentPlaylist(playlistID) {
  const getPlaylistFromID = async (defaultList) => {
    try {
      const response = spotifyApi.getPlaylist("4WX5OTb36RgzXqPpRLg4dQ");
    } catch (err) {
      console.log(err);
    }
  };
  spotifyApi.getPlaylist("4WX5OTb36RgzXqPpRLg4dQ").then(
    function (data) {
      console.log("Some information about this playlist", data.body);
      console.log(data.body.description);
      // playlists.push({name: data.body.name, description: data.body.description})
    },
    function (err) {
      console.log("Something went wrong!", err);
    }
  );
  return <div>GetCurrentPlaylist</div>;
}

export default GetCurrentPlaylist;
