import React from "react";

function CreateDefaultList() {
  const defaultList = [
    {
      name: "LoFi",
      playlistID: "4WX5OTb36RgzXqPpRLg4dQ",
      uri: "spotify:playlist:4WX5OTb36RgzXqPpRLg4dQ",
    },
    {
      name: "Jazz for Study",
      playlistID: "37i9dQZF1DX3SiCzCxMDOH",
      uri: "spotify:playlist:37i9dQZF1DX3SiCzCxMDOH",
    },
    {
      name: "Synthwave 80's",
      playlistID: "6ugny356xCmbgwxToBHnEa",
      uri: "spotify:playlist:6ugny356xCmbgwxToBHnEa",
    },
    {
      name: "Not Quite Classical",
      playlistID: "37i9dQZF1DWSw8liJZcPOI",
      uri: "spotify:playlist:37i9dQZF1DWSw8liJZcPOI",
    },
  ];

  return { defaultList };
}

export default CreateDefaultList;
