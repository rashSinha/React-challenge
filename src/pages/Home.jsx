import React, { useState, useEffect } from "react";
import Filter from "../components/Filter";
import ArtistCard from "../components/ArtistCard";
import Loading from "../components/Loading";
import ErrorMessage from "../components/ErrorMessage";
import { search } from "../services/spotify";

export const Home = () => {
  const [loading, setLoading] = useState(true);
  const [searchText, setSearchText] = useState("");
  const [artists, setArtists] = useState([]);

  useEffect(() => {
    fetchArtists();
  }, []);

  // fetch artists from Spotify API using search filters
  const fetchArtists = async () => {
    setLoading(true);
    setArtists([]);
    try {
      const { data } = await search(searchText);
      setArtists(data.artists.items);
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  };

  return (
    <div>
      <Filter
        searchText={searchText}
        onTextChange={(e) => {
          setSearchText(e.target.value);
        }}
        onSubmit={fetchArtists}
      />
      {loading && <Loading />}
      {!loading && artists.length > 0 && (
        <>
          <h1 className="section-title">Top artists</h1>
          <div className="artists-container">
            {artists.map((artist) => (
              <ArtistCard key={artist.id} artist={artist} />
            ))}
          </div>
        </>
      )}
      {!loading && artists.length === 0 && (
        <ErrorMessage message="No artist found, try searching for another." />
      )}
    </div>
  );
};

export default Home;
