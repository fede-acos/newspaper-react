import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  newsState: {
    news: [],
    mainNews: {},
  },
};

export const newsSlice = createSlice({
  name: "news",
  initialState,
  reducers: {
    saveNews: (state, action) => {
      state.newsState = action.payload;
    },
    resetNews: (state) => {
      state = {};
    },
  },
});

export const { saveNews, resetNews } = newsSlice.actions;

export default newsSlice.reducer;
