import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import { apiSlice } from "../api/apiSlice";
import authSlice from "../features/auth/authSlice";
import newsSlice from "../features/news/newsSlice";
import sectionSlice from "../features/section/sectionSlice";
import themeSlice from "../features/theme/themeSlice";

export const store = configureStore({
  reducer: {
    section: sectionSlice,
    news: newsSlice,
    [apiSlice.reducerPath]: apiSlice.reducer,
    auth: authSlice,
    theme: themeSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
});

setupListeners(store.dispatch);
