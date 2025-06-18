import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  const nowPlayingMovies = useSelector(
    (store) => store.movies?.nowPlayingMovies
  );
  const popularMovies = useSelector((store) => store.movies?.popularMovies);
  const topRatedMovies = useSelector((store) => store.movies?.topRatedMovies);
  const upcomingMovies = useSelector((store) => store.movies?.upcomingMovies);

  return (
    <div className="bg-black">
      <div className="-mt-54 relative z-10">
        <MovieList title={"Now Playing"} movies={nowPlayingMovies} />
        <MovieList title={"Top Rated"} movies={topRatedMovies} />
        <MovieList title={"Popular"} movies={popularMovies} />
        <MovieList title={"Upcoming"} movies={upcomingMovies} />
      </div>
    </div>
  );
};

export default SecondaryContainer;
