const RELATED_NEWS_AMOUNT = 5;

export const paginate = (news, page = 1, sideNews, mainNews) => {
  const newsWithoutMainNews = news.filter((news) => news !== mainNews);

  const newsWithoutSideNews = newsWithoutMainNews.filter(
    (news) => !sideNews.includes(news)
  );
  return newsWithoutSideNews.slice(
    RELATED_NEWS_AMOUNT * (page - 1),
    RELATED_NEWS_AMOUNT * page
  );
};
