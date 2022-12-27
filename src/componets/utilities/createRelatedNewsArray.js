const RELATED_NEWS_AMOUNT = 5;

export const paginate = (news, page = 1) => {
  news.slice(RELATED_NEWS_AMOUNT * (page - 1), RELATED_NEWS_AMOUNT * page);
};
