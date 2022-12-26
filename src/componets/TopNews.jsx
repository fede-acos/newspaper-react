import React from "react";
import IndividualNews from "./IndividualNews";
import { useSelector } from "react-redux";

function TopNews() {
  const {
    newsState: { news },
  } = useSelector((state) => state.news);

  return (
    <div>
      {news?.map((news) => {
        return <IndividualNews key={news.url} news={news} />;
      })}
    </div>
  );
}

export default TopNews;
