import React, { useState, useEffect } from "react";
import { filterNews } from "./utilities/filterNews";
import { useNewsData } from "./useNewsData";

function TopNews() {
  const [news1, setNews] = useState({});
  const [category, setCategory] = useState("world");

  const { data, isLoading, isError, error } = useNewsData();

  if (isLoading) return "Loading...";

  const {
    data: { results },
  } = data;

  const newsFiltered = filterNews(results, category);

  return (
    <div>
      {newsFiltered.map((news) => {
        return (
          <div key={news.created_date}>
            <h1>{news.title}</h1>
            <img src={news.multimedia[0].url} alt="somting" />
            <p>{news.abstract}</p>
          </div>
        );
      })}
      TopNews
    </div>
  );
}

export default TopNews;
