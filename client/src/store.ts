import thunk from "redux-thunk";
import { configureStore } from "@reduxjs/toolkit";

import { rootReducer } from "./reducers/index";
import { useDispatch } from "react-redux";

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false
    }).concat(thunk),
});

export type AppDispatch = typeof store.dispatch
export const useAppDispatch: () => AppDispatch = () => useDispatch<AppDispatch>();


export default store;
