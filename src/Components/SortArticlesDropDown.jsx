import { useEffect, useState } from "react";
import { fetchAllArticles, fetchAllTopics } from "../utils/api";
import { createSearchParams, Link, useParams } from "react-router-dom";
import { useSearchParams } from "react-router-dom";
import { TopicsDropDown } from "./TopicsDropDown";
import { HandleFilter } from "../utils/handleFilter";

export const SortArticlesDropDown = ({ articles, setArticles }) => {
  const [order, setOrder] = useState("");
  let [searchParams, setSearchParams] = useSearchParams();

  const handleChange = ({ target }) => {
    const sortDropDown = document.querySelector("#sort");
    const topicDropDown = document.querySelector("#topics");
    const sortValue = sortDropDown.value;
    const topicValue = topicDropDown.value;
    const orderValue = target.value;

    HandleFilter(
      topicValue,
      sortValue,
      orderValue,
      setArticles,
      setSearchParams
    );
  };

  return (
    <>
      <label className="p-2">Sort_by:</label>
      <select name="sort" id="sort" onChange={handleChange}>
        <option>date</option>
        <option>comments</option>
        <option>votes</option>
      </select>
      <input
        type="radio"
        name="orderRadio"
        value="desc"
        id="desc"
        defaultChecked="desc"
        onChange={(e) => {
          handleChange(e);
        }}
      />
      Descending
      <input
        type="radio"
        name="orderRadio"
        value="asc"
        id="asc"
        onChange={(e) => {
          handleChange(e);
        }}
      />
      Ascending
    </>
  );
};
