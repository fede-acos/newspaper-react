import { createSlice } from "@reduxjs/toolkit";
import {
  filterEmptyNews,
  selectMainArticle,
} from "../../componets/utilities/filterNews";

import { sideNewsArray } from "../../componets/utilities/createSideNewsArray";
import { paginate } from "../../componets/utilities/createRelatedNewsArray";

const initialState = {
  news: [],
  mainNews: {},
  sideNews: [],
};

export const newsSlice = createSlice({
  name: "news",
  initialState,
  reducers: {
    saveNews: (state, action) => {
      state.news = filterEmptyNews(action.payload.news);
    },
    saveMainNews: (state, action) => {
      const filteredNews = filterEmptyNews(action.payload.news);
      const mainNews = selectMainArticle(filteredNews);

      state.newsState.mainNews = mainNews;
    },
    saveSideNews: (state, action) => {
      const filteredNews = filterEmptyNews(action.payload.news);
      const mainNews = selectMainArticle(filteredNews);
      const sideNews = sideNewsArray(filteredNews, mainNews);

      state.sideNews = sideNews;
    },
  },
});

export const { saveNews, resetNews } = newsSlice.actions;

export default newsSlice.reducer;
