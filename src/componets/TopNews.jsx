import React, { useState } from "react";
import { filterNews } from "./utilities/filterNews";
import { useNewsData } from "./useNewsData";

function TopNews() {
  const [news, setnews] = useState({});
  const { data, isLoading, isError, error } = useNewsData();

  if (isLoading) return "Loading...";

  const {
    data: { results },
  } = data;
  console.log(results);

  return <div>TopNews</div>;
}

export default TopNews;
