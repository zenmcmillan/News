import React from "react";
import { useParams } from "react-router-dom";

export default function ArticleDetails({articles}) {
  const id = useParams().id

  let theArticle = articles.find((element) => element.id === parseInt(id))

  console.log("ARTICLE 1", theArticle);
   

  if (theArticle) {
    return (
      <div className='article-info-container'>
        <h3>{theArticle.title}</h3>
        <p>{theArticle.description}</p>

      </div>
    );
  }
}