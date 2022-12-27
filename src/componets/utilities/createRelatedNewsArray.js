const RELATED_NEWS_AMOUNT = 5;

export const createRelatedNewsarrays = (arr, sideNews, mainArticle) => {
  const subarrays = [];
  let subArray = [];
  const relatedNews = arr.filter(
    (x) => !sideNews.includes(x) || x !== mainArticle
  );
  relatedNews.map((element, index) => {
    subArray.push(element);

    if ((index + 1) % RELATED_NEWS_AMOUNT === 0 || index === arr.length - 1) {
      subarrays.push({
        id: subarrays.length,
        elements: subArray,
      });
      subArray = [];
    }
    console.log(subarrays);
    return subarrays;
  });

  return subarrays;
};
