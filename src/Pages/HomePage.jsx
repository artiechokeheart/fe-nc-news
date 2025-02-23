import { Articles } from "../Components/Articles";
import { SortArticlesDropDown } from "../Components/SortArticlesDropDown";
import { TopicsDropDown } from "../Components/TopicsDropDown";
import { FilterContainer } from "../Containers/FilterContainer";

export const HomePage = ({ articles, setArticles }) => {
  return (
    <>
      <FilterContainer articles={articles} setArticles={setArticles} />
      <Articles articles={articles} setArticles={setArticles} />
    </>
  );
};
