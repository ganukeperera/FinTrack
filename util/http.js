import axios from "axios";

const url =
  "https://fintrack-d328e-default-rtdb.asia-southeast1.firebasedatabase.app";

export async function saveExpense(expense) {
  const response = await axios.post(url + "/expenses.json", expense);
  const id = response.data.name;
  console.log(id);
  return id;
}

export async function fetchExpenses() {
  const response = await axios.get(url + "/expenses.json");
  const expenses = [];
  for (const key in response.data) {
    const expense = {
      id: key,
      amount: response.data[key].amount,
      date: response.data[key].date,
      description: response.data[key].description,
    };
    expenses.push(expense);
  }
  return expenses;
}

export function updateRemoteExpense(id, expense) {
  return axios.put(url + "/expenses/" + id + ".json", expense);
}

export function deleteRemoteExpense(id) {
  return axios.delete(url + "/expenses/" + id + ".json");
}
