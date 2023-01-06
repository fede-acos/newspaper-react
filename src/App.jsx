import React from "react";
import TopNews from "./componets/TopNews";
import Navbar from "./componets/Navbar";
import RelatedNews from "./componets/RelatedNews";
import Footer from "./componets/Footer";

function App() {
  return (
    <>
      <div className="sm:pl-4 sm:pr-4">
        <Navbar />
        <TopNews />
        <RelatedNews />
      </div>
      <Footer />
    </>
  );
}
export default App;
