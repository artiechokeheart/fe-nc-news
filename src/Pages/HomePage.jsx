import { Articles } from "../Components/Articles";
import { TopicsDropDown } from "../Components/TopicsDropDown";

export const HomePage = ({ articles, setArticles }) => {
  return (
    <>
      <TopicsDropDown articles={articles} setArticles={setArticles} />
      <Articles articles={articles} setArticles={setArticles} />
    </>
  );
};
