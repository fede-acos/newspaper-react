import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
const API_KEY = `api-key=${import.meta.env.VITE_NEW_YORK_API_KEY}`;
export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.nytimes.com/svc/topstories/v2",
  }),
  endpoints: (builder) => ({
    getNews: builder.query({
      query: (section = "world") => `/${section}.json?${API_KEY}`,
    }),
  }),
});

export const { useGetNewsQuery } = apiSlice;
