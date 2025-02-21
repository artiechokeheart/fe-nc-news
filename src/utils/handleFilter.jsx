import { useEffect, useState } from "react";
import { fetchAllArticles, fetchAllTopics } from "../utils/api";
import { createSearchParams, Link, useParams } from "react-router-dom";
import { useSearchParams } from "react-router-dom";

export const HandleFilter = (
  topicValue,
  sortValue,
  orderValue,
  setArticles,
  setSearchParams
) => {
  //   if (topicValue === "All") {
  //     topicValue = undefined;
  //   }
  //   let orderString = "";
  //   if (orderValue) {
  //     orderString = "desc";
  //   } else {
  //     orderString = "asc";
  //   }
  console.log(orderValue, "HANDLE FILTER FUNC");
  fetchAllArticles(topicValue, sortValue, orderValue).then((result) => {
    setArticles[result];
    const newObject = {};
    if (topicValue) {
      newObject.topic = topicValue;
    }
    if (sortValue) {
      newObject.sort = sortValue;
    }

    if (orderValue) {
      newObject.order = orderValue;
    }
    setSearchParams(createSearchParams(newObject));
  });

  if (topicValue === "All") {
    fetchAllArticles().then((articlesFromApi) => {
      setArticles(articlesFromApi);
      setSearchParams(createSearchParams({}));
    });
  } else {
    fetchAllArticles(topicValue).then((fetchedTopic) => {
      setArticles((articles) => {
        return fetchedTopic;
      });
      setSearchParams(createSearchParams(newObject));
    });
  }
};
