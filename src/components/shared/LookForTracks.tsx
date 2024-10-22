'use client'
import React, { useEffect } from 'react'
import scss from "./LookForTracks.module.scss"
import { DebounceInput } from 'react-debounce-input'
import { useRouter } from 'next/navigation'
import { GoHome } from "react-icons/go";
import { CiSearch } from "react-icons/ci";
import { IoIosBrowsers } from "react-icons/io";
import { useSearchTracksQuery } from '@/redux/api/search'
import { useSearchStoreMobile } from '@/stores/useSearchStoreMobile';

const LookForTracks = () => {
    const router = useRouter();  
    const { searchQuery, setSearchQuery } = useSearchStoreMobile();
    const { data } = useSearchTracksQuery(searchQuery, {
      skip: !searchQuery
    })

    console.log(data?.tracks.items) 

    const handlePushToHome = () => {
      router.push('/')
    }

    useEffect(() => {
      if(searchQuery){
        router.push(`/search/${searchQuery}`)
      } else {
        router.push('/search')
      }
    }, [searchQuery, router])

  return (
   <>
   <div className={scss.main_search}>
   <div className={scss.search}>
      <button onClick={handlePushToHome}> <GoHome/> </button>
      <div className={scss.searchWrapper}>
        <CiSearch className={scss.searchIcon} /> 
        <DebounceInput
          placeholder="What do you want to play?"
          minLength={2}
          debounceTimeout={300}
          onChange={(event) => setSearchQuery(event.target.value)} />
        <IoIosBrowsers className={scss.browseIcon}/>
      </div>
    </div>

   </div>
   </>
  )
}

export default LookForTracks
