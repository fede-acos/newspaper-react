import React from "react";

function IndividualNews({ news }) {
  return (
    <>
      <article className=" mb-8 md:mb-10">
        <div className=" card bg-base-100 shadow-xl p-2">
          <a className="hover:underline " href={news.url}>
            <h2 className="card-title md:items-start md:text-[16px] xl:text-xl 2xl:text-2xl text-center md:text-left">
              {news.title}
            </h2>
          </a>
          <figure className="relative">
            <img
              className="rounded mr-4 md:mr-6 "
              src={news.multimedia[1].url}
              alt={news.multimedia[0].caption}
            />
            <div className="absolute bottom-0 left-0 bg-primary hover:bg-primary-focus  p-1.5 font-bold rounded">
              <h1 className="text-white text-sm ">
                {news.section.toUpperCase()}
              </h1>
            </div>
          </figure>
        </div>
      </article>
    </>
  );
}

export default IndividualNews;
