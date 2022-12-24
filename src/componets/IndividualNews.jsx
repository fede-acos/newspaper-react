import React, { useEffect } from "react";
import { filterEmptyNews, selectMainArticle } from "./utilities/filterNews";
import { useDispatch } from "react-redux";
import { saveNews } from "../features/news/newsSlice";

function IndividualNews({
  data: {
    data: { results },
  },
}) {
  const dispatch = useDispatch();

  const mainArticle = selectMainArticle(results);
  const newsArray = filterEmptyNews(results)?.map((news) => {
    if (news === mainArticle) return;
  });
  console.log(mainArticle);
  if (newsArray) {
    dispatch(saveNews(mainArticle));
  }

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
