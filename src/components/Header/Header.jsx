import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import {
  fetchAsyncMovies,
  fetchAsyncShows,
} from "../../features/movies/movieSlice";

import "./header.scss";
export const Header = () => {
  const [searchValue, setSearchValue] = useState("");
  const dispatch = useDispatch();

  const handleSearch = (e) => {
    e.preventDefault();
    dispatch(fetchAsyncMovies(searchValue));
    dispatch(fetchAsyncShows(searchValue));
  };

  return (
    <header className="header">
      <Link to="/">
        <div className="logo">Movie App</div>
      </Link>
      <div className="search-bar">
        <form>
          <input
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            type="text"
            placeholder="Search Movies or Shows"
          />
          <button onClick={(e) => handleSearch(e)}>
            <i className="fa fa-search" type="submit"></i>
          </button>
        </form>
      </div>
      <div className="user-image">
        <i className="fas fa-user"></i>
      </div>
    </header>
  );
};
