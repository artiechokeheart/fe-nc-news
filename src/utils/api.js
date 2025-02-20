import axios from "axios";

const newsApi = axios.create({
  baseURL: "https://artemis-be-news.onrender.com/api",
});

export const fetchAllArticles = (article_id) => {
  return newsApi
    .get("/articles/", { params: { article_id } })
    .then(({ data }) => {
      return data;
    })
    .catch((error) => {
      return error;
    });
};

export const fetchArticlesByArticleId = (article_id) => {
  return newsApi.get(`/articles/${article_id}`).then(({ data }) => {
    return data;
  });
};

export const fetchArticleVotes = (article_id) => {
  return newsApi.get(`/articles/${article_id}`).then(({ data }) => {
    return data.votes;
  });
};

export const patchArticle = (article_id, votes) => {
  return newsApi
    .patch(`/articles/${article_id}`, { inc_votes: votes })
    .then(({ data }) => {
      return data;
    })
    .catch((error) => {
      return error;
    });
};

export const fetchArticleComments = (article_id) => {
  return newsApi.get(`/articles/${article_id}/comments`).then(({ data }) => {
    return data;
  });
};

export const postArticleComments = (article_id, newComment) => {
  return newsApi
    .post(`/articles/${article_id}/comments`, newComment)
    .then(({ data }) => {
      return data;
    })
    .catch((error) => {
      console.log(error);
      return error;
    });
};
