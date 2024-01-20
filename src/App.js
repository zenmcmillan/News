import './App.css';
import { useState, useEffect } from 'react';
import { getArticles } from './apiCalls';
import ArticlesContainer from './ArticlesContainer';
import ArticleDetails from "./ArticleDetails";
import { Routes, Route, useNavigate, NavLink } from 'react-router-dom';

function App() {
  const [articles, setArticles] = useState([]);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  function showArticles(article) {
      let content = article.content.split(" ").reverse().splice(2);
      return content.reverse().join(" ");
    }

  function convertDate(theArticle) {
    const isoString = theArticle.publishedAt;
    const dateObject = new Date(isoString);
    const format = { month: "short", day: "numeric", year: "numeric" };
    const formattedDate = dateObject.toLocaleString("en-US", format);
    return formattedDate
  }

  useEffect(() => {
    fetchArticles()
  }, [])

  const fetchArticles = () => {
    getArticles()
    .then((data) => {
      let newsData = data.articles.map((obj, index) => ({...obj, id: index + 1}))
    setArticles(newsData)
    }).catch((error) => {
      setError("There is an error with the server please try again later")
    })
  }

  const onHomePage = window.location.pathname === '/';

  return (
    <main>
        <h1 className="news-header">News</h1>
        <div className='home'>
          <NavLink className='home-link' to="/"> Home</NavLink>
        </div>
        
      {onHomePage && (
        <div>
          <h2 className="articles-title">Articles</h2>
          <div className="search-box-container">
            <input className="search-box" />
          </div>
        </div>
      )}
      <Routes>
        <Route path="/" element={<ArticlesContainer articles={articles} convertDate={convertDate} />} />
        <Route path="/:id" element={<ArticleDetails articles={articles} convertDate={convertDate} showArticles={showArticles}/>} />
      </Routes>
    </main>
  );
}

export default App;
