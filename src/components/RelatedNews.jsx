import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { paginate } from "./utilities/paginateRelatedNews";
function RelatedNews({ isLoading }) {
  const [relatedNews, setRelatedNews] = useState([]);

  const { news, mainNews, sideNews } = useSelector(
    (state) => state.news.newsState
  );

  const [page, setPage] = useState(1);

  const { paginatedNews, numberOfPages } = paginate(
    news,
    page,
    sideNews,
    mainNews
  );

  useEffect(() => {
    setPage(1);
    setRelatedNews(paginatedNews);
  }, [news]);

  useEffect(() => {
    if (
      page <= 1 ||
      relatedNews.some((element) => paginatedNews.includes(element))
    )
      return;
    setRelatedNews([...relatedNews, ...paginatedNews]);
  }, [page]);

  // if (relatedNews.length === 0 && paginatedNews.length >= 1) {
  //   setRelatedNews(paginatedNews); //render the news in the first render
  // }

  if (isLoading) return <></>;

  return (
    <div className="flex place-content-center flex-col xl:pr-24 xl:pl-24 2xl:mt-40 2xl:mb-40  ">
      <div className="divider p-2 mt-5 mb-5 md:hidden"> </div>

      <div className=" bg-primary hover:bg-primary-focus p-2 font-bold rounded max-w-fit relative left-2">
        <h1 className="text-primary-content  text-sm ">RELATED NEWS</h1>
      </div>
      {relatedNews?.map((news) => {
        return (
          <article key={news.url} className="lg:mt-8 md:mt-4  mt-10   ">
            <div className=" bg-base-100 shadow-xl p-2 md:flex md:flex-row-reverse md:justify-end rounded-box ">
              <a className="" href={news.url}>
                <h2 className="card-title md:items-start xl:text-3xl md:text-2xl flex flex-col hover:underline text-center md:text-left ">
                  {news.title}
                </h2>
                <p className="md:block hidden "> {news.abstract}</p>
              </a>
              <figure className="relative ">
                <img
                  className="rounded xl:max-w-[500px] 2xl:max-w-[600px] sm:max-w-[400px] max-w-[100%] mr-4 md:mr-6 "
                  src={news.multimedia[1].url}
                  alt={news.multimedia[0].caption}
                />
                <div className="absolute bottom-0 left-0 bg-neutral hover:bg-neutral-focus p-1.5 font-bold rounded">
                  <h1 className="text-white text-sm ">
                    {news.section.toUpperCase()}
                  </h1>
                </div>
              </figure>
            </div>
          </article>
        );
      })}
      <div className="w-full flex place-content-center mt-8 mb-8 2xl:mt-32 2xl:mb-2">
        <button
          className="btn btn-sm md:btn-md "
          onClick={() => setPage((prevPage) => prevPage + 1)}
          disabled={page >= numberOfPages}
        >
          Load More
        </button>
      </div>
    </div>
  );
}

export default RelatedNews;
