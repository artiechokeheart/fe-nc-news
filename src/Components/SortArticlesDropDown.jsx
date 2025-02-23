import { useEffect, useState } from "react";
import { fetchAllArticles, fetchAllTopics } from "../utils/api";
import { createSearchParams, Link, useParams } from "react-router-dom";
import { useSearchParams } from "react-router-dom";
import { TopicsDropDown } from "./TopicsDropDown";
import { HandleFilter } from "../utils/handleFilter";
import { OrderToggle } from "./OrderToggle";

export const SortArticlesDropDown = ({ setArticles, setSearchParams }) => {
  const handleChange = ({}) => {
    const sortDropDown = document.querySelector("#sort");
    const orderToggle = "desc" || order;
    const topicDropDown = document.querySelector("#topics");
    const sortValue = sortDropDown.value;
    const orderValue = orderToggle;
    const topicValue = topicDropDown.value;

    HandleFilter({
      topicValue,
      sortValue,
      orderValue,
      setArticles,
      setSearchParams,
    });
  };

  return (
    <>
      <label className="p-2">Sort_by:</label>
      <select name="sort" id="sort" onChange={handleChange}>
        <option>created_at</option>
        <option>comment_count</option>
        <option>votes</option>
      </select>
    </>
  );
};

// export const handleChange = (e, { articles, setArticles, setSearchParams }) => {
//   const sortDropDown = document.querySelector("#sort");
//   const topicDropDown = document.querySelector("#topics");
//   const sortValue = sortDropDown.value;
//   const topicValue = topicDropDown.value;
//   const orderValue = e.target.value;

//   HandleFilter(topicValue, sortValue, orderValue, setArticles, setSearchParams);
// };
