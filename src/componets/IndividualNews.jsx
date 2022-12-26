import React from "react";

function IndividualNews({ news }) {
  return (
    <>
      <div key={news.url}>
        <h1>{news.title}</h1>
        <img src={news.multimedia[0].url} alt="somting" />
        <p>{news.abstract}</p>
      </div>
    </>
  );
}

export default IndividualNews;
