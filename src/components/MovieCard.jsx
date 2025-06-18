import React from 'react'
import { TMDB_CDN_IMG_URL } from '../utils/constants'

const MovieCard = ({movie}) => {    

  return (
    <div className='mr-4 z-30 flex cursor-pointer'>
        <img className='w-48' alt="Movie Card" src = {TMDB_CDN_IMG_URL + movie.poster_path} />
    </div>
  )
}

export default MovieCard