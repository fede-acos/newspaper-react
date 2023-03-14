import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { saveNews } from "../features/news/newsSlice";
import ErrorPage from "./ErrorPage";
import IndividualNews from "./IndividualNews";
import MainArticle from "./MainArticle";

function TopNews({ data, isLoading, isError, error }) {
  const dispatch = useDispatch();
  const { mainNews, sideNews } = useSelector((state) => state.news.newsState);

  useEffect(() => {
    if (isLoading) return;
    dispatch(saveNews({ news: data.results }));
  }, [data]);

  if (isLoading)
    return (
      <div className="mt-5 flex h-[100vh] place-content-center">
        <button className="w-18 loading btn"> Loading</button>
      </div>
    );

  return (
    <>
      <div className=" mt-10 p-2 md:grid md:grid-cols-my-columns 2xl:mt-32 2xl:pl-24 2xl:pr-24">
        <MainArticle news={mainNews} />
        <div>
          <div className=" relative left-2 max-w-fit rounded bg-primary p-2 font-bold hover:bg-primary-focus">
            <h1 className="text-sm  text-white ">TOP NEWS</h1>
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
