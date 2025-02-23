import { Articles } from "../Components/Articles";
import { SortArticlesDropDown } from "../Components/SortArticlesDropDown";
import { TopicsDropDown } from "../Components/TopicsDropDown";
import { FilterContainer } from "../Containers/FilterContainer";
import { useEffect, useState } from "react";
import { fetchAllArticles } from "../utils/api";
import { useSearchParams } from "react-router-dom";

export const HomePage = ({ articles, setArticles }) => {
  const [currentFilter, setNewFilter] = useState("");
  // const [searchParams, setSearchParams] = useSearchParams();

  //  console.log(searchParams, "searchParams in homepage");

  useEffect(() => {
    fetchAllArticles().then((articlesFromApi) => {
      setArticles(articlesFromApi);
    });
  }, []);

  return (
    <>
      <FilterContainer
        articles={articles}
        setArticles={setArticles}
        setNewFilter={setNewFilter}
      />
      <Articles articles={articles} setArticles={setArticles} />
    </>
  );
};
