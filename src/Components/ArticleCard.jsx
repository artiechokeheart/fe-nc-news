import { Link } from "react-router-dom";

export const ArticleCard = ({ article }) => {
  return (
    <li key={article.article_id}>
      <h3 className="top-0 left-0 font-extrabold text-lg">
        <Link to={"/articles/" + article.article_id}>{article.title}</Link>
      </h3>
      <br />
      <img
        className="h-48 w-96 aspect-square object-contain"
        src={article.article_img_url}
      />
      <div className="inline-grid grid-cols-3 gap-4">
        <div> Topic: {article.topic}</div>
        <div>Votes: {article.votes}</div>
        <div>Comments: {article.comment_count}</div>
        <br />
      </div>
      <hr></hr>
    </li>
  );
};
