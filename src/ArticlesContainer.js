import React from "react";
import Card from './Card.js';
import './ArticlesContainer.css';
import { Link } from "react-router-dom";

export default function ArticlesContainer({articles}) {
console.log(articles)
  const articleInfo = articles.map(article => {
    
    return (
      <Link to={`/${article.id}`} key={article.id}>
        <Card title={article.title} id={article.id} image={article.urlToImage} />
      </Link>
    );
  })

  return (
    <div className='articles-container'>
      {articleInfo}
    </div>
  )
}