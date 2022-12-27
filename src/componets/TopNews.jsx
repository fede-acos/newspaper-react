import React, { useEffect } from "react";
import IndividualNews from "./IndividualNews";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useGetNewsQuery } from "../api/apiSlice";
import { filterEmptyNews, selectMainArticle } from "./utilities/filterNews";
import { saveNews } from "../features/news/newsSlice";
import MainArticle from "./MainArticle";

function TopNews() {
  const { section } = useSelector((state) => state.section);

  const { data, isLoading } = useGetNewsQuery(section);

  useEffect(() => {
    if (!isLoading) {
      const filteredNews = filterEmptyNews(data.results);
      const mainNews = selectMainArticle(filteredNews);
      dispatch(saveNews({ news: filteredNews, mainNews: mainNews }));
    }
  }, [data]);

  const {
    newsState: { news, mainNews },
  } = useSelector((state) => state.news);

  const dispatch = useDispatch();

  if (isLoading) return <div>Loading....</div>;

  return (
    <>
      <MainArticle />
      {news?.map((news) => {
        if (news !== mainNews) {
          return <IndividualNews key={news.url} news={news} />;
        }
      })}
    </>
  );
}

export default TopNews;
