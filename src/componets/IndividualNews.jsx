import React, { useEffect } from "react";
import { filterEmptyNews, selectMainArticle } from "./utilities/filterNews";
import { useDispatch } from "react-redux";
import { saveNews } from "../features/news/newsSlice";
import { useGetNewsQuery } from "../api/apiSlice";

function IndividualNews({
  data: {
    data: { results },
  },
}) {
  const dispatch = useDispatch();

  /* usar este hook para replazar el react query const { data } = useGetNewsQuery("world"); */

  const mainArticle = selectMainArticle(results);
  const newsWithImages = filterEmptyNews(results);

  newsWithImages && dispatch(saveNews(newsWithImages));

  return (
    <div>
      {results &&
        newsWithImages.map((news) => {
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
