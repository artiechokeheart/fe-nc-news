import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Comments } from "../Components/Comments";
import { ArticleVoting } from "../Components/ArticleVoting";
import { fetchArticleComments, fetchArticlesByArticleId } from "../utils/api";

export const ArticlePage = () => {
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
      <div className="inline m-4">
        <img
          className="float-start size-75 md:w-100 m-4"
          src={article.article_img_url}
        />
        <p className="">{article.body}</p>
      </div>
      <div className="float-center">
        Topic: {article.topic}
        <ArticleVoting article={article} />
      </div>
      <br />
      <div className="inline-grid">
        <br />
        <h3 className="text-lg">Comments</h3>
        <Comments comments={comments} />
      </div>
    </article>
  );
};
