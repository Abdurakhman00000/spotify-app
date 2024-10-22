"use client"

import React from 'react'
import scss from "./UserProfile.module.scss"
import PlayList from '../homeSections/PlayList'
import { useGetMeQuery } from '@/redux/api/me'

const UserProfileUi = () => {
  const {data: session} = useGetMeQuery();
  return (
    <section className={scss.UserProfile}>
        <PlayList/>
      <div className="container">
        <div className={scss.content}>
          <img src={session?.images[1].url} alt="" />
          <div className={scss.user_info}>
            <p>Profile</p>
          <h1>{session?.display_name}</h1>
          </div>
        </div>
      </div>
    </section>
  )
}

export default UserProfileUi