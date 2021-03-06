import React from "react";
import { useSelector } from "react-redux";
import { getAllMovies, getAllShows } from "../../features/movies/movieSlice";
import { MovieCard } from "../MovieCard/MovieCard";
import "./movie-list.scss";
import Slider from "react-slick";
import { Settings } from "../../common/slick-setting";
export const MovieList = () => {
  const movies = useSelector(getAllMovies);
  const shows = useSelector(getAllShows);

  return (
    <div className="movie-wrapper">
      <div className="movie-list">
        <h2>Movies</h2>
        <div className="movie-container">
          <Slider {...Settings}>
            {movies?.Response === "True" ? (
              movies?.Search?.map((movie, index) => {
                return <MovieCard key={index} data={movie} />;
              })
            ) : (
              <div className="movies-error">
                <h3>{movies?.error}</h3>
              </div>
            )}
          </Slider>
        </div>
      </div>
      <div className="movie-list">
        <h2>Shows</h2>
        <div className="movie-container">
          <Slider {...Settings}>
            {shows?.Response === "True" ? (
              shows?.Search?.map((show, index) => {
                return <MovieCard key={index} data={show} />;
              })
            ) : (
              <div className="movies-error">
                <h3>{shows?.error}</h3>
              </div>
            )}
          </Slider>
        </div>
      </div>
    </div>
  );
};
