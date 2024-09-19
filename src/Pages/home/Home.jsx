import React from 'react'
import HeroBanner from './HeroBanner/HeroBanner'
import Trending from './trending/Trending'
import Popular from './popular/Popular'
import Rated from './rated/rated'
function Home() {
  return (
    <>
    <HeroBanner/>
    <Trending/>
    <Popular/>
    <Rated/>
    </>
    
  )
}

export default Home