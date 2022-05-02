import http from "./http";
import spotify from "../config/spotify-api";

export const search = async (searchText) => {
  const searchTypes = "artist";
  const searchUrl = `${spotify.apiBaseUrl}/search?type=${searchTypes}&q=${
    searchText || "a"
  }`;

  return http.get(searchUrl);
};

export const getArtist = async (artistId) => {
  return http.get(`${spotify.apiBaseUrl}/artists/${artistId}`);
};

export const getArtistTracks = async (artistId) => {
  return http.get(
    `${spotify.apiBaseUrl}/artists/${artistId}/top-tracks?market=US`
  );
};

export const getArtistAlbums = async (artistId) => {
  return http.get(`${spotify.apiBaseUrl}/artists/${artistId}/albums`);
};
