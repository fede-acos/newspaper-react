import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  news: {},
};

export const newsSlice = createSlice({
  name: "news",
  initialState,
  reducers: {
    saveNews: (state, action) => {
      state = action.payload;
    },
    resetNews: (state) => {
      state = {};
    },
  },
});

export const { saveNews, resetNews } = newsSlice.actions;

export default newsSlice.reducer;
