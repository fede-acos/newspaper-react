import { createSlice } from "@reduxjs/toolkit";
import {
  filterEmptyNews,
  selectMainArticle,
} from "../../components/utilities/filterNews";
import { sideNewsArray } from "../../components/utilities/createSideNewsArray";

const initialState = {
  newsState: { news: [], mainNews: {}, sideNews: [] },
};

export const newsSlice = createSlice({
  name: "news",
  initialState,
  reducers: {
    saveNews: (state, action) => {
      const news = filterEmptyNews(action.payload.news);
      state.newsState.news = news;

      const mainNews = selectMainArticle(news);
      state.newsState.mainNews = mainNews;

      const sideNews = sideNewsArray(news, mainNews);
      state.newsState.sideNews = sideNews;
    },
  },
});

export const { saveNews } = newsSlice.actions;

export default newsSlice.reducer;
