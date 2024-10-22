import React from 'react'
import MobileSearch from '../mobile/search/MobileSearch'
import GetCategories from './category/GetCategories'

const SearchPage = () => {
  return (
    <section>
      <MobileSearch/>
      <GetCategories/>
    </section>
  ) 
}

export default SearchPage