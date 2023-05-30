import { createSlice } from "@reduxjs/toolkit";

export const DummyData = [
  {
    id: "e1",
    description: "A pair of trousers",
    amount: 89.29,
    date: "2022-01-05",
  },
  {
    id: "e2",
    description: "A pair of trousers2",
    amount: 89.29,
    date: "2023-05-23",
  },
  {
    id: "e3",
    description: "A pair of trousers3",
    amount: 89.29,
    date: "2023-05-23",
  },
  {
    id: "e4",
    description: "A pair of trousers4",
    amount: 89.29,
    date: "2023-05-20",
  },
  {
    id: "e5",
    description: "A pair of trousers5",
    amount: 89.29,
    date: "2023-05-20",
  },
  {
    id: "e6",
    description: "A pair of trousers6",
    amount: 89.29,
    date: "2023-05-20",
  },
  {
    id: "e7",
    description: "A pair of trousers5 A pair of trousers5A pair of trousers5",
    amount: 89.29,
    date: "2023-05-25",
  },
];

const expenseSlice = createSlice({
  name: "expense",
  initialState: {
    expenses: DummyData,
  },
  reducers: {
    addExpense: (state, action) => {
      state.expenses.push(action.payload.expense);
    },
    removeExpense: (state, action) => {
      const idArray = state.expenses.map((expense) => expense.id);
      console.log(action.payload.expense);
      const index = idArray.indexOf(action.payload.expense.id);

      state.expenses.splice(index, 1);
    },
    updateExpense: (state, action) => {
      state.expenses.splice(
        state.expenses.indexOf(action.payload.id),
        1,
        action.payload.expense
      );
    },
  },
});

export const addExpense = expenseSlice.actions.addExpense;
export const updateExpense = expenseSlice.actions.updateExpense;
export const removeExpense = expenseSlice.actions.removeExpense;
export default expenseSlice.reducer;
