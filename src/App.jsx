import React, { useState, createContext, useContext, useEffect } from "react";
import "./App.css";
import TopNews from "./componets/TopNews";
import Navbar from "./componets/Navbar";

const CategoryContext = createContext("world");

function App() {
  const [category, setCategory] = useState("world");
  console.log(category);
  return (
    <div className="App">
      <CategoryContext.Provider value={{ category, setCategory }}>
        <Navbar />
        <TopNews category={category} />
      </CategoryContext.Provider>
    </div>
  );
}
export function useCategoryContext() {
  return useContext(CategoryContext);
}
export default App;
