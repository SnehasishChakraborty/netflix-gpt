import React from 'react'
import Header from './Header'
import VideoTitle from "./VideoTitle"
import VideoBackground from "./VideoBackground"
import { useSelector } from 'react-redux'

const MainContainer = () => {
  const nowPlayingMovies = useSelector(store => store.movies?.nowPlayingMovies);

  if(!nowPlayingMovies) return;

  const randomId = Math.floor(Math.random() * (nowPlayingMovies.length));
  const movie = nowPlayingMovies[5];
  const {title, overview, id} = movie;

  return (
    <div>
      <Header/>
      <VideoTitle title={title} overview={overview}/>
      <VideoBackground movieId={id}/>
    </div>
  )
}

export default MainContainer