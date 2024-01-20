import React from "react";
import { useParams } from "react-router-dom";
import './ArticleDetails.css';
import { Link } from "react-router-dom";

export default function ArticleDetails({articles, convertDate}) {
  const id = useParams().id

  let theArticle = articles.find((element) => element.id === parseInt(id))

  if (theArticle) {
    
    let formattedDate = convertDate(theArticle)
   
    return (
      <div className="article-info-container">
        <h3>{theArticle.title}</h3>
        <img src={theArticle.urlToImage} />
        <p>{theArticle.description}</p>
        <p>{formattedDate}</p>
        <Link to={theArticle.url}>
          <p>{theArticle.url}</p>
        </Link>
      </div>
    );
  }
}