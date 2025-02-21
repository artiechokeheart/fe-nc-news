import { useEffect, useState } from "react";
import { fetchAllArticles, fetchAllTopics } from "../utils/api";
import { createSearchParams, Link, useParams } from "react-router-dom";
import { useSearchParams } from "react-router-dom";

export const TopicsDropDown = ({ articles, setArticles }) => {
  const { topic } = useParams();
  const [topics, setTopics] = useState([]);
  let [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    fetchAllTopics().then((TopicsFromApi) => {
      setTopics(TopicsFromApi);
    });
  }, []);

  const handleChange = (event) => {
    const topic = event.target.value;
    if (topic === "All") {
      fetchAllArticles().then((articlesFromApi) => {
        setArticles(articlesFromApi);
        setSearchParams(createSearchParams({}));
      });
    } else {
      fetchAllArticles(topic).then((fetchedTopic) => {
        setArticles((articles) => {
          return fetchedTopic;
        });
        setSearchParams(createSearchParams({ topic: [topic] }));
      });
    }
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
