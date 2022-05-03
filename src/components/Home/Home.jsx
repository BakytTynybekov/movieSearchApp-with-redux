import React, { useEffect } from "react";
import { MovieList } from "../MovieList/MovieList";
import { useDispatch } from "react-redux";

import {
  fetchAsyncMovies,
  fetchAsyncShows,
} from "../../features/movies/movieSlice";
export const Home = () => {
  const dispatch = useDispatch();

  const movie = "Harry";
  const show = "Friends";

  useEffect(() => {
    dispatch(fetchAsyncMovies(movie));
    dispatch(fetchAsyncShows(show));
  }, [dispatch]);

  return (
    <div className="banner-img">
      <MovieList />
    </div>
  );
};
