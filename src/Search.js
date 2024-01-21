import React from "react";
import "./Search.css";

export default function Search() {
  // const onHomePage = window.location.pathname === '/';
  return (

        <div>
          <h2 className="articles-title">Articles</h2>
          <div className="search-box-container">
            <input className="search-box" />
            <button>Search</button>
          </div>
        </div>
        )
}