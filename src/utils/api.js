import axios from "axios";

const newsApi = axios.create({
  baseURL: "https://artemis-be-news.onrender.com/api",
});

export const fetchAllArticles = (topic, sort_by, order) => {
  return newsApi
    .get("/articles", { params: { topic, sort_by, order } })
    .then(({ data }) => {
      return data;
    })
    .catch((error) => {
      return Promise.reject(error);
    });
};

export const fetchArticlesByArticleId = (article_id) => {
  return newsApi
    .get(`/articles/${article_id}`)
    .then(({ data }) => {
      return data;
    })
    .catch((error) => {
      console.log(error);
      return Promise.reject(error);
    });
};

export const fetchArticleVotes = (article_id) => {
  return newsApi
    .get(`/articles/${article_id}`)
    .then(({ data }) => {
      return data.votes;
    })
    .catch((error) => {
      return Promise.reject(error);
    });
};

export const patchArticle = (article_id, votes) => {
  return newsApi
    .patch(`/articles/${article_id}`, { inc_votes: votes })
    .then(({ data }) => {
      return data;
    })
    .catch((error) => {
      return Promise.reject(error);
    });
};

export const fetchArticleComments = (article_id) => {
  return newsApi
    .get(`/articles/${article_id}/comments`)
    .then(({ data }) => {
      return data;
    })
    .catch((error) => {
      return Promise.reject(error);
    });
};

export const postArticleComments = (article_id, newComment, username) => {
  const commentToPost = { username: username, body: newComment };
  if (newComment === "") {
    return Promise.reject({
      message: "Your comment is empty, please try again...",
    });
  }
  return newsApi
    .post(`/articles/${article_id}/comments`, commentToPost)
    .then(({ data }) => {
      return data;
    })
    .catch((error) => {
      return Promise.reject(error);
    });
};

export const DeleteArticleComments = (comment_id) => {
  return newsApi
    .delete(`/comments/${comment_id}`)
    .then((response) => {
      console.log(response, `Deleted post with ID ${comment_id}`);
    })
    .catch((error) => {
      return Promise.reject(error);
    });
};

export const fetchAllTopics = () => {
  return newsApi
    .get("/topics/")
    .then(({ data }) => {
      return data;
    })
    .catch((error) => {
      return Promise.reject(error);
    });
};
