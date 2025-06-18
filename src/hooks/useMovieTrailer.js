import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addMovieTrailer } from "../utils/moviesSlice";
import { useEffect } from "react";

export const useMovieTrailer = (movieId) => {
  const dispatch = useDispatch();

  const fetchMovieTrailer = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/" + movieId + "/videos",
      API_OPTIONS
    );
    const json = await data.json();

    const trailer = json.results.filter((video) => video.type === "Trailer");
    console.log(trailer)
    dispatch(addMovieTrailer(trailer[0]));
  };

  useEffect(() => {
    fetchMovieTrailer();
  }, [movieId]);
};
