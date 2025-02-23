import { useEffect, useState } from "react";
import { fetchAllArticles, fetchAllTopics } from "../utils/api";
import { createSearchParams, useParams } from "react-router-dom";
import { useSearchParams } from "react-router-dom";

export const HandleFilter = ({
  topicValue,
  sortValue,
  orderValue,
  setArticles,
  setSearchParams,
}) => {
  if (topicValue === "All") {
    topicValue = undefined;
  }
  // if (!orderValue) {
  //   orderValue = "desc";
  // }

  const newObject = {};

  console.log(topicValue, sortValue, orderValue, "<< handleFilter before ifs");

  if (topicValue) {
    newObject.topic = topicValue;
  }

  newObject.sort_by = sortValue;
  // if (orderValue) {
  //   newObject.order = orderValue;
  // }

  if (topicValue === "undefined") {
    fetchAllArticles().then((articlesFromApi) => {
      setArticles(articlesFromApi);
      setSearchParams(createSearchParams(newObject));
    });
  } else {
    fetchAllArticles(topicValue, sortValue).then((articlesFromApi) => {
      setArticles(articlesFromApi);
      setSearchParams(createSearchParams(newObject));
    });
  }
  //setNewFilter("updated");
};
