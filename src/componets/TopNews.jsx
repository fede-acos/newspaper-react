import React from "react";
import IndividualNews from "./IndividualNews";
import { useSelector } from "react-redux";

function TopNews() {
  const {
    newsState: { news, mainNews },
  } = useSelector((state) => state.news);

  console.log(mainNews);

  return (
    <div>
      {news?.map((news) => {
        if (news !== mainNews) {
          return <IndividualNews key={news.url} news={news} />;
        }
      })}
    </div>
  );
}

export default TopNews;
