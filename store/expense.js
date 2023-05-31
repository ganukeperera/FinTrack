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
    setExpenses: (state, action) => {
      state.expenses = action.payload;
    },
    removeExpense: (state, action) => {
      const idArray = state.expenses.map((expense) => expense.id);
      const index = idArray.indexOf(action.payload.expense.id);

      state.expenses.splice(index, 1);
    },
    updateExpense: (state, action) => {
      const idArray = state.expenses.map((expense) => expense.id);
      const index = idArray.indexOf(action.payload.id);
      state.expenses.splice(index, 1, action.payload.expense);
    },
  },
});

export const addExpense = expenseSlice.actions.addExpense;
export const updateExpense = expenseSlice.actions.updateExpense;
export const removeExpense = expenseSlice.actions.removeExpense;
export const setExpenses = expenseSlice.actions.setExpenses;
export default expenseSlice.reducer;
