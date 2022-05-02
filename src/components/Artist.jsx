import React, { useState, useEffect } from "react";
import Loading from "./Loading";
import ErrorMessage from "./ErrorMessage";
import { getArtist } from "../services/spotify";
import placeholder from "../assets/placeholder.png";

const Artist = ({ artistId }) => {
  const [loading, setLoading] = useState(true);
  const [artist, setArtist] = useState(null);

  useEffect(() => {
    fetchArtist();
  }, []);

  const fetchArtist = async () => {
    setLoading(true);
    try {
      const { data } = await getArtist(artistId);
      setArtist(data);
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  };

  return (
    <div>
      {loading && <Loading />}
      {!loading && !artist && (
        <ErrorMessage message="Artist details not found." />
      )}
      {artist && (
        <div className="artist-info-wrappper">
          <img
            src={artist?.images[0]?.url || placeholder}
            alt="avatar"
            className="artist-info-img"
          />
          <div className="artist-info-detail">
            <h1 style={{ fontSize: "50px" }}>{artist.name}</h1>
            <p>Genres: {artist.genres.join(", ")}</p>
            <p className="artist-info-stats">
              Popularity: {artist.popularity} - Followers:{" "}
              {artist.followers.total}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Artist;
