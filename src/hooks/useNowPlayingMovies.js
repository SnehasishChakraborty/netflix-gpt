import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { API_OPTIONS, TMDB_NOW_PLAYING_GET_API } from "../utils/constants";
import { addNowPlayingMovies } from "../utils/moviesSlice";

export const useNowPlayingMovies = () => {
    const dispatch = useDispatch()

  const fetchNowPlayingMovies = async () => {
    const data = await fetch(TMDB_NOW_PLAYING_GET_API, API_OPTIONS);
    const json = await data.json();
    console.log(json.results);
    dispatch(addNowPlayingMovies(json.results));
  };

  useEffect(() => {
    fetchNowPlayingMovies();
  }, []);
}