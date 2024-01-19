import React from "react";
import Card from './Card.js'

export default function ArticlesContainer({articles}) {

  let articleInfo = articles.map(article => {
    return <Card title={article.title} />;
  })

  return (
    <div>
      {articleInfo}
    </div>
  )
}