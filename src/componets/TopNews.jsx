import React, { useState, useEffect } from "react";
import { useNewsData } from "./useNewsData";
import IndividualNews from "./IndividualNews";
import { useCategoryContext } from "../App";

function TopNews() {
  const { category } = useCategoryContext();
  const { data, isLoading } = useNewsData(category);
  console.log(category);

  return (
    <div>
      {!isLoading && <IndividualNews data={data} />}
      TopNews
    </div>
  );
}

export default TopNews;
