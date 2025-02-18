// this function ( ) {

// }
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Articles } from "../Components/Articles";
import { HomePage } from "../Pages/HomePage";
import { ArticlePage } from "../Pages/ArticlePage";
import { useState } from "react";

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
    </Routes>
  );
};
