import React from "react";
import { useParams } from "react-router-dom";
import Tracks from "../components/Tracks";
import Albums from "../components/Albums";
import ArtistInfo from "../components/ArtistInfo";

export const Detail = () => {
  const params = useParams();
  const artistId = params.id;

  return (
    <div>
      <ArtistInfo artistId={artistId} />
      <Albums artistId={artistId} />
      <Tracks artistId={artistId} />
    </div>
  );
};

export default Detail;
