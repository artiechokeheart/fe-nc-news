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
    <article className="Article">
      <h2 className="">{article.title}</h2>
      <div className="">
        <img className="" src={article.article_img_url} />
        <p className="">{article.body}</p>
      </div>
      <div className="">
        Topic: {article.topic}
        {<ArticleVoting article={article} />}
      </div>
      <br />
      <div className="">
        <br />
        <h3 className="">Comments</h3>
        <Comments article_id={article_id} />
      </div>
    </article>
  );
};
