import { Articles } from "../Components/Articles";
import { SortArticlesDropDown } from "../Components/SortArticlesDropDown";
import { TopicsDropDown } from "../Components/TopicsDropDown";

export const HomePage = ({ articles, setArticles }) => {
  return (
    <>
      <TopicsDropDown articles={articles} setArticles={setArticles} />
      <SortArticlesDropDown articles={articles} setArticles={setArticles} />
      <Articles articles={articles} setArticles={setArticles} />
    </>
  );
};
