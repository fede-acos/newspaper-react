import React, { useState } from "react";
import "./App.css";
import TopNews from "./componets/TopNews";
import Navbar from "./componets/Navbar";

function App() {
  const [category, setCategory] = useState("world");

  return (
    <div className="App">
      <Navbar setCategory={setCategory} />
      <TopNews category={category} />
    </div>
  );
}
export default App;
