import { Articles } from "../Components/Articles";

export const HomePage = ({ articles, setArticles }) => {
  return (
    <>
      <Articles articles={articles} setArticles={setArticles} />
    </>
  );
};
