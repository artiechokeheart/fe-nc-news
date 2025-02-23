export const OrderToggle = ({ articles, setArticles, setSearchParams }) => {
  return (
    <>
      <input
        type="radio"
        name="orderRadio"
        value="desc"
        id="desc"
        defaultChecked="desc"
        onChange={(e) => {
          handleChange(e, { setArticles, setSearchParams });
        }}
      />
      Descending
      <input
        type="radio"
        name="orderRadio"
        value="asc"
        id="asc"
        onChange={(e) => {
          handleChange(e, { articles, setArticles, setSearchParams });
        }}
      />
      Ascending
    </>
  );
};
