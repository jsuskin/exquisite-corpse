import { configureStore } from "@reduxjs/toolkit";
import pathReducer from "./reducers/pathSlice";

export const store = configureStore({
  reducer: {
    path: pathReducer,
  },
});
