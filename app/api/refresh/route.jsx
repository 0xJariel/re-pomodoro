import { NextResponse, NextRequest } from "next/server";
import SpotifyWebApi from "spotify-web-api-node";

export async function POST(request) {
  const refreshToken = request.body.refreshToken;
  const spotifyApi = new SpotifyWebApi({
    redirectUri: "http://localhost:5173",
    clientId: process.env.SPOTIFY_CLIENT_ID,
    clientSecret: process.env.SPOTIFY_CLIENT_SECRET,
    refreshToken,
  });

  async function refreshAccessToken() {
    try {
      const data = await spotifyApi.refreshAccessToken();
      console.log(data.body);
      console.log("The access token has been refreshed!");
      // Save the access token so that it's used in future calls
      spotifyApi.setAccessToken(data.body["access_token"]);
      return NextResponse.json({
        accessToken: data.body.access_token,
        expiresIn: data.body.expires_in,
      });
    } catch (err) {
      console.log("Could not refresh access token", err);
      return NextResponse.error("Could not refresh access token", {
        status: 402,
      });
    }
  }

  return refreshAccessToken();
}
