import './App.css';
import { useState, useEffect } from 'react';
import { getArticles } from './apiCalls';
import ArticlesContainer from './ArticlesContainer';

function App() {
  const [articles, setArticles] = useState([]);
  const [error, setError] = useState("")

  useEffect(() => {
    fetchArticles()
  }, [])

  const fetchArticles = () => {
    getArticles()
    .then((data) => {
    setArticles(data.articles)
    }).catch((error) => {
      setError("There is an error with the server please try again later")
    })
  }

  return (
    <main>
      <h1 className="news-header">News</h1>
      <h2 className="articles-title">Articles</h2>
      <div className='search-box-container'>
        <input className="search-box" />
      </div>
      <ArticlesContainer articles={articles} />
    </main>
  );
}

export default App;
