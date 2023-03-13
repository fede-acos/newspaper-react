import React, { useEffect, useState } from "react";
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
    <div className="relative flex flex-col place-content-center xl:pr-24 xl:pl-24 2xl:mt-40  2xl:mb-40 ">
      <div className="divider mt-5 mb-5 p-2 md:hidden"> </div>

      <div className=" relative left-2 max-w-fit rounded bg-primary p-2 font-bold hover:bg-primary-focus">
        <h1 className="text-sm  text-primary-content ">RELATED NEWS</h1>
      </div>
      {relatedNews?.map((news) => {
        return (
          <article key={news.url} className="mt-10 md:mt-4  lg:mt-8   ">
            <div className=" rounded-box bg-base-100 p-2 shadow-xl md:flex md:flex-row-reverse md:justify-end ">
              <a className="" href={news.url}>
                <h2 className="card-title flex flex-col text-center hover:underline md:items-start md:text-left md:text-2xl xl:text-3xl ">
                  {news.title}
                </h2>
                <p className="hidden md:block "> {news.abstract}</p>
              </a>
              <figure className="relative ">
                <img
                  className="mr-4 max-w-[100%] rounded sm:max-w-[400px] md:mr-6 xl:max-w-[500px] 2xl:max-w-[600px] "
                  src={news.multimedia[1].url}
                  alt={news.multimedia[0].caption}
                />
                <div className="absolute bottom-0 left-0 rounded bg-neutral p-1.5 font-bold hover:bg-neutral-focus">
                  <h1 className="text-sm text-white ">
                    {news.section.toUpperCase()}
                  </h1>
                </div>
              </figure>
            </div>
          </article>
        );
      })}
      <div className="mt-8 mb-8 flex w-full place-content-center 2xl:mt-32 2xl:mb-2">
        <button
          className="btn-sm btn md:btn-md "
          onClick={() => setPage((prevPage) => prevPage + 1)}
          disabled={page >= numberOfPages}
        >
          Load More
        </button>
      </div>
      <button
        className=" absolute right-2 bottom-2 rounded-full bg-primary p-1 text-[10px] text-primary-content opacity-95 hover:opacity-90 sm:right-2"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        Back to Top
      </button>
    </div>
  );
}

export default RelatedNews;
