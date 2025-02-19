import { useState, useEffect } from "react";
import { patchArticle } from "../utils/api";

export const ArticleVoting = ({ article }) => {
  const [currentVotes, setVotes] = useState(article.votes || 0);

  const incrementVote = (increment) => {
    setVotes((currentVotes) => {
      const newVotes = currentVotes + increment;
      return newVotes;
    });
  };

  let votesOnArticle = article.votes;

  const updateArticle = () => {
    patchArticle(article, currentVotes).then((responseFromApi) => {
      console.log(responseFromApi.votes);
      votesOnArticle = responseFromApi.votes;
      return votesOnArticle;
    });
  };

  //need the votes to optimistically render

  return (
    <>
      <h3>Votes</h3>
      <div>{votesOnArticle}</div>

      <button
        type="button"
        className="text-blue-700 border border-blue-700 hover:bg-blue-700 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:focus:ring-blue-800 dark:hover:bg-blue-500 w-4 h-4 justify-center items-center"
        onClick={() => {
          incrementVote(1), updateArticle();
        }}
      >
        +
      </button>
      <button
        type="button"
        className="text-blue-700 border border-blue-700 hover:bg-blue-700 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:focus:ring-blue-800 dark:hover:bg-blue-500 w-4 h-4 justify-center items-center"
        onClick={() => {
          incrementVote(-1), updateArticle();
        }}
      >
        -
      </button>
    </>
  );
};
