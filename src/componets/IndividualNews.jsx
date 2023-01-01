import React from "react";

function IndividualNews({ news }) {
  return (
    <>
      <article className="mt-6 m-1">
        <figure className="relative">
          <h1 className="font-extrabold text-3xl">{news.title}</h1>
          <img src={news.multimedia[0].url} alt={news.multimedia[0].caption} />
          <div className="absolute bottom-0 left-0 bg-blue-700 p-1 font-bold ">
            <h1 className="text-white text-sm">{news.section.toUpperCase()}</h1>
          </div>
        </figure>
      </article>
    </>
  );
}

export default IndividualNews;
