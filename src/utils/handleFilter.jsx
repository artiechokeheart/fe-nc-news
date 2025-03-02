import { fetchAllArticles, fetchAllTopics } from "../utils/api";
import { createSearchParams, useParams } from "react-router-dom";

export const HandleFilter = ({
  topicValue,
  sortValue,
  setArticles,
  setSearchParams,
  orderValue,
}) => {
  if (topicValue === "All") {
    topicValue = undefined;
  }

  const newObject = {};

  if (topicValue) {
    newObject.topic = topicValue;
  }

  newObject.sort_by = sortValue;

  newObject.order = orderValue;

  fetchAllArticles(topicValue, sortValue, orderValue).then(
    (articlesFromApi) => {
      setArticles(articlesFromApi);
      setSearchParams(createSearchParams(newObject));
    }
  );
};
