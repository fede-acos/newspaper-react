import { createSlice } from "@reduxjs/toolkit";
import {
  filterEmptyNews,
  selectMainArticle,
} from "../../componets/utilities/filterNews";

import { sideNewsArray } from "../../componets/utilities/createSideNewsArray";
import { createRelatedNewsarrays } from "../../componets/utilities/createRelatedNewsArray";

const initialState = {
  newsState: {
    news: [],
    mainNews: {},
    sideNews: [],
    relatedNews: [],
  },
};

export const newsSlice = createSlice({
  name: "news",
  initialState,
  reducers: {
    saveNews: (state, action) => {
      const filteredNews = filterEmptyNews(action.payload.news);
      const mainNews = selectMainArticle(filteredNews);
      const sideNews = sideNewsArray(filteredNews, mainNews);
      const relatedNews = createRelatedNewsarrays(
        filteredNews,
        sideNews,
        mainNews
      );

      state.newsState.sideNews = sideNews;
      state.newsState.news = filteredNews;
      state.newsState.mainNews = mainNews;
      state.newsState.relatedNews = relatedNews;
    },
    resetNews: (state) => {
      state.newsState = {};
    },
  },
});

export const { saveNews, resetNews } = newsSlice.actions;

export default newsSlice.reducer;
