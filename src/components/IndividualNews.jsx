import React from "react";

function IndividualNews({ news }) {
  return (
    <>
      <article className=" mb-8 md:mb-10">
        <div className=" card bg-base-100 p-2 shadow-xl">
          <a className="hover:underline " href={news?.url}>
            <h2 className="card-title text-center md:items-start md:text-left md:text-[16px] xl:text-xl 2xl:text-2xl">
              {news?.title}
            </h2>
          </a>
          <figure className="relative">
            <a href={news?.url}>
              <img
                className="mr-4 rounded md:mr-6 "
                src={news?.multimedia[1]?.url}
                alt={news?.multimedia[0]?.caption}
              />
            </a>

            <div className="absolute bottom-0 left-0 rounded bg-primary  p-1.5 font-bold hover:bg-primary-focus">
              <h1 className="text-sm text-white ">
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
