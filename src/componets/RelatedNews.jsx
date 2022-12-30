import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { paginate } from "./utilities/createRelatedNewsArray";
import IndividualNews from "./IndividualNews";
function RelatedNews() {
  const { section } = useSelector((state) => state.section);

  const [relatedNews, setRelatedNews, resetrelatedNews] = useState([]);

  const { news, mainNews, sideNews } = useSelector((state) => state.news);

  const [page, setPage] = useState(1);
  console.log(resetrelatedNews);
  const paginatedNews = paginate(news, page, sideNews, mainNews);

  useEffect(() => {
    setRelatedNews([]);
  }, [section]);

  useEffect(() => {
    if (relatedNews.some((element) => paginatedNews.includes(element))) return;

    setRelatedNews([...relatedNews, ...paginatedNews]);
  }, [page, news]);

  console.log(relatedNews);
  return (
    <div>
      {relatedNews &&
        relatedNews.map((news) => {
          return <IndividualNews key={news.url} news={news} />;
        })}
      {console.log(section)}
      <button onClick={() => setPage((prevPage) => prevPage + 1)}>
        click ME
      </button>
    </div>
  );
}

export default RelatedNews;
