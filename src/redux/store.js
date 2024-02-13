import { configureStore } from "@reduxjs/toolkit";
import pathReducer from "./reducers/pathSlice";
import userReducer from "./reducers/userSlice";

export const store = configureStore({
  reducer: {
    path: pathReducer,
    user: userReducer
  },
});
