import { createSlice } from "@reduxjs/toolkit";
import {
  filterEmptyNews,
  selectMainArticle,
} from "../../componets/utilities/filterNews";
import { paginate } from "../../componets/utilities/createRelatedNewsArray";

import { sideNewsArray } from "../../componets/utilities/createSideNewsArray";

const initialState = {
  news: [],
  mainNews: {},
  sideNews: [],
  resetNews: [],
};

export const newsSlice = createSlice({
  name: "news",
  initialState,
  reducers: {
    saveNews: (state, action) => {
      state.news = filterEmptyNews(action.payload.news);
    },
    saveMainNews: (state) => {
      const mainNews = selectMainArticle(state.news);
      state.mainNews = mainNews;
    },
    saveSideNews: (state) => {
      const sideNews = sideNewsArray(state.news, state.mainNews);
      state.sideNews = sideNews;
    },
  },
});

export const { saveNews, resetNews, saveMainNews, saveSideNews } =
  newsSlice.actions;

export default newsSlice.reducer;
