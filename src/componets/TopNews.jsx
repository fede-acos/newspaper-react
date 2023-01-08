import React, { useEffect } from "react";
import IndividualNews from "./IndividualNews";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { saveNews } from "../features/news/newsSlice";
import MainArticle from "./MainArticle";

function TopNews({ data, isLoading }) {
  const dispatch = useDispatch();
  const { mainNews, sideNews } = useSelector((state) => state.news.newsState);

  useEffect(() => {
    if (isLoading) return;
    dispatch(saveNews({ news: data.results }));
  }, [data]);

  if (isLoading)
    return (
      <div className="flex place-content-center mt-5">
        <button className="btn loading w-18">loading</button>
      </div>
    );

  return (
    <>
      <div className=" md:grid md:grid-cols-my-columns p-2 2xl:pl-24 2xl:pr-24 mt-10 2xl:mt-32">
        <MainArticle news={mainNews} />
        <div>
          <div className=" bg-primary hover:bg-primary-focus p-2 font-bold rounded max-w-fit relative left-2">
            <h1 className="text-primary-content  text-sm ">TOP NEWS</h1>
          </div>
          {sideNews.map((news) => {
            return <IndividualNews key={news.url} news={news} />;
          })}
        </div>
      </div>
    </>
  );
}

export default TopNews;
