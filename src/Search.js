import React from "react";
import "./Search.css";
import { useState } from  "react";

export default function Search({articles, setArticles}) {
  const [value, setValue] = useState("");

  const onChange = (event) => {
    setValue(event.target.value);
  }

  const searchArticle = (value) => {
    console.log("VALUE", value)
  let filtered = articles.filter(element => element.title.includes(value))
   setArticles(filtered)
}

const onSearch = (value) => {
  console.log("SEARCH", value);
  searchArticle(value);
};
  
  return (
        <div>
          <h2 className="articles-title">Articles</h2>
          <div className="search-box-container">
            <input className="search-box" type="text" value={value} onChange={onChange}/>
            <button onClick={() => onSearch(value)}>Search</button>
          </div>
        </div>
        )
}