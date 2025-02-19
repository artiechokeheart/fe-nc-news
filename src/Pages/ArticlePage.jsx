import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchArticlesByArticleId, fetchArticleComments } from "../utils/index";
import { Comments } from "../Components/Comments";

export const ArticlePage = ({ articles, setArticles }) => {
  const { article_id } = useParams();
  const [article, setArticle] = useState({});
  const [comments, setComments] = useState([]);
  useEffect(() => {
    fetchArticlesByArticleId(article_id).then((articleData) => {
      setArticle(articleData);
    });
    fetchArticleComments(article_id).then((commentData) => {
      setComments(commentData);
    });
  }, [article_id]);

  return (
    <article>
      <h2 className="text-lg font-bold m-3">{article.title}</h2>
      <div className=" m-4">
        <img
          className="aspect-ratio: auto object-contain"
          src={article.article_img_url}
        />
        <div className=""> Topic: {article.topic}</div>
        <div>Votes: {article.votes}</div>
        <div>Comments: {article.comment_count}</div>
        <br />
      </div>
      <div>
        <h3 className="text-lg">Comments</h3>
        <ul
          className="comments"
          key={comments.comment_id}
          id={comments.comment_id}
        >
          <Comments comments={comments} />
        </ul>
      </div>
    </article>
  );
};
