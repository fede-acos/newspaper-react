import React from "react";

function MainArticle({ news }) {
  return (
    <>
      {news && (
        <article className="mt-8 ">
          <div className=" card bg-base-100 shadow-xl p-2">
            <a className="hover:underline " href={news.url}>
              <h2 className="card-title text-3xl md:items-start">
                {news.title}
              </h2>
            </a>
            <figure className="relative">
              <img
                className="rounded"
                src={news.multimedia[0].url}
                alt={news.multimedia[0].caption}
              />
              <div className="absolute bottom-0 left-0 bg-blue-700 p-1.5 font-bold rounded">
                <h2 className="text-white text-sm ">
                  {news.section.toUpperCase()}
                </h2>
              </div>
            </figure>
            <p className="pt-4 font-medium text-base lg:font-">
              {news.abstract}
            </p>
          </div>
        </article>
      )}
    </>
  );
}

export default MainArticle;
