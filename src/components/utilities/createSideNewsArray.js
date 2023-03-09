const SIDE_NEWS_AMOUNT = 3;

export const sideNewsArray = (news, mainArticle) => {
  const sideNewsArray = news
    .filter((newsItem) => newsItem !== mainArticle)
    .slice(0, SIDE_NEWS_AMOUNT);
  return sideNewsArray;
};
