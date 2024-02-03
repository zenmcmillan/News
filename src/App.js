import './App.css';
import { useState, useEffect } from 'react';
import { getArticles } from './apiCalls';
import ArticlesContainer from './ArticlesContainer';
import ArticleDetails from "./ArticleDetails";
import NotFound from "./NotFound";
import Search from "./Search";
import Header from "./Header"
import { Routes, Route, useNavigate, NavLink, useParams } from 'react-router-dom';

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

  function HandleNotFound() {
    const { id } = useParams();

    if (id >= 1 && id <= 100) {
      return (
        <ArticleDetails
          articles={articles}
          convertDate={convertDate}
          showArticles={showArticles}
        />
      );
    } else {
      return <NotFound />
    }
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
      if (!Response.ok) {
        setError("There is an error with the server please try again later");
      }
    })
  }

   const onHomePage = window.location.pathname === '/';

  return (
    <main>
      <Header />
      {onHomePage && <Search setArticles={setArticles} setError={setError} />}
      <Routes>
        <Route
          path="/"
          element={
            <ArticlesContainer
              articles={articles}
              convertDate={convertDate}
              error={error}
            />
          }
        />
        <Route
          path=":id"
          element={
             < HandleNotFound/>
          }
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </main>
  );
}

export default App;
