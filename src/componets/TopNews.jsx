import React, { useState, useEffect } from "react";
import { useNewsData } from "./hooks/useNewsData";
import IndividualNews from "./IndividualNews";

function TopNews({ category, data, isLoading }) {
  return (
    <div>
      {!isLoading && <IndividualNews data={data} />}
      TopNews
    </div>
  );
}

export default TopNews;
