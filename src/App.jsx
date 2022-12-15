import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { useNewsData } from "./componets/useNewsData";
import TopNews from "./componets/TopNews";

function App() {
  /*  const { data, isLoading, isError, error } = useNewsData();
  const [count, setCount] = useState(0);

  if (isLoading) return "loading";
  const {
    data: { results },
  } = data;
  console.log(results); */

  return (
    <div className="App">
      <TopNews></TopNews>
    </div>
  );
}

export default App;
