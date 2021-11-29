import { PayloadAction } from "@reduxjs/toolkit";
import { takeLatest, put, call } from "redux-saga/effects";
import { newsApi } from "../../api";
import common from "./commonReducer";

// 뉴스 검색 불러오기
function* fetchGetNewsSearch(
  action: PayloadAction<{ query: string; page: number }>
) {
  const { page, query } = action.payload;
  try {
    let {
      data: {
        response: { docs },
      },
    } = yield call(newsApi, action.payload);

    yield put(
      common.actions.GET_NEWS_SEARCH_SUCCESS({ newsList: docs, page, query })
    );
  } catch (error: any) {
    if (error.response.status === 429) alert("잠시후 다시 시도 해주세요");
  }
}

//뉴스 추가 불러오기
function* fetchGetNewsMore(
  action: PayloadAction<{ query: string; page: number }>
) {
  const { page } = action.payload;
  try {
    let {
      data: {
        response: { docs },
      },
    } = yield call(newsApi, action.payload);

    yield put(common.actions.GET_NEWS_MORE_SUCCESS({ newsList: docs, page }));
  } catch (error: any) {
    if (error.response.status === 429) alert("잠시후 다시 시도 해주세요");
  }
}

function* commonSagaWatcher() {
  yield takeLatest(common.actions.GET_NEWS_SEARCH, fetchGetNewsSearch);
  yield takeLatest(common.actions.GET_NEWS_MORE, fetchGetNewsMore);
}

export default commonSagaWatcher;
