"use client";

import React from "react";
import scss from "./Playlistid.module.scss";
import PlayList from "../homeSections/PlayList";
import { useParams } from "next/navigation";
import { useGetPlayListByIdQuery } from "@/redux/api/playlist";
import { usePlayerStore } from "@/stores/usePlayerStore";
import { useGetMeQuery } from "@/redux/api/me";

const Playlistid = () => {
  const params = useParams();
  const { data } = useGetPlayListByIdQuery(String(params.playlistid));
  const { data: session } = useGetMeQuery();

  const { setTrackUris, setTrackIndex } = usePlayerStore();

  const playMusic = (index: number, uri: string) => {
    const filterTrackUris = data?.tracks.items.map((item) => item.track.uri);
    setTrackUris(filterTrackUris!);
    setTrackIndex(index);
  };

  const formatDuration = (ms: number) => {
    const minutes = Math.floor(ms / 60000);
    const seconds = Math.floor((ms % 60000) / 1000).toFixed(0);
    return `${minutes}:${seconds.padStart(2, "0")}`; 
  };

  return (
    <section className={scss.PlayListId}>
      <PlayList />
      <div className="container">
        <div className={scss.content}>

          <div className={scss.TopResult}>
            {data?.tracks.items && data.tracks.items[0] && (
              <div className={scss.TopPlaylist}>
                <img
                  width={170}
                  height={170}
                  src={data.tracks.items[0].track.album.images[0].url}
                  alt={data.tracks.items[0].track.album.name}
                />

                <div className={scss.result_info}>
                  <span>Playlist</span>
                  <p>{data.tracks.items[0].track.name}</p>

                  <div className={scss.user_info}>
                    <img
                      width={27}
                      height={27}
                      src={session?.images[1].url}
                      alt={session?.display_name}
                    />
                    <h6>{session?.display_name}</h6>
                  </div>
                </div>
              </div>
            )}
          </div>

          <div className={scss.playlist_tracks}>
            <table className={scss.trackTable}>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Title</th>
                  <th>Album</th>
                  <th>Date added</th>
                  <th>Time</th>
                </tr>
              </thead>
              <tbody>
                {data?.tracks.items.map((item, index) => (
                  <tr key={index} onClick={() => playMusic(index, item.track.uri)}>
                    <td>{index + 1}</td>
                    <td>
                      <img
                        src={item.track.album.images[0].url}
                        alt={item.track.name}
                        width={50}
                        height={50}
                      />
                      <div className={scss.item_text}>
                        <p>{item.track.name}</p>
                        <span>{item.track.artists[0].name}</span>
                      </div>
                    </td>
                    <td>{item.track.album.name}</td>
                    <td>{new Date(item.added_at).toLocaleDateString()}</td>
                    <td>{formatDuration(item.track.duration_ms)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Playlistid;
