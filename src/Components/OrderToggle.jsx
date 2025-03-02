import { useEffect, useState } from "react";
import { HandleFilter } from "../utils/handleFilter";

export const OrderToggle = ({
  articles,
  setArticles,
  setSearchParams,
  setOrder,
  order,
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
        onChange={handleChange}
      />
      Ascending
    </>
  );
};
