import { combineReducers } from "redux";

import { common, commonSaga } from "./common";
import { all, fork } from "@redux-saga/core/effects";
import { TypedUseSelectorHook, useSelector } from "react-redux";

// 레듀서
export const rootReducer = combineReducers({
  common: common.reducer,
});

// 사가
export function* rootSaga() {
  yield all([fork(commonSaga)]);
}

//액션
export const Actions = {
  ...common.actions,
};

// useSelector 타입스크립트
export type RootState = ReturnType<typeof rootReducer>;

export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;
