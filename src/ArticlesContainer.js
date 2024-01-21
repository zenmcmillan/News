import React from "react";
import Card from './Card.js';
import './ArticlesContainer.css';

export default function ArticlesContainer({articles, convertDate, error}) {

console.log(articles)
  const articleInfo = articles.map(article => {

    let date = convertDate(article)
    
    return (
        <Card 
        title={article.title} 
        id={article.id} 
        image={article.urlToImage} 
        description={article.description} 
        date={date} 
        key={article.id}
        />
    );
  })

  return (
  
      <div className="articles">{articleInfo}{!articleInfo.length && <h2 className="server-error">{error}</h2>}</div>

  );
}