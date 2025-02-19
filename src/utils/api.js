import axios from "axios";

const newsApi = axios.create({
  baseURL: "https://artemis-be-news.onrender.com/api",
});

export const fetchAllArticles = (article_id) => {
  return newsApi
    .get("/articles/", { params: { article_id } })
    .then(({ data }) => {
      console.log(data);
      return data;
    })
    .catch((error) => {
      // handle error
    });
};

export const fetchArticlesByArticleId = (article_id) => {
  return newsApi.get(`/articles/${article_id}`).then(({ data }) => {
    return data;
  });
};

export const patchArticle = (article, newVotes) => {
  const { article_id } = article;
  return newsApi
    .patch(`/articles/${article_id}`, { inc_votes: newVotes })
    .then((response) => {
      console.log(response.data);
      return response.data;
    })
    .catch((error) => {
      console.log(error, "error in patch");
    });
};

export const fetchArticleComments = (article_id) => {
  return newsApi.get(`/articles/${article_id}/comments`).then(({ data }) => {
    return data;
  });
};
