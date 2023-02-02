import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { filterEmptyNews } from "../components/utilities/filterNews";
const API_KEY = "api-key=0gXtaZrp8R4zWDtkUXoV7M5teGuME70i";

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
