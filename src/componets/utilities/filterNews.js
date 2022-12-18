export const filterNews = (news) => {
  if (!news) return;
  return news?.filter(
    (news) => news.multimedia != null && news.title != "" && news.abstract != ""
  );
};
