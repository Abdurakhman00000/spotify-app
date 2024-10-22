import React from 'react'
import scss from "./HomeSection.module.scss"
import GetAlbum from '../albums/GetAlbum';
import GetArtists from '../artists/GetArtists';

const HomeSection = () => {
  return (
    <section className={scss.SearchSections}>
        <div className="container">
            <div className={scss.content}>
                <div className={scss.components}>
                <GetAlbum/>
                <GetArtists/>
                </div>
            </div>
        </div> 
    </section>
  )
}

export default HomeSection;