import React from "react";
import "./Search.css";
import { useState } from  "react";

export default function Search({articles, setArticles}) {
  const [value, setValue] = useState("");

  const onChange = (event) => {
    setValue(event.target.value);
  }

  const searchArticle = (value) => {
    let filtered = articles.filter((element) => {
    let title = element.title.toLowerCase();
    let search = value.toLowerCase();
    return title.includes(search);
       
    });
   setArticles(filtered)
}



// const onSearch = (value) => {
//   console.log("SEARCH", value);
//   searchArticle(value);
// };
  
  return (
        <div>
          <h2 className="articles-title">Articles</h2>
          <div className="search-box-container">
            <input className="search-box" type="text" value={value} onChange={onChange}/>
            <button onClick={() => searchArticle(value)}>Search</button>
          </div>
        </div>
        )
}