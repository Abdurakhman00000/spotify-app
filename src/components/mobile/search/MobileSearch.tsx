'use client'
import React from 'react'
import { DebounceInput } from 'react-debounce-input'
import { useSearchStoreMobile } from '@/stores/useSearchStoreMobile';
import scss from "./MobileSearch.module.scss"

const MobileSearch = () => {
  const { setSearchQuery } = useSearchStoreMobile();  

  return (
    <div className={scss.search}>
        <div className="container">
        <div className={scss.content}>
        <DebounceInput
          placeholder="What do you want to listen to?"
          minLength={2}
          debounceTimeout={300}
          onChange={(event) => setSearchQuery(event.target.value)}
        />
      </div>
        </div>
    </div>
  )
}

export default MobileSearch;
