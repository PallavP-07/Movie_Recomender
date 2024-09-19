import React from 'react'
import poster from '../../assets/no-poster.png'
import './style.scss'
function MovieCard() {
  return (
    <>
    <div className='movie_card' >
        <div className='movie_card_poster'>
            <img src={poster} alt='poster'/>
             <p>Action</p>
      
        </div>
        <div className='movie_card_content'>
            <h3>Movie</h3>
            <p>Jan 9, 2024</p>

        </div>

    </div>
    </>
  )
}

export default MovieCard