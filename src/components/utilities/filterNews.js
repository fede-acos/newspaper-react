const ASPECT_RATIO = 1.36;

export const filterEmptyNews = (news) => {
  if (!news) return;
  return news?.filter(
    (news) =>
      news.multimedia !== null && news.title !== "" && news.abstract !== ""
  );
};

export const selectMainArticle = (news) => {
  return news
    .filter(
      (news) =>
        news.multimedia?.[0]?.width / news.multimedia?.[0]?.height >
        ASPECT_RATIO
    )
    .shift();
};
