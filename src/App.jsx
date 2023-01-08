import React from "react";
import TopNews from "./componets/TopNews";
import Navbar from "./componets/navbar/Navbar";
import RelatedNews from "./componets/RelatedNews";
import Footer from "./componets/Footer";
import { useGetNewsQuery } from "./api/apiSlice";
import { useSelector } from "react-redux";

function App() {
  const { section } = useSelector((state) => state.section);
  const { data, isLoading } = useGetNewsQuery(section);

  return (
    <>
      <div className="sm:pl-4 sm:pr-4">
        <Navbar />
        <TopNews data={data} isLoading={isLoading} />
        <RelatedNews isLoading={isLoading} />
      </div>
      <Footer isLoading={isLoading} />
    </>
  );
}
export default App;
