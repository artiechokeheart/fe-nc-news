import { useEffect, useState } from "react";
import { fetchAllTopics } from "../utils/api";
import { HandleFilter } from "../utils/handleFilter";

export const TopicsDropDown = ({
  setArticles,
  topics,
  setTopics,
  setSearchParams,
}) => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchAllTopics()
      .then((TopicsFromApi) => {
        setTopics(TopicsFromApi);
      })
      .catch((err) => {
        setError(err);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  if (error) {
    return <ErrorComponent message={error.message} />;
  }

  if (isLoading) {
    return <p>Loading...</p>;
  }

  const handleChange = ({}) => {
    const sortDropDown = document.querySelector("#sort");
    const topicDropDown = document.querySelector("#topics");
    const orderDesc = document.querySelector("#desc");
    const sortValue = sortDropDown.value;
    const topicValue = topicDropDown.value;
    let orderValue = "";

    if (orderDesc.checked) {
      orderValue = "desc";
    } else {
      orderValue = "asc";
    }

    HandleFilter({
      topicValue,
      sortValue,
      setArticles,
      setSearchParams,
      orderValue,
    });
  };

  return (
    <>
      <label className="m-4">Select Topic:</label>
      <select name="topics" id="topics" onChange={handleChange}>
        <option className="text-black">All</option>
        {topics.map((topic) => {
          return (
            <option className="text-black" value={topic.slug}>
              {topic.slug}
            </option>
          );
        })}
      </select>
    </>
  );
};
