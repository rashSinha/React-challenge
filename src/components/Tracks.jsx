import React, { useState, useEffect } from "react";
import Track from "./Track";
import Loading from "./Loading";
import ErrorMessage from "./ErrorMessage";
import { getArtistTracks } from "../services/spotify";

const Tracks = ({ artistId }) => {
  const [loading, setLoading] = useState(true);
  const [tracks, setTracks] = useState([]);

  useEffect(() => {
    fetchTracks();
  }, [artistId]);

  const fetchTracks = async () => {
    setLoading(true);
    setTracks([]);
    try {
      const { data } = await getArtistTracks(artistId);
      setTracks(data.tracks);
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  };

  return (
    <>
      <h1 className="section-title" style={{ margin: "50px 0 20px 0" }}>
        Top tracks
      </h1>
      <div style={{ marginBottom: "50px" }}>
        {loading && <Loading />}
        {!loading &&
          tracks.length > 0 &&
          tracks.map((track) => <Track key={track.id} track={track} />)}
        {!loading && tracks.length === 0 && (
          <ErrorMessage message="No track found." />
        )}
      </div>
    </>
  );
};

export default Tracks;
