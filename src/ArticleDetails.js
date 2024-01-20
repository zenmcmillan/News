import React from "react";
import { useParams } from "react-router-dom";
import './ArticleDetails.css';
import { Link } from "react-router-dom";

export default function ArticleDetails({articles, convertDate, showArticles}) {
  const id = useParams().id

  const theArticle = articles.find((element) => element.id === parseInt(id))
 

  if (theArticle) {
    
    let formattedDate = convertDate(theArticle);
    let content = showArticles(theArticle)
   
    return (
      <div className="article-info-container">
        <h3>{theArticle.title}</h3>
        <img src={theArticle.urlToImage} />
        <p>{content}</p>
        <p>{formattedDate}</p>
        <Link to={theArticle.url}>
          <p>{theArticle.url}</p>
        </Link>
        <p>{theArticle.source.name}</p>
      </div>
    );
  }
}