import axios from "axios";
import { useQuery } from "@tanstack/react-query";

const API_KEY = "api-key=0gXtaZrp8R4zWDtkUXoV7M5teGuME70i";
const BASE_URL = "https://api.nytimes.com/svc/topstories/v2";

const fetchNews = (section) => {
  return axios.get(`${BASE_URL}/${section}.json?${API_KEY}`);
};

export function useNewsData(section = "world") {
  const { data, error, isLoading, isError } = useQuery(["api"], async () => {
    const response = await fetchNews(section);
    console.log(section);
    return response;
  });

  return { data, error, isLoading, isError };
}
