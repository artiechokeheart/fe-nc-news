import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Comments } from "../Components/Comments";
import { ArticleVoting } from "../Components/ArticleVoting";
import { fetchArticlesByArticleId } from "../utils/api";
import { ErrorComponent } from "../Components/ErrorComponent";

export const ArticlePage = () => {
  const { article_id } = useParams();
  const [article, setArticle] = useState({});
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchArticlesByArticleId(article_id)
      .then((articleData) => {
        setArticle(articleData);
      })
      .catch((err) => {
        setError(err);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [article_id]);

  if (error) {
    return <ErrorComponent message={error.message} />;
  }

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <article className="SingleArticle">
      <h2 className="SingleArticleTitle">{article.title}</h2>
      <div className="SingleArticleTopic">Topic: {article.topic}</div>
      <div className="SingleArticleBody">
        <img
          className="h-auto max-w-lg rounded p-2"
          src={article.article_img_url}
        />
        <p className="p-2">{article.body}</p>
      </div>
      <div className="SingleArticleVotes">
        {<ArticleVoting article={article} />}
      </div>
      <br />
      <div className="SingleArtileComments">
        <br />
        <h3 className="">Comments</h3>
        <Comments article_id={article_id} />
      </div>
    </article>
  );
};
