import React from "react";

function MainArticle({ news }) {
  return (
    <>
      {news.multimedia && (
        <article className="md:mb-40 mb-10">
          <div className=" card bg-base-100 shadow-xl p-2 text-center md:text-left">
            <a className="hover:underline " href={news.url}>
              <h2 className="card-title text-3xl md:items-start mb-4 2xl:text-4xl ">
                {news.title}
              </h2>
            </a>
            <figure className="relative">
              <img
                className="rounded"
                src={news.multimedia[0].url}
                alt={news.multimedia[0].caption}
              />
              <div className="absolute bottom-0 left-0 bg-primary hover:bg-primary-focus p-1.5 font-bold rounded">
                <h2 className="text-white text-sm ">
                  {news.section.toUpperCase()}
                </h2>
              </div>
            </figure>
            <p className="pt-4 font-medium text-base lg:text-lg xl:text-xl 2xl:text-2xl">
              {news.abstract}
            </p>
          </div>
        </article>
      )}
      <div className="divider p-2 md:hidden"> </div>
    </>
  );
}

export default MainArticle;
