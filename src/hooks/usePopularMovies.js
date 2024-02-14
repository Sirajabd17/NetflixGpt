import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { addPopularMovies } from "../utils/moviesSlice";
import { API_OPTIONS } from "../utils/constants";

const usePopularMovies = () => {
  //fetch data from  TMBD api and update store
  const dispatch = useDispatch();
  const PopularMovies = useSelector((store) => store.movies.PopularMovies);

  const getPopularMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/popular?page=1",
      API_OPTIONS
    );

    const json = await data.json();
    console.log(json);

    dispatch(addPopularMovies(json.results));
  };

  useEffect(() => {
    if (!PopularMovies) getPopularMovies();
  }, []);
};

export default usePopularMovies;
