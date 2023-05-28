import { View, StyleSheet, FlatList } from "react-native";
import HeaderCard from "./HeaderCard";
import ExpenseItem from "./ExpenseItem";
import ExpenseList from "./ExpenseList";

export default function ExpensesOutput({ expenses, expensesPeriod }) {
  const totalExpenses = expenses.reduce((sum, expense) => {
    return sum + expense.amount;
  }, 0);

  return (
    <>
      <HeaderCard
        titleLeft={expensesPeriod}
        titleRight={"$" + totalExpenses}
      ></HeaderCard>
      <ExpenseList expenseData={expenses}></ExpenseList>
    </>
  );
}

const styles = StyleSheet.create({
  listContainer: {
    flex: 1,
    marginTop: 5,
    // marginBottom: 10,
  },
});
