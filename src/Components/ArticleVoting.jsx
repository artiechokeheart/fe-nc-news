import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchArticleVotes, patchArticle } from "../utils/api";

export const ArticleVoting = () => {
  const { article_id } = useParams();
  const [currentVotes, setVotes] = useState(0);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchArticleVotes(article_id).then((response) => {
      setVotes(response);
    });
  }, []);

  const increaseVote = () => {
    setVotes((currentVotes) => currentVotes + 1);
    setError(null);
    patchArticle(article_id, 1).catch((err) => {
      setVotes((currentVotes) => currentVotes - 1);
      setError("Your vote was not successful. Please try again!");
    });
  };

  const decreaseVote = () => {
    setVotes((currentVotes) => currentVotes - 1);
    setError(null);
    patchArticle(article_id, -1).catch((err) => {
      setVotes((currentVotes) => currentVotes + 1);
      setError("Your vote was not successful. Please try again!");
    });
  };

  return (
    <>
      <h3>Votes</h3>
      <div>{currentVotes}</div>

      <button
        type="button"
        className="text-blue-700 border border-blue-700 hover:bg-blue-700 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:focus:ring-blue-800 dark:hover:bg-blue-500 w-4 h-4 justify-center items-center"
        onClick={increaseVote}
      >
        +
      </button>
      {error ? <p>{error}</p> : null}
      <button
        type="button"
        className="text-blue-700 border border-blue-700 hover:bg-blue-700 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:focus:ring-blue-800 dark:hover:bg-blue-500 w-4 h-4 justify-center items-center"
        onClick={decreaseVote}
      >
        -
      </button>
    </>
  );
};
