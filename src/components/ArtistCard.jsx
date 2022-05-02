import React from "react";
import { Link } from "react-router-dom";
import placeholder from "../assets/placeholder.png";

const ArtistCard = ({ artist }) => {
  return (
    <Link to={`/detail/${artist.id}`} className="artist-wrapper">
      <div className="artist-card">
        <img
          src={artist?.images[0]?.url || placeholder}
          alt="Avatar"
          style={{ height: 260, width: "100%", borderRadius: "5px" }}
        />
        <h3 className="artist-name">{artist.name}</h3>
        <p className="artist-popularity">
          Popularity: {artist.popularity} - Followers: {artist.followers.total}
        </p>
        <p className="artist-genres">Genres: {artist.genres.join(", ")}</p>
      </div>
    </Link>
  );
};

export default ArtistCard;
