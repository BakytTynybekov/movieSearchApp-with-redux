import React from "react";
import { Link } from "react-router-dom";

import "./header.scss";
export const Header = () => {
  return (
    <header className="header">
      <Link to="/">
        <div className="logo">Movie App</div>
      </Link>
      <div className="user-image">
        <i className="fas fa-user"></i>
      </div>
    </header>
  );
};
