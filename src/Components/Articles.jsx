import { useEffect, useState } from "react";
import { fetchAllArticles } from "../utils";

export const Articles = () => {
  const [currentArticles, setArticles] = useState([]);

  const addArticles = () => {
    setArticles((currentArticles) => {
      return [...currentArticles];
    });
  };

  useEffect(() => {
    fetchAllArticles().then((articles) => {
      addArticles();
    });
  }, []);

  return (
    <ol>
      {currentArticles.map((article) => (
        <li key={article.article_id}>{article.article_title}</li>
      ))}
    </ol>
  );
};
