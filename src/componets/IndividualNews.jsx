import React from "react";
import { filterNews } from "./utilities/filterNews";

function IndividualNews({
  data: {
    data: { results },
  },
}) {
  return (
    <div>
      {results &&
        filterNews(results).map((news) => {
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
