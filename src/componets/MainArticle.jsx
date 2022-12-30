import React from "react";
import IndividualNews from "./IndividualNews";

function MainArticle({ news }) {
  return <> {news.multimedia && <IndividualNews news={news} />}</>;
}

export default MainArticle;
