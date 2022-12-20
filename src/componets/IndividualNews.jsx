import React, { useEffect } from "react";
import { filterEmptyNews, selectMainArticle } from "./utilities/filterNews";

function IndividualNews({
  data: {
    data: { results },
  },
}) {
  const mainArticle = selectMainArticle(results);
  const newsArray = filterEmptyNews(results)?.map((news) => {
    if (news === mainArticle) return;
  });

  return (
    <div>
      {results &&
        filterEmptyNews(results).map((news) => {
          if (news === mainArticle) return;
          return (
            <div key={news.url}>
              <h1>{news.title}</h1>
              <img src={news.multimedia[0].url} alt="somting" />
              <p>{news.abstract}</p>
            </div>
          );
        })}
    </div>
  );
}

export default IndividualNews;
