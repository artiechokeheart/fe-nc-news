import { TopicsDropDown } from "../Components/TopicsDropDown";
import { SortArticlesDropDown } from "../Components/SortArticlesDropDown";
import { OrderToggle } from "../Components/OrderToggle";
import { fetchAllArticles, fetchAllTopics } from "../utils/api";
import {
  createSearchParams,
  Link,
  useParams,
  useSearchParams,
} from "react-router-dom";
import { HandleFilter } from "../utils/handleFilter";
import { useEffect, useState } from "react";

export const FilterContainer = ({ articles, setArticles, setNewFilter }) => {
  const [order, setOrder] = useState("");
  const [topics, setTopics] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();

  return (
    <>
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
        setOrder={setOrder}
      />
    </>
  );
};
