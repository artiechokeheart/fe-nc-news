import { useState } from "react";
import { Articles } from "../Components/Articles";

export const HomePage = () => {
  const [articles, setArticles] = useState([]);
  return (
    <>
      <Articles />
    </>
  );
};
