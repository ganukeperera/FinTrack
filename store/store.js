import { configureStore } from "@reduxjs/toolkit";
import expenseSlice from "./expense";

export const store = configureStore({
  reducer: {
    reducer: expenseSlice,
  },
});
