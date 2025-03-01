import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchArticleVotes, patchArticle } from "../utils/api";

export const ArticleVoting = () => {
  const { article_id } = useParams();
  const [currentVotes, setVotes] = useState(0);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchArticleVotes(article_id)
      .then((response) => {
        setVotes(response);
      })
      .catch((err) => {
        setError(err);
      })
      .finally(() => {
        setIsLoading(false);
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

  if (isLoading) {
    return <p>Loading...</p>;
  }

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

      <button type="button" className="OldButton" onClick={increaseVote}>
        +
      </button>
      {error ? <p>{error}</p> : null}
      <button type="button" className="OldButton" onClick={decreaseVote}>
        -
      </button>
    </>
  );
};
