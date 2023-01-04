import React from "react";
import TopNews from "./componets/TopNews";
import Navbar from "./componets/Navbar";
import RelatedNews from "./componets/RelatedNews";

function App() {
  return (
    <div>
      <Navbar />
      <TopNews />
      <RelatedNews />
    </div>
  );
}
export default App;
