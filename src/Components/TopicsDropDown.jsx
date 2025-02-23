import { useEffect, useState } from "react";
import { fetchAllArticles, fetchAllTopics } from "../utils/api";
import { createSearchParams, Link, useParams } from "react-router-dom";
import { useSearchParams } from "react-router-dom";
import { HandleFilter } from "../utils/handleFilter";

export const TopicsDropDown = ({
  setArticles,
  topics,
  setTopics,
  setSearchParams,
}) => {
  useEffect(() => {
    fetchAllTopics().then((TopicsFromApi) => {
      setTopics(TopicsFromApi);
    });
  }, []);

  const handleChange = ({}) => {
    // const sortDropDown = document.querySelector("#sort");
    // const orderToggle = document.querySelector("#order");
    const topicDropDown = document.querySelector("#topics");
    // const sortValue = sortDropDown.value;
    // const orderValue = "desc";
    const topicValue = topicDropDown.value;

    HandleFilter({
      topicValue,
      // sortValue,
      // orderValue,
      setArticles,
      setSearchParams,
    });
  };

  return (
    <>
      <label className="p-2">Select Topic:</label>
      <select name="topics" id="topics" onChange={handleChange}>
        <option className="text-zinc-800">All</option>
        {topics.map((topic) => {
          return (
            <option className="text-zinc-900" value={topic.slug}>
              {topic.slug}
            </option>
          );
        })}
      </select>
    </>
  );
};
//key={topic.topic_id} id={topic.artilce_id} topic={topic}

// const handleChange = () => {
//   const sortDropDown = document.querySelector("#sort");
//   // const orderToggle = document.querySelector("#order");
//   const topicDropDown = document.querySelector("#topics");
//   const sortValue = sortDropDown.value;
//   const orderValue = "desc";
//   const topicValue = topicDropDown.value;

//   HandleFilter(
//     topicValue,
//     sortValue,
//     orderValue,
//     setArticles,
//     setSearchParams
//   );
//};
