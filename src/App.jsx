import "./App.css";
import { Header } from "./Components/Header";
import { ArticleContainer } from "./Containers/ArticleContainer";
import { Routes, Route } from "react-router-dom";
import { useState } from "react";

function App() {
  const [topics, setTopics] = useState([]);

  return (
    <>
      <Header />
      <ArticleContainer />
      <Routes></Routes>
    </>
  );
}

export default App;
