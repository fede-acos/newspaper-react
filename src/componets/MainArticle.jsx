import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { saveNews } from "../features/news/newsSlice";
import { filterEmptyNews, selectMainArticle } from "./utilities/filterNews";
import { useGetNewsQuery } from "../api/apiSlice";
import IndividualNews from "./IndividualNews";

function MainArticle() {
  const { section } = useSelector((state) => state.section);
  const { data, isLoading } = useGetNewsQuery(section);
  const { newsState } = useSelector((state) => state.news);

  const dispatch = useDispatch();

  useEffect(() => {
    if (!isLoading) {
      const filteredNews = filterEmptyNews(data.results);
      const mainNews = selectMainArticle(filteredNews);
      dispatch(saveNews({ news: filteredNews, mainNews: mainNews }));
    }
  }, [data]);

  if (isLoading) return <div>Loading.....</div>;
  const news = newsState.mainNews;
  return <> {news.multimedia && <IndividualNews news={news} />}</>;
}

export default MainArticle;
