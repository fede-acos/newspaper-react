export const filterNews = (news, section = "world") => {
  if (!news) return;
  return news?.filter(
    (news) => news.multimedia != null && news.title != "" && news.abstract != ""
  );
};
