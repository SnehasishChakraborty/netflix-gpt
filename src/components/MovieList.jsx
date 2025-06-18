import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  return (
    <div className="w-screen px-12">
      <p className="text-white text-2xl py-4">{title}</p>
      <div className="overflow-x-scroll">
        <div className="flex w-max">
          {movies?.map((movie) => <MovieCard key={movie.id} movie={movie} />)}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
