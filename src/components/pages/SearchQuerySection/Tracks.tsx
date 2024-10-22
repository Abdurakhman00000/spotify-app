"use client";
import scss from "./Tracks.module.scss";
import { useParams } from "next/navigation";
import { useSearchTracksQuery } from "@/redux/api/search";
import { AwaitedReactNode, JSXElementConstructor, ReactElement, ReactNode, useEffect } from "react";
import axios from "axios";
import PlayList from "../homeSections/PlayList";
import { usePlayerStore } from "@/stores/usePlayerStore";

const Tracks = () => {
  const { searchQuery } = useParams();
  const decodeUri = decodeURIComponent(String(searchQuery));
  const { data } = useSearchTracksQuery(decodeUri);

  const setAccessToken = usePlayerStore((state) => state.setAccessToken);
  const setTrackUris = usePlayerStore((state) => state.setTrackUris);
  const setTrackIndex = usePlayerStore((state) => state.setTrackIndex);

  const fetchAccessToken = async () => {
    try {
        const { data } = await axios.get("/api/auth/get-access-token");
        setAccessToken(data);
    } catch (error) {
        console.error("Failed to fetch access token:", error);
    }
};

  
   const updateTrackUris = () => {
    if (data && data.tracks && data.tracks.items) {
        const uris = data.tracks.items.map((item: { uri: any; }) => item.uri);
        setTrackUris(uris);
    } else {
        setTrackUris([]);
    }
};
  
   useEffect(() => {
    fetchAccessToken();
   }, []);
  
   useEffect(() => {
    updateTrackUris();
   }, [data]);

  return (
    <section className={scss.Tracks}>
      <PlayList/>
    <div className="container">
      <div className={scss.content}>
        {/* Блок для отображения топового результата */}
        <div className={scss.TopResult}>
          <h2>Top result</h2>
          {data?.tracks?.items && data.tracks.items[0] && (
            <div className={scss.topTrack} onClick={() => setTrackIndex(0)}>
              <img
                width={100}
                height={100}
                src={data.tracks.items[0].album.images[0].url}
                alt={data.tracks.items[0].name}
              />
              <h1>{data.tracks.items[0].name}</h1>
              <p>{data.tracks.items[0].artists[0].name}</p>
            </div>
          )}
        </div>
  
        <div className={scss.Songs}>
          <h2>Songs</h2>
          {data?.tracks?.items && data.tracks.items.slice(1, 5).map((item: { album: { images: { url: string | undefined; }[]; }; name: string | number | bigint | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | Promise<AwaitedReactNode> | null | undefined; }, index: number) => (
            <div
              key={index + 1}
              className={scss.track}
              onClick={() => setTrackIndex(index + 1)}
            >
              <img
                width={40}
                height={40}
                src={item.album.images[0].url}
              />
              <h1>{item.name}</h1>
            </div>
          ))}
        </div>
      </div>
    </div> 
  </section>
  

  
  );
};

export default Tracks;
