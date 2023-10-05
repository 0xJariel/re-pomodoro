import React, { useEffect, useState } from "react";
import { HiMiniMusicalNote } from "react-icons/hi2";
import { BsFillSkipEndFill } from "react-icons/bs";
import styled from "styled-components";
import { useOutletContext } from "react-router-dom";
import CreatePlaylistList from "../Hooks/CreatePlaylistList";

function Radio() {
  const [isPlaying, setIsPlaying] = useState(false);
  const { accessToken, spotifyApi } = useOutletContext();
  const { playlistList } = CreatePlaylistList(accessToken, spotifyApi);
 
  const [tracks, setTracks] = useState();

  const [playlistID, setPlaylistID] = useState("4WX5OTb36RgzXqPpRLg4dQ");

  const [playlist, setPlaylist] = useState([]);
  const [track, setTrack] = useState();

  useEffect(() => {
    if (!accessToken) return;
    spotifyApi.getPlaylist(playlistID).then(
      function (data) {
        console.log(
          "Some information about this playlist",
          data.body.tracks,
          "set track uri:",
          data.body.tracks.items[0].track.uri
        );
        setPlaylist(data.body.tracks.items);
        setTrack(data.body.tracks.items[0].track.uri);
        // setTracks(data.body.tracks.items);
        // setPlaylistUri(`spotify:playlist:${playlistID}`);
      },
      function (err) {
        console.log("Something went wrong!", err);
      }
    );
  }, [accessToken, playlistID]);

  const togglePlay = () => {
    if (isPlaying) {
      pauseTrack();
    } else {
      playTrack();
    }
  };

  const pauseTrack = () => {
    setIsPlaying(false);
    spotifyApi.pause().then(
      function () {
        console.log("Playback paused");
      },
      function (err) {
        //if the user making the request is non-premium, a 403 FORBIDDEN response code will be returned
        console.log("Something went wrong!", err);
      }
    );
  };

  const playTrack = () => {
    // not restarting at the same spot
    setIsPlaying(true);
    spotifyApi.getMyDevices().then(
      function (data) {
        // Iterate through the devices and choose the appropriate one
        const devices = data.body.devices;
        console.log(data.body.devices);
        console.log(data.body);
        // Select a device based on your criteria or user choice
        console.log(devices);
        const selectedDevice = devices[0]; // Example: choose the first device
        const deviceId = selectedDevice.id;
        // Play a track on the selected device
        spotifyApi.play({
          context_uri: `spotify:playlist:${playlistID}`,
          //   uris: [track],
          device_id: deviceId,
        });
      },
      function (err) {
        console.log("Error getting devices", err);
      }
    );
  };

  const skipToNext = () => {
    spotifyApi.skipToNext().then(
      function (data) {
        console.log("Skip to next");
        console.log(data);
      },
      function (err) {
        //if the user making the request is non-premium, a 403 FORBIDDEN response code will be returned
        console.log("Something went wrong!", err);
      }
    );
  };

  useEffect(() => {}, [playlist]);

  const displayPlaylists = (allPlaylists) => {
    return allPlaylists.map((list, i) => (
      <option key={i} value={list.playlistID}>
        {list.name}
      </option>
    ));
  };

  const handlePlaylistChange = (e) => {
    pauseTrack();
    setPlaylistID(e.target.value);
  };

  return (
    <StyledRadio>
      <div>
        <label htmlFor="playlists">Radio:</label>
        <select id="playlists" name="playlists" onChange={handlePlaylistChange}>
          {playlistList ? (
            displayPlaylists(playlistList)
          ) : (
            <option value="">Log in!</option>
          )}
        </select>
      </div>
      <div
        className={`icon ${isPlaying ? "playing" : "paused"}`}
        onClick={togglePlay}
      >
        <HiMiniMusicalNote />
      </div>
      <div className={`icon`} onClick={skipToNext}>
        <BsFillSkipEndFill />
      </div>
    </StyledRadio>
  );
}

export default Radio;

const StyledRadio = styled.section`
  display: flex;
  justify-self: center;
  align-items: center;
  gap: 6px;

  .icon {
    font-size: 20px;
    display: grid;
    /* background-color: rebeccapurple; */
    align-self: center;
    cursor: pointer;
  }

  #playlists {
    margin-left: 5px;
    max-width: 100px;
  }

  .playing {
    color: #000000; /* Change to the color you want when playing */
  }

  .paused {
    color: #00000051; /* Change to the color you want when paused */
  }
`;
