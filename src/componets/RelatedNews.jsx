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
  }, [section]);

  useEffect(() => {
    console.log(2);

    if (page <= 1) return;
    if (relatedNews.some((element) => paginatedNews.includes(element))) return;
    setRelatedNews([...relatedNews, ...paginatedNews]);
  }, [page]);

  if (relatedNews.length === 0 && paginatedNews.length >= 1) {
    setRelatedNews(paginatedNews); //render the news in the first render
  }

  return (
    <div>
      {relatedNews &&
        relatedNews?.map((news) => {
          return <IndividualNews key={news.url} news={news} />;
        })}
      <div className="w-full flex place-content-center mt-8">
        <button
          className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg"
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
