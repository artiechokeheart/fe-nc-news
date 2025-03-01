import {
  DeleteArticleComments,
  fetchArticleComments,
  postArticleComments,
} from "../utils/api";
import { useState, useEffect } from "react";
import { ErrorComponent } from "./ErrorComponent";
import { useNavigate } from "react-router-dom";

export const Comments = ({ article_id }) => {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const username = "jessjelly";

  useEffect(() => {
    fetchArticleComments(article_id)
      .then((commentData) => {
        setComments(commentData);
      })
      .catch((err) => {
        setError(err);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [newComment]);

  if (error) {
    return <ErrorComponent message={error.message} />;
  }

  if (isLoading) {
    return <p>Loading...</p>;
  }

  const postComment = (formData, comments, setComments) => {
    setIsLoading(true);
    const query = formData.get("comment_box");

    postArticleComments(article_id, query, username)
      .then((postedComment) => {
        setNewComment(postedComment);
      })
      .catch((err) => {
        setError(err);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const DeleteComment = ({ comment }) => {
    const deleteOnClick = () => {
      setIsLoading(true);
      DeleteArticleComments(comment.comment_id).then((confirmation) => {
        setIsLoading(false);
        setNewComment();
      });
    };

    if (comment.author === username) {
      return (
        <button className="OldButton" onClick={deleteOnClick}>
          delete
        </button>
      );
    }
  };

  const articleComments = comments.map((comment) => {
    return (
      <li key={comment.comment_id}>
        <p className="leading-5">{comment.body}</p>
        <button className="OldButton">{comment.votes} votes</button>
        <DeleteComment comment={comment} />
        {comment.author}

        <hr />
      </li>
    );
  });
  return (
    <ul>
      {error ? (
        <ErrorComponent message={error.message} />
      ) : (
        <form action={postComment}>
          <textarea
            className=" p-10"
            name="comment_box"
            placeholder="Comment here...."
            type="text"
          />
          <button className="OldButton">Post</button>
        </form>
      )}
      {articleComments}
    </ul>
  );
};
