import React from "react";
import { useParams } from "react-router-dom";
import './ArticleDetails.css'

export default function ArticleDetails({articles}) {
  const id = useParams().id

  let theArticle = articles.find((element) => element.id === parseInt(id))

  if (theArticle) {
    
    const isoString = theArticle.publishedAt;
    const dateObject = new Date(isoString)

    const format = {month: 'short', day: 'numeric', year: 'numeric'}
    const formattedDate = dateObject.toLocaleString('en-US', format)
    console.log(formattedDate)
   
    return (
      <div className='article-info-container'>
        <h3>{theArticle.title}</h3>
        <img src={theArticle.urlToImage} />
        <p>{theArticle.description}</p>
        <p>{formattedDate}</p>
      </div>
    );
  }
}