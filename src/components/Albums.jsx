import React, { useState, useEffect } from "react";
import AlbumCard from "./AlbumCard";
import Loading from "./Loading";
import ErrorMessage from "./ErrorMessage";
import { getArtistAlbums } from "../services/spotify";

const Albums = ({ artistId }) => {
  const [loading, setLoading] = useState(true);
  const [albums, setAlbums] = useState([]);

  useEffect(() => {
    fetchAlbums();
  }, [artistId]);

  const fetchAlbums = async () => {
    setLoading(true);
    setAlbums([]);
    try {
      const { data } = await getArtistAlbums(artistId);
      setAlbums(data.items);
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  };

  return (
    <>
      <h1 className="section-title" style={{ marginTop: "50px" }}>
        Top albums
      </h1>
      <div className="albums-container">
        {loading && <Loading />}
        {!loading &&
          albums.length > 0 &&
          albums.map((album) => <AlbumCard key={album.id} album={album} />)}
        {!loading && albums.length === 0 && (
          <ErrorMessage message="No album found." />
        )}
      </div>
    </>
  );
};

export default Albums;
