import { Articles } from "../Components/Articles";
import { FilterContainer } from "../Containers/FilterContainer";
import { useEffect, useState } from "react";
import { fetchAllArticles } from "../utils/api";
import { ErrorComponent } from "../Components/ErrorComponent";

export const HomePage = ({ articles, setArticles }) => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchAllArticles()
      .then((articlesFromApi) => {
        setArticles(articlesFromApi);
      })
      .catch((err) => {
        setError(err);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  if (error) {
    return <ErrorComponent message={error.message} />;
  }

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <fragment>
      <FilterContainer articles={articles} setArticles={setArticles} />
      <Articles
        articles={articles}
        setArticles={setArticles}
        className="ArticleGridContainer"
      />
    </fragment>
  );
};
