export const OrderToggle = ({ articles, setArticles, setSearchParams }) => {
  const handleChange = () => {
    const sortDropDown = document.querySelector("#sort");
    const orderToggle = document.querySelector("#order");
    const topicDropDown = document.querySelector("#topics");
    const sortValue = sortDropDown.value;
    const orderValue = orderToggle.value;
    const topicValue = topicDropDown.value;

    HandleFilter({
      topicValue,
      sortValue,
      orderValue,
      setArticles,
      setSearchParams,
    });
  };
  return (
    <>
      <input
        type="radio"
        name="orderRadio"
        value="desc"
        id="desc"
        defaultChecked="desc"
        onChange={handleChange}
      />
      Descending
      <input
        type="radio"
        name="orderRadio"
        value="asc"
        id="asc"
        onChange={(e) => {
          handleChange(e);
        }}
      />
      Ascending
    </>
  );
};
