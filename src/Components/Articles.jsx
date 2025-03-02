import { useEffect, useState } from "react";
import { fetchAllArticles } from "../utils/api";
import { ArticleCard } from "./ArticleCard";
import { useParams } from "react-router-dom";
import { TopicsDropDown } from "./TopicsDropDown";

export const Articles = ({ articles, setArticles }) => {
  return (
    <div className="ArticleGridContainer">
      <div className="Title">Topic</div>
      <div className="Title">Article Title</div>
      <div className="Title">Votes</div>
      <div className="Title">Comments</div>

      {articles.map((article) => (
        <ArticleCard
          key={article.article_id}
          id={article.artilce_id}
          article={article}
          className="ArticleGridContainer"
        />
      ))}
    </div>
  );
};
