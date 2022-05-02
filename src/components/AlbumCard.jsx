import React from "react";
import placeholder from "../assets/placeholder.png";

const AlbumCard = ({ album }) => {
  return (
    <div className="album-card">
      <img
        src={album?.images[0]?.url || placeholder}
        alt="Avatar"
        style={{ height: 200, width: "100%", borderRadius: "5px" }}
      />
      <h3 className="album-name">{album.name}</h3>
      <p className="album-release-date">Released on: {album.release_date}</p>
      <p className="album-tracks">Tracks: {album.total_tracks}</p>
      <p className="album-artists">
        Artists: {album.artists.map((artist) => artist.name).join(", ")}
      </p>
    </div>
  );
};

export default AlbumCard;
