import { createSlice } from "@reduxjs/toolkit";

const expenseSlice = createSlice({
  name: "expense",
  initialState: {
    expenses: [],
  },
  reducers: {
    addExpense: (state, action) => {
      state.expenses.push(action.payload.expense);
    },
    removeExpense: (state, action) => {
      state.expenses.splice(state.expenses.indexOf(action.payload.expense), 1);
    },
  },
});

export const addExpense = expenseSlice.actions.addExpense;
export const removeExpense = expenseSlice.actions.removeExpense;
export default expenseSlice.reducer;
