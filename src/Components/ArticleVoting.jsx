import { useState } from "react";

export const ArticleVoting = ({ article }) => {
  const [currentVotes, setVotes] = useState(article.votes || 0);

  const incrementVote = (increment) => {
    setVotes((currentVotes) => {
      return currentVotes + increment;
    });
  };

  return (
    <>
      <h3>Votes</h3>
      <div>{currentVotes}</div>

      <button
        type="button"
        className="text-blue-700 border border-blue-700 hover:bg-blue-700 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:focus:ring-blue-800 dark:hover:bg-blue-500 w-4 h-4 justify-center items-center"
        onClick={() => {
          incrementVote(1);
        }}
      >
        +
      </button>
      <button
        type="button"
        className="text-blue-700 border border-blue-700 hover:bg-blue-700 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:focus:ring-blue-800 dark:hover:bg-blue-500 w-4 h-4 justify-center items-center"
        onClick={() => {
          incrementVote(-1);
        }}
      >
        -
      </button>
    </>
  );
};
