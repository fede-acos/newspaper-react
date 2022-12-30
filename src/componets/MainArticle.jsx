import React from "react";
import { useSelector } from "react-redux";
import IndividualNews from "./IndividualNews";

function MainArticle() {
  const { mainNews } = useSelector((state) => state.news);

  return <> {mainNews.multimedia && <IndividualNews news={mainNews} />}</>;
}

export default MainArticle;
