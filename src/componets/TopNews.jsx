import React, { useEffect } from "react";
import IndividualNews from "./IndividualNews";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useGetNewsQuery } from "../api/apiSlice";
import { saveNews } from "../features/news/newsSlice";
import MainArticle from "./MainArticle";

function TopNews() {
  const dispatch = useDispatch();
  const { section } = useSelector((state) => state.section);
  const { mainNews, sideNews } = useSelector((state) => state.news.newsState);
  const { data, isLoading } = useGetNewsQuery(section);

  useEffect(() => {
    if (!isLoading) {
      dispatch(saveNews({ news: data.results }));
    }
  }, [data]);

  if (isLoading) return <div>Loading....</div>;

  return (
    <>
      <MainArticle news={mainNews} />
      {sideNews.map((news) => {
        return <IndividualNews key={news.url} news={news} />;
      })}
    </>
  );
}

export default TopNews;
