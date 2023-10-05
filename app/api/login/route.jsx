import { NextResponse, NextRequest } from "next/server";
const SpotifyWebApi = require("spotify-web-api-node");

export async function POST(request) {
  try {
    const code = req.body.code;
    const spotifyApi = new SpotifyWebApi({
      redirectUri: "http://localhost:3000",
      clientId: process.env.SPOTIFY_CLIENT_ID,
      clientSecret: process.env.SPOTIFY_CLIENT_SECRET,
    });

    const data = await spotifyApi.authorizationCodeGrant(code);

    return NextResponse.json({
      accessToken: data.body.access_token,
      refreshToken: data.body.refresh_token,
      expiresIn: data.body.expires_in,
    });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: "An error occurred" }, { status: 400 });
  }
}

export function GET() {
  return NextResponse.json({
    hello: "Hello Friend",
    env: process.env.SPOTIFY_CLIENT_ID,
  });
}
