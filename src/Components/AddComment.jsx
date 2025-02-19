import { useState } from "react";

export const AddComment = () => {
  const [newComment, setNewcomment] = useState("");

  const postComment = (formData) => {
    "use server";
    console.log(formData.entries);
  };
  return (
    <form className="" action={postComment}>
      <textarea
        className="bg-zinc-500 p-10"
        name="comment_box"
        placeholder="Comment here...."
        type="text"
      />
      <input
        type="submit"
        value="Post comment"
        onClick={postComment}
        className="float bg-transparent hover:bg-zinc-600 text-zinc-200 font-semibold hover:text-white py-1 px-4 border border-zinc-500 hover:border-transparent rounded m-3"
      />
    </form>
  );
};
