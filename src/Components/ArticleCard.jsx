import { Link } from "react-router-dom";

export const ArticleCard = ({ article }) => {
  return (
    <>
      <div className="GridItem"> {article.topic}</div>
      <div className="GridItem">
        <Link className="Link" to={"/articles/" + article.article_id}>
          {article.title}
        </Link>
      </div>
      <div className="GridItem"> {article.votes}</div>
      <div className="GridItem"> {article.comment_count}</div>
    </>
  );
};
