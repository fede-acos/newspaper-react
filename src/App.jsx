import React from "react";
import "./App.css";
import TopNews from "./componets/TopNews";
import Navbar from "./componets/Navbar";
import RelatedNews from "./componets/RelatedNews";

function App() {
  return (
    <div className="App">
      <Navbar />
      <TopNews />
      <RelatedNews />
    </div>
  );
}
export default App;
