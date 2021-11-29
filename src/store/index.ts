import { composeWithDevTools } from "redux-devtools-extension";
import { applyMiddleware, createStore, compose } from "redux";
import createSagaMiddleware from "redux-saga";
import { rootReducer, rootSaga, RootState } from "../modules";
import autoMergeLevel2 from "redux-persist/es/stateReconciler/autoMergeLevel2";
import persistStore from "redux-persist/es/persistStore";
import persistReducer from "redux-persist/es/persistReducer";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root",
  storage,
  blacklist: ["nav"],
  stateReconciler: autoMergeLevel2,
};

const persistedReducer = persistReducer<RootState>(persistConfig, rootReducer);

const sagaMiddleware = createSagaMiddleware();

const enhancer =
  process.env.NODE_ENV === "production"
    ? compose(applyMiddleware(...[sagaMiddleware]))
    : composeWithDevTools(applyMiddleware(...[sagaMiddleware]));

export const store: any = createStore(persistedReducer, enhancer);

export const persistor = persistStore(store);

sagaMiddleware.run(rootSaga);
