import React from "react";
import TopNews from "./TopNews";
import Navbar from "./navbar/Navbar";
import RelatedNews from "./RelatedNews";
import Footer from "./Footer";
import { useGetNewsQuery } from "../api/apiSlice";
import { useSelector } from "react-redux";

function Home() {
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

export default Home;
