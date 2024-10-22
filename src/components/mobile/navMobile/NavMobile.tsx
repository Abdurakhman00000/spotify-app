"use client"

import React from 'react'
import scss from "./NavMobile.module.scss"
import { GoHome } from "react-icons/go";
import { CiSearch } from "react-icons/ci";
import { VscLibrary } from "react-icons/vsc";
import { FaSpotify } from "react-icons/fa";
import { useRouter } from 'next/navigation';
import Link from 'next/link';

const NavMobile = () => {
  const router = useRouter();
  const handleHomeClick = () => {
    router.push('/');
  }

  const handleSearchClick = () => {
    router.push('/search');
  }

  const handlePlaylistClick = () => {
    router.push('/playlistForMob');
  }

  return (
    <section className={scss.NavMobile}>
      <div className="container">
        <div className={scss.content}>
          <div onClick={handleHomeClick} className={scss.min_content}>
            <GoHome />
            <p>Home</p>
          </div>
          <div className={scss.min_content}>
            <CiSearch onClick={handleSearchClick}/>
            <p>Search</p>
          </div>
          <div onClick={handlePlaylistClick} className={scss.min_content}>
            <VscLibrary/>
            <p>Playlist</p>
          </div>
          <div className={scss.min_content}>
            <Link href="https://open.spotify.com/download">
            <FaSpotify/>
            </Link>
            <p>Get App</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default NavMobile