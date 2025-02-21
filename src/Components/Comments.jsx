import {
  DeleteArticleComments,
  fetchArticleComments,
  postArticleComments,
} from "../utils/api";
import { useState, useEffect } from "react";

export const Comments = ({ article_id }) => {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  const username = "jessjelly";

  useEffect(() => {
    fetchArticleComments(article_id)
      .then((commentData) => {
        setComments(commentData);
      })
      .catch((error) => {
        console.log(error, "comments component");
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [newComment]);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  const postComment = (formData, comments, setComments) => {
    setIsLoading(true);
    const query = formData.get("comment_box");
    postArticleComments(article_id, query, username).then((postedComment) => {
      setNewComment(postedComment);
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
        <button
          className="bg-transparent hover:bg-zinc-600 text-zinc-200 font-semibold hover:text-white py-1 px-4 border border-zinc-500 hover:border-transparent rounded m-3"
          onClick={deleteOnClick}
        >
          delete
        </button>
      );
    }
  };
  const articleComments = comments.map((comment) => {
    return (
      <li key={comment.comment_id}>
        <p className="leading-5">{comment.body}</p>
        <button className="bg-transparent hover:bg-zinc-600 text-zinc-200 font-semibold hover:text-white py-1 px-4 border border-zinc-500 hover:border-transparent rounded m-3">
          {comment.votes} votes
        </button>
        <DeleteComment comment={comment} />
        {comment.author}

        <hr />
      </li>
    );
  });
  return (
    <ul>
      {articleComments}
      <form className="" action={postComment}>
        <textarea
          className="bg-zinc-500 p-10"
          name="comment_box"
          placeholder="Comment here...."
          type="text"
        />
        <button>Post</button>
      </form>
    </ul>
  );
};
