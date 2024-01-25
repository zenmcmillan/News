import React, { useState, useEffect } from "react";
import "./Search.css";
import { getArticles } from "./apiCalls";

export default function Search({ setArticles, setError }) {
  const [value, setValue] = useState("");
  const [originalArticles, setOriginalArticles] = useState([]);

  const onChange = (event) => {
    setValue(event.target.value);
  };

  useEffect(() => {
    fetchArticles();
  }, []);

  const fetchArticles = () => {
    getArticles()
      .then((data) => {
        let newsData = data.articles.map((obj, index) => ({
          ...obj,
          id: index + 1,
        }));

        setOriginalArticles(newsData);
        setArticles(newsData);
      })
      .catch((error) => {
        if (!Response.ok) {
          setError("There is an error with the server, please try again later");
        }
      });
  };

  const searchArticle = (value) => {
    
    setArticles(originalArticles);

    let filtered = originalArticles.filter((element) => {
      let title = element.title.toLowerCase();
      let search = value.toLowerCase();
      return title.includes(search);
    });

    setArticles(filtered);
  };

  return (
    <div>
      <h2 className="articles-title">Articles</h2>
      <div className="search-box-container">
        <input
          className="search-box"
          type="text"
          value={value}
          onChange={onChange}
        />
        <button onClick={() => searchArticle(value)}>Search</button>
      </div>
    </div>
  );
}
