import { useState } from "react";
import { postArticleComments } from "../utils/api";
import { useParams } from "react-router-dom";

export const AddComment = () => {
  const { article_id } = useParams();
  const [newComment, setNewcomment] = useState("");

  // useEffect(() => {}, []);

  const postComment = (formData) => {
    const query = formData.get("comment_box");
    postArticleComments(article_id, query).then((postedComment) => {
      setNewcomment((newComment) => [postedComment]);
    });
  };
  return (
    <form className="" action={postComment}>
      <textarea
        className="bg-zinc-500 p-10"
        name="comment_box"
        placeholder="Comment here...."
        type="text"
      />
      <button type="submit">Post</button>
    </form>
  );
};

{
  /* <input
  type="submit"
  value="Post comment"
  onClick={postComment}
  className="float bg-transparent hover:bg-zinc-600 text-zinc-200 font-semibold hover:text-white py-1 px-4 border border-zinc-500 hover:border-transparent rounded m-3"
/> */
}
