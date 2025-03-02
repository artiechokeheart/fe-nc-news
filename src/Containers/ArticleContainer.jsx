import { Routes, Route } from "react-router-dom";
import { HomePage } from "../Pages/HomePage";
import { ArticlePage } from "../Pages/ArticlePage";
import { useState } from "react";
import { ErrorPage } from "../Pages/ErrorPage";

export const ArticleContainer = () => {
  const [articles, setArticles] = useState([]);

  return (
    <Routes>
      <Route
        path="/"
        element={<HomePage articles={articles} setArticles={setArticles} />}
      />
      <Route
        path="/articles/:article_id"
        element={<ArticlePage articles={articles} setArticles={setArticles} />}
      />
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
};
