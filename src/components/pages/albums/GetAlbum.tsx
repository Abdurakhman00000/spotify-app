"use client"

import React from 'react'
import scss from "./GetAlbum.module.scss"
import { useGetAlbumQuery } from '@/redux/api/album'

const GetAlbum = () => {
    const { data } = useGetAlbumQuery();
  return (
    <section className={scss.Albums}>
        <div className="container">
            <div className={scss.content}>
                <h1>Albums</h1>
                <div className={scss.mainAlbumItems}>
                {data?.albums.map((album, index) => (
                        <div key={index} className={scss.albumItem}>
                            {album.images && album.images.length > 0 && (
                                <img 
                                    src={album.images[0].url} 
                                    alt={album.name} 
                                />
                            )}
                            <div className={scss.p_container}>
                            <p>{album.name}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </section>
  )
}

export default GetAlbum