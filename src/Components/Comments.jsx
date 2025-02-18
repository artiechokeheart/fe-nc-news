export const Comments = ({ comments }) => {
  return comments.map((comment) => {
    return (
      <>
        <p className="leading-5">{comment.body}</p>
        <button className="bg-transparent hover:bg-zinc-600 text-zinc-200 font-semibold hover:text-white py-1 px-4 border border-zinc-500 hover:border-transparent rounded m-3">
          {comment.votes} votes
        </button>

        <hr />
      </>
    );
  });
};
