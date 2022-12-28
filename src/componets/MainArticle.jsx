import React from "react";
import { useSelector, useDispatch } from "react-redux";
import IndividualNews from "./IndividualNews";

function MainArticle() {
  const { newsState } = useSelector((state) => state.news);

  const news = newsState.mainNews;
  const sideNews = newsState.relatedNews;

  return <> {news.multimedia && <IndividualNews news={news} />}</>;
}

export default MainArticle;
