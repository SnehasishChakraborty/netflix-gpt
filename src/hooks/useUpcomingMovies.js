import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addUpcomingMovies } from "../utils/moviesSlice";

export const useUpcomingMovies = () => {
    const dispatch = useDispatch();

  const fetchUpcomingMovies = async () => {
    const data = await fetch("https://api.themoviedb.org/3/movie/upcoming?page=1", API_OPTIONS);
    const json = await data.json();
    console.log(json.results);
    dispatch(addUpcomingMovies(json.results));
  };

  useEffect(() => {
    fetchUpcomingMovies();
  }, []);
}