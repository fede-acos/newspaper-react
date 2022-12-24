import React, { useState } from "react";
import "./App.css";
import TopNews from "./componets/TopNews";
import Navbar from "./componets/Navbar";
import { useNewsData } from "./componets/hooks/useNewsData";

function App() {
  const [category, setCategory] = useState("world");
  const { data, isLoading } = useNewsData(category);

  return (
    <div className="App">
      <Navbar setCategory={setCategory} />
      <TopNews category={category} data={data} isLoading={isLoading} />
    </div>
  );
}
export default App;
