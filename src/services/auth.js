import { encode } from "base-64";
import qs from "qs";
import http from "./http";
import spotify from "../config/spotify-api";

const authUrl = "https://accounts.spotify.com/api/token";

export const getAccessToken = async () => {
  const authToken = encode(
    `${spotify.clientId}:${spotify.clientSecret}`,
    "utf-8"
  );

  const data = qs.stringify({ grant_type: "client_credentials" });

  return http.post(authUrl, data, {
    headers: {
      Authorization: `Basic ${authToken}`,
      "Content-Type": "application/x-www-form-urlencoded",
    },
  });
};
