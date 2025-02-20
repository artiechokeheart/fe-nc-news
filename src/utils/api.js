import axios from "axios";

const newsApi = axios.create({
  baseURL: "https://artemis-be-news.onrender.com/api",
});

export const fetchAllArticles = (topic) => {
  return newsApi
    .get("/articles/", { params: { topic } })
    .then(({ data }) => {
      return data;
    })
    .catch((error) => {
      console.log(error, "fetchAllArticles");
    });
};

export const fetchArticlesByArticleId = (article_id) => {
  return newsApi
    .get(`/articles/${article_id}`)
    .then(({ data }) => {
      return data;
    })
    .catch((error) => {
      console.log(error, "fetchArticlesByArticleID");
    });
};

export const fetchArticleVotes = (article_id) => {
  return newsApi
    .get(`/articles/${article_id}`)
    .then(({ data }) => {
      return data.votes;
    })
    .catch((error) => {
      console.log(error, "fetchArticleVotes");
    });
};

export const patchArticle = (article_id, votes) => {
  return newsApi
    .patch(`/articles/${article_id}`, { inc_votes: votes })
    .then(({ data }) => {
      return data;
    })
    .catch((error) => {
      console.log(error, "patchArticle");
    });
};

export const fetchArticleComments = (article_id) => {
  return newsApi
    .get(`/articles/${article_id}/comments`)
    .then(({ data }) => {
      return data;
    })
    .catch((error) => {
      console.log(error, "fetchArticleComments");
    });
};

export const postArticleComments = (article_id, newComment, username) => {
  const commentToPost = { username: username, body: newComment };
  return newsApi
    .post(`/articles/${article_id}/comments`, commentToPost)
    .then(({ data }) => {
      return data;
    })
    .catch((error) => {
      console.log(error, "postArticleComments");
    });
};

export const fetchAllTopics = () => {
  return newsApi
    .get("/topics/")
    .then(({ data }) => {
      console.log(data);
      return data;
    })
    .catch((error) => {
      console.log(error, "fetchAllTopics");
    });
};
