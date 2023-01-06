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
  }, [section]);

  useEffect(() => {
    if (page <= 1) return;
    if (relatedNews.some((element) => paginatedNews.includes(element))) return;
    setRelatedNews([...relatedNews, ...paginatedNews]);
  }, [page]);

  if (relatedNews.length === 0 && paginatedNews.length >= 1) {
    setRelatedNews(paginatedNews); //render the news in the first render
  }

  return (
    <div className=" xl:pr-10 xl:pl-10 2xl:pl-24 2xl:pr-24">
      {relatedNews &&
        relatedNews?.map((news) => {
          return (
            <article key={news.url} className="lg:mt-8 mt-4 ">
              <div className=" card flex-row-reverse  bg-base-100 shadow-xl p-2">
                <a className="hover:underline " href={news.url}>
                  <h2 className="card-title md:items-start">{news.title}</h2>
                </a>
                <figure className="relative items-start">
                  <img
                    className="rounded max-w-lg"
                    src={news.multimedia[0].url}
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
      <div className="w-full flex place-content-center mt-8 pb-16">
        <button
          className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg pt"
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
