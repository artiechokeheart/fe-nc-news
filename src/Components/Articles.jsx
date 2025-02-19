import { useEffect, useState } from "react";
import { fetchAllArticles } from "../utils/api";
import { ArticleCard } from "./ArticleCard";
import { useParams } from "react-router-dom";

export const Articles = ({ articles, setArticles }) => {
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
