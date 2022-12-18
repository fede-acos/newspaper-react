import React, { useState, useEffect } from "react";
import { useNewsData } from "./useNewsData";
import IndividualNews from "./IndividualNews";

function TopNews({ category }) {
  const { data, isLoading } = useNewsData(category);

  return (
    <div>
      {!isLoading && <IndividualNews data={data} category={category} />}
      TopNews
    </div>
  );
}

export default TopNews;
