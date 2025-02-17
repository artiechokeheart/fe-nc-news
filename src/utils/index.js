import axios from "axios";

const newsApi = axios.create({
  baseURL: "https://artemis-be-news.onrender.com/api",
});

export const fetchAllArticles = () => {
  newsApi
    .get("/articles")
    .then(({ data }) => {
      const articles = data;
      return articles;
    })
    .catch((error) => {
      // handle error
    });
};
