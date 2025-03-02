import { TopicsDropDown } from "../Components/TopicsDropDown";
import { SortArticlesDropDown } from "../Components/SortArticlesDropDown";
import { OrderToggle } from "../Components/OrderToggle";
import { useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";

export const FilterContainer = ({ articles, setArticles, setNewFilter }) => {
  const [topics, setTopics] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();

  return (
    <div>
      <TopicsDropDown
        setArticles={setArticles}
        topics={topics}
        setTopics={setTopics}
        setSearchParams={setSearchParams}
        setNewFilter={setNewFilter}
      />
      <SortArticlesDropDown
        setArticles={setArticles}
        setSearchParams={setSearchParams}
      />

      <OrderToggle
        setArticles={setArticles}
        setSearchParams={setSearchParams}
      />
    </div>
  );
};
