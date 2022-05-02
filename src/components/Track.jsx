import React from "react";

const Track = ({ track }) => {
  return (
    <div className="track-container">
      <div className="track-title">{track.name}</div>
      <div className="track-album">{track.album.name}</div>
      <div className="track-album-release">{track.album.release_date}</div>
      <div className="track-artists">
        {track.album.artists.map((artist) => artist.name).join(", ")}
      </div>
      <div className="margin-auto-vertical">
        <a
          className="track-link"
          href={track.external_urls.spotify}
          target="_blank"
          rel="noreferrer"
        >
          Listen
        </a>
      </div>
    </div>
  );
};

export default Track;
