import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Comments } from "../Components/Comments";
import { ArticleVoting } from "../Components/ArticleVoting";
import { fetchAllArticles } from "../utils/api";

export const TopicPage = (topics) => {
  console.log(topics);

  useEffect(() => {
    fetchAllArticles().then((fetchedTopic) => {
      console.log(fetchedTopic);
      // setTopics(fetchedTopic);
    }, []);
  });
};
