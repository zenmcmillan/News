import React from "react";
import Card from './Card.js';
import './ArticlesContainer.css';
import { Link } from "react-router-dom";

export default function ArticlesContainer({articles, convertDate}) {

console.log(articles)
  const articleInfo = articles.map(article => {

    let date = convertDate(article)
    
    return (
        <Card 
        title={article.title} 
        id={article.id} 
        image={article.urlToImage} 
        description={article.description} 
        date={date} />
    );
  })

  return (
    <div className='articles-container'>
      {articleInfo}
    </div>
  )
}