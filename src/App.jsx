import "./App.css";
import { Header } from "./Components/Header";
import { ArticleContainer } from "./Containers/ArticleContainer";
import { Routes, Route } from "react-router-dom";
import { AllTopicsPage } from "./Pages/AllTopicsPage";
import { TopicPage } from "./Pages/TopicPage";
import { useState } from "react";

function App() {
  const [topics, setTopics] = useState([]);

  return (
    <>
      <Header />
      <ArticleContainer />
      <Routes>
        <Route
          path="/topics"
          element={<AllTopicsPage topics={topics} setTopics={setTopics} />}
        />
        <Route
          path="/topics/:topic"
          element={<TopicPage topics={topics} setTopics={setTopics} />}
        />
      </Routes>
    </>
  );
}

export default App;
