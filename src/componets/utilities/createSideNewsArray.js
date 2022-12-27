const SIDE_NEWS_AMOUNT = 3;

export const sideNewsArray = (news, mainArticle) => {
  const sideNewsArray = [];
  news.map((news, index) => {
    if (news !== mainArticle && index <= SIDE_NEWS_AMOUNT) {
      sideNewsArray.push(news);
    }
    return sideNewsArray;
  });
  return sideNewsArray;
};
