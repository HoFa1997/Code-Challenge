import { configureStore } from "@reduxjs/toolkit";
import titleReducer from "./titleSlice";

export const store = configureStore({
  reducer: {
    title: titleReducer,
  },
});

export type StoreState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
