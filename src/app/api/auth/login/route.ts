import { NextResponse } from "next/server";
import querystring from "querystring";

export const GET = async () => {
 const scopes = [
  "playlist-read-private",
  "playlist-read-collaborative",
  "playlist-modify-private",
  "playlist-modify-public",
  "user-read-email",
  "user-read-private",
  "app-remote-control",
  "streaming",
 ].join(" ");

 const clientId = process.env.SPOTIFY_CLIENT_ID;
 const redirectUri = process.env.SPOTIFY_REDIRECT_URI;

 const queryParams = querystring.stringify({
  response_type: "code",
  client_id: clientId,
  scope: scopes,
  redirect_uri: redirectUri,
 });

 const url = `https://accounts.spotify.com/authorize?${queryParams}`;

 return NextResponse.redirect(url);
};