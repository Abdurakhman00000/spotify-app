"use client"

import React from 'react'
import scss from "./PlaylistMob.module.scss"
import { useGetMeQuery } from '@/redux/api/me'
import { useGetPlayListQuery } from '@/redux/api/playlist';
import { useRouter } from 'next/navigation';
import { VscLibrary } from "react-icons/vsc";
import { FaPlus } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa6";

const PlaylistMob = () => {
    const {data: session} = useGetMeQuery();
    const {data} = useGetPlayListQuery();
    const router = useRouter();
  return (
    <section className={scss.PlayListMob}>
        <div className="container">
            <div className={scss.content}>
            <div className={scss.playlist_library}>
						<div className={scss.block1}>
							<VscLibrary/>
							<p>Your Library</p>
						</div>
						<div className={scss.block2}>
							<FaPlus/>
							<FaArrowRight />
						</div>
					</div>

                    <div className={scss.playlist_items}>
						{
							data?.items.map((item, index) => (
								<div key={index} onClick={() => router.push(`/playlist/${item.id}`)}>
									<div className={scss.block_playlists}>
									<img src={item.images[0].url} alt="" />
									<div className={scss.playlists_info}>
									<h1>{item.name}</h1>
									<p>Playlist : {session?.display_name}</p>
									</div>
									</div>
								</div>
							))
						}
					</div>
            </div>
        </div>
    </section>
  )
}

export default PlaylistMob