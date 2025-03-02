import { HandleFilter } from "../utils/handleFilter";

export const SortArticlesDropDown = ({
  setArticles,
  setSearchParams,
  order,
  setOrder,
}) => {
  const handleChange = ({}) => {
    const sortDropDown = document.querySelector("#sort");
    const topicDropDown = document.querySelector("#topics");
    const orderDesc = document.querySelector("#desc");
    const sortValue = sortDropDown.value;
    const topicValue = topicDropDown.value;
    let orderValue = "";

    if (orderDesc.checked) {
      orderValue = "desc";
    } else {
      orderValue = "asc";
    }

    HandleFilter({
      topicValue,
      sortValue,
      setArticles,
      setSearchParams,
      orderValue,
    });
  };

  return (
    <>
      <label className="p-5">Sort_by:</label>
      <select name="sort" id="sort" onChange={handleChange}>
        <option className="text-black">created_at</option>
        <option className="text-black">comment_count</option>
        <option className="text-black">votes</option>
      </select>
    </>
  );
};
