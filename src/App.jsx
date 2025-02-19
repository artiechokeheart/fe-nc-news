import { useState } from "react";
import "./App.css";
import { Header } from "./Components/Header";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ArticleContainer } from "./Containers/ArticleContainer";

function App() {
  console.log("in App,jsx");
  return (
    <>
      <Header />
      <ArticleContainer />
    </>
  );
}

export default App;
