import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type NewsInfo = {
  lead_paragraph: string;
  headline: {
    main: string;
  };
  _id: string;
  multimedia: { url?: string }[];
};

interface AuthState {
  newsList: NewsInfo[];
  page: number;
  query: string;
  bookmarkList: NewsInfo[];
}

const initialState: AuthState = {
  newsList: [],
  page: 0,
  query: "",
  bookmarkList: [],
};

const CommonSlice = createSlice({
  name: "COMMON",
  initialState,
  reducers: {
    GET_NEWS_SEARCH(
      state,
      action: PayloadAction<{ query: string; page: number }>
    ) {},
    GET_NEWS_SEARCH_SUCCESS(
      state,
      action: PayloadAction<{
        newsList: NewsInfo[];
        page: number;
        query: string;
      }>
    ) {
      const { newsList, query, page } = action.payload;
      state.newsList = newsList;
      state.query = query;
      state.page = page;
    },
    GET_NEWS_SEARCH_FAILURE(state, action) {},
    GET_NEWS_MORE(state, action) {},
    GET_NEWS_MORE_SUCCESS(
      state,
      action: PayloadAction<{
        newsList: NewsInfo[];
        page: number;
      }>
    ) {
      const { newsList, page } = action.payload;
      state.newsList = [...state.newsList, ...newsList];
      state.page = page;
    },
    GET_NEWS_MORE_FAILURE(state, action) {},
    ADD_BOOKMARK(state, action: PayloadAction<{ id: string }>) {
      const { id } = action.payload;

      const filter = state.newsList.filter((x) => x._id === id);
      state.bookmarkList.push(filter[0]);
    },
    DELETE_BOOKMARK(state, action: PayloadAction<{ id: string }>) {
      const { id } = action.payload;

      const filter = state.bookmarkList.filter((x) => x._id !== id);
      state.bookmarkList = filter;
    },
  },
});

export default CommonSlice;
