import React, { useState, createContext, useContext } from "react";
import "./App.css";
import TopNews from "./componets/TopNews";
import Navbar from "./componets/Navbar";

const CategoryContext = createContext("world");

function App() {
  const [category, setCategory] = useState("world");

  return (
    <div className="App">
      <CategoryContext.Provider value={{ category, setCategory }}>
        <Navbar />
        <TopNews />
      </CategoryContext.Provider>
    </div>
  );
}
export function useCategoryContext() {
  return useContext(CategoryContext);
}
export default App;
