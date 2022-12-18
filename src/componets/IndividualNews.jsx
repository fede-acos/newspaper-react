import React from "react";
import { filterNews } from "./utilities/filterNews";

function IndividualNews(
  {
    data: {
      data: { results },
    },
  },
  { category }
) {
  return (
    <div>
      {results &&
        filterNews(results).map((news) => {
          return (
            <div key={news.url}>
              <h1>{news.title}</h1>
              <h2>{category}</h2>
              <img src={news.multimedia[0].url} alt="somting" />
              <p>{news.abstract}</p>
            </div>
          );
        })}
    </div>
  );
}

export default IndividualNews;
