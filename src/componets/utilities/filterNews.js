export const filterNews = (news, section = "world") => {
  if (!news) return;
  const newsWithImages = news?.filter(
    (news) => news.multimedia != null && news.title != "" && news.abstract != ""
  );
};
