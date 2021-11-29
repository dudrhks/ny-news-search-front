import axios from "axios";

const BASE_URL = "https://api.nytimes.com/svc/search/v2";

const api = axios.create({
  baseURL: `${BASE_URL}`,
  headers: {
    accept: "application/json",
    "Content-Type": "application/json",
  },
});

export const newsApi = (params: { query: string; page: number }) =>
  api.get(
    `articlesearch.json?api-key=wTwRh7Blb0nUPWPWvHQCWVupJSoQBqeu&q=${params.query}&page=${params.page}`
  );
