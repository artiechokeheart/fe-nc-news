import { useEffect, useState } from "react";
import { fetchAllTopics } from "../utils/api";
import { Link } from "react-router-dom";

export const AllTopicsPage = () => {
  const [topics, setTopics] = useState([]);

  const handleClick = (event) => {
    event.preventDefault;
  };

  useEffect(() => {
    fetchAllTopics().then((TopicsFromApi) => {
      setTopics(TopicsFromApi);
    });
  }, []);

  return (
    <ul className="columns-1">
      {topics.map((topic) => (
        <li>
          <a href={"articles?topic=" + topic.slug} onClick={handleClick}>
            {topic.slug}
          </a>
        </li>
      ))}
    </ul>
  );
};
//key={topic.topic_id} id={topic.artilce_id} topic={topic}
