import React from "react";
import "./App.css";
import TopNews from "./componets/TopNews";
import Navbar from "./componets/Navbar";
import MainArticle from "./componets/MainArticle";

function App() {
  return (
    <div className="App">
      <Navbar />

      <TopNews />
    </div>
  );
}
export default App;
