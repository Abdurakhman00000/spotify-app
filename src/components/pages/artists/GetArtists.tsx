"use client"

import React from 'react'
import scss from "./GetArtists.module.scss";
import { useGetArtistsQuery } from '@/redux/api/artists';

const GetArtists = () => {
    const { data } = useGetArtistsQuery();
  return (
    <section className={scss.Artists}>
        <div className="container">
            <div className={scss.content}>
                <h1>Artists</h1>
                <div className={scss.mainArtistsItem}>
                {
                    data?.artists.map((item, index) => (
                        <div key={index} className={scss.artistItem}>
                            <img src={item.images[0].url} alt="" />

                            <div className={scss.p_container}>
                            <p>{item.name}</p>
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

export default GetArtists