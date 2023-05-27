import { configureStore } from "@reduxjs/toolkit";
import expenseSlice from "./expense";

export default configureStore({
  reducer: {
    reducer: expenseSlice,
  },
});
