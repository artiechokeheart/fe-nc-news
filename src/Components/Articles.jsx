import { useEffect, useState } from "react";
import { fetchAllArticles } from "../utils";
import { ArticleCard } from "./ArticleCard";

export const Articles = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    fetchAllArticles().then((articlesFromApi) => {
      setArticles(articlesFromApi);
    });
  }, []);

  return (
    <ul className="columns-1">
      {articles.map((article) => (
        <ArticleCard
          key={article.article_id}
          id={article.artilce_id}
          article={article}
        />
      ))}
    </ul>
  );
};
