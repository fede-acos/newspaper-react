import React from "react";

function IndividualNews({ news }) {
  return (
    <>
      <article className="mt-8 p-2">
        <figure className="relative">
          <a className="hover:underline text-black" href={news.url}>
            <h1 className="font-extrabold text-3xl text-black">{news.title}</h1>
          </a>

          <img src={news.multimedia[0].url} alt={news.multimedia[0].caption} />
          <div className="absolute bottom-0 left-0 bg-blue-700 p-1.5 font-bold ">
            <h1 className="text-white text-sm ">
              {news.section.toUpperCase()}
            </h1>
          </div>
        </figure>
      </article>
    </>
  );
}

export default IndividualNews;
