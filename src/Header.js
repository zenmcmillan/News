import React from "react";
import { NavLink} from "react-router-dom";
import "./Header.css";

export default function Header() {
  return (
    <header>
      <h1 className="news-header">News</h1>
      <div className="home">
        <NavLink className="home-link" to="/">
          {" "}
          Home
        </NavLink>
      </div>
    </header>
  );
}