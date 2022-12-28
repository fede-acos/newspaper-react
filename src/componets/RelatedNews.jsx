import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { paginate } from "./utilities/createRelatedNewsArray";
import IndividualNews from "./IndividualNews";
function RelatedNews() {
  const [relatedNews, setRelatedNews] = useState([]);
  const [page, setPage] = useState(1);

  const {
    newsState: { news, mainNews, sideNews },
  } = useSelector((state) => state.news);
  console.log(news);

  useEffect(() => {
    const paginatedNews = paginate(news, page, sideNews, mainNews);
    if (relatedNews.some((element) => paginatedNews.includes(element))) return;
    setRelatedNews([...relatedNews, ...paginatedNews]);
  }, [page, news]);

  return (
    <div>
      {relatedNews?.map((news) => {
        return <IndividualNews key={news.url} news={news} />;
      })}
      <button onClick={() => setPage((prevPage) => prevPage + 1)}>
        click ME
      </button>
    </div>
  );
}

export default RelatedNews;
