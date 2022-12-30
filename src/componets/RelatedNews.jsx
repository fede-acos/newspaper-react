import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { paginate } from "./utilities/createRelatedNewsArray";
import IndividualNews from "./IndividualNews";
function RelatedNews() {
  const { section } = useSelector((state) => state.section);

  const [relatedNews, setRelatedNews] = useState([]);

  const { news, mainNews, sideNews } = useSelector((state) => state.news);
  const [localSection, setLocalSection] = useState("world");

  const [page, setPage] = useState(1);

  console.log(relatedNews);

  const { paginatedNews, numberOfPages } = paginate(
    news,
    page,
    sideNews,
    mainNews
  );

  useEffect(() => {
    setPage(1);
    if (section === localSection) {
      setRelatedNews(...[], ...paginatedNews);
      return;
    }
    setRelatedNews([]);
    setLocalSection(section);
  }, [section]);

  useEffect(() => {
    if (relatedNews.some((element) => paginatedNews.includes(element))) return;
    console.log("re render");

    setRelatedNews([...relatedNews, ...paginatedNews]);
  }, [page, news]);

  return (
    <div>
      {relatedNews &&
        relatedNews?.map((news) => {
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
