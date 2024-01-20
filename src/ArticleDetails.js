import React from "react";
import { useParams } from "react-router-dom";

export default function ArticleDetails({articles}) {
  const id = useParams().id
console.log("id", id)
  let theArticle = articles.filter((element) => element.id === id)

  console.log("ARTICLE 1", theArticle);

  if (theArticle) {
    return (
      <div>
        <h3>{theArticle.title}</h3>
        <p>{theArticle.description}</p>
        
      </div>
    );
  }
}