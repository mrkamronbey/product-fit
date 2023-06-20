import { configureStore } from "@reduxjs/toolkit";
import RequestSlice from "./request";

export const store = configureStore({
  reducer: {
    requ: RequestSlice,
  },
});
