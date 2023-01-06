import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { paginate } from "./utilities/paginateRelatedNews";
import IndividualNews from "./IndividualNews";
function RelatedNews() {
  const { section } = useSelector((state) => state.section);

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
    console.log(1);
  }, [news]);

  useEffect(() => {
    console.log(2);

    if (page <= 1) return;
    if (relatedNews.some((element) => paginatedNews.includes(element))) return;
    setRelatedNews([...relatedNews, ...paginatedNews]);
  }, [page]);

  if (relatedNews.length === 0 && paginatedNews.length >= 1) {
    setRelatedNews(paginatedNews); //render the news in the first render
  }
  console.log(paginatedNews);

  return (
    <div className="flex place-content-center flex-col xl:pr-24 xl:pl-24  ">
      {relatedNews?.map((news) => {
        return (
          <article className="lg:mt-8 mt-4  ">
            <div className=" bg-base-100 shadow-xl p-2 md:flex md:flex-row-reverse ">
              <a className="hover:underline " href={news.url}>
                <h2 className="card-title md:items-start xl:text-3xl md:text-2xl ">
                  {news.title}
                </h2>
              </a>
              <figure className="relative">
                <img
                  className="rounded xl:max-w-[500px] 2xl:max-w-[500px] max-w-[400px] mr-4 md:mr-6 "
                  src={news.multimedia[1].url}
                  alt={news.multimedia[0].caption}
                />
                <div className="absolute bottom-0 left-0 bg-blue-700 p-1.5 font-bold rounded">
                  <h1 className="text-white text-sm ">
                    {news.section.toUpperCase()}
                  </h1>
                </div>
              </figure>
            </div>
          </article>
        );
      })}
      <div className="w-full flex place-content-center mt-8">
        <button
          className="btn btn-sm md:btn-md lg:btn-lg"
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
