import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { paginate } from "./utilities/createRelatedNewsArray";
import IndividualNews from "./IndividualNews";
function RelatedNews() {
  const { section } = useSelector((state) => state.section);

  const [relatedNews, setRelatedNews, resetrelatedNews] = useState([]);

  const { news, mainNews, sideNews } = useSelector((state) => state.news);

  const [page, setPage] = useState(1);

  console.log(paginate(news, page, sideNews, mainNews));

  const { paginatedNews, numberOfPages } = paginate(
    news,
    page,
    sideNews,
    mainNews
  );

  useEffect(() => {
    setRelatedNews([]);
    setPage(1);
  }, [section]);

  useEffect(() => {
    if (relatedNews.some((element) => paginatedNews.includes(element))) return;

    setRelatedNews([...relatedNews, ...paginatedNews]);
  }, [page, news]);
  console.log(page >= numberOfPages);
  return (
    <div>
      {relatedNews &&
        relatedNews.map((news) => {
          return <IndividualNews key={news.url} news={news} />;
        })}
      {console.log(section)}
      <button
        onClick={() => setPage((prevPage) => prevPage + 1)}
        disabled={page >= numberOfPages}
      >
        click ME
      </button>
    </div>
  );
}

export default RelatedNews;
