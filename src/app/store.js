import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import newsSlice from "../features/news/newsSlice";
import { apiSlice } from "../api/apiSlice";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import sectionSlice from "../features/section/sectionSlice";

export const store = configureStore({
  reducer: {
    news: newsSlice,
    [apiSlice.reducerPath]: apiSlice.reducer,
    section: sectionSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
});

setupListeners(store.dispatch);
