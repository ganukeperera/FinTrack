import { Text, StyleSheet } from "react-native";
import HeaderCard from "./HeaderCard";
import ExpenseItem from "./ExpenseItem";
import ExpenseList from "./ExpenseList";

export default function ExpensesOutput({
  expenses,
  expensesPeriod,
  fallbackText,
}) {
  const totalExpenses = expenses.reduce((sum, expense) => {
    return sum + expense.amount;
  }, 0);

  let content = <Text style={styles.infoText}>{fallbackText}</Text>;
  console.log(expenses.length);
  if (expenses.length > 0) {
    content = <ExpenseList expenseData={expenses}></ExpenseList>;
  }

  return (
    <>
      <HeaderCard
        titleLeft={expensesPeriod}
        titleRight={"$" + totalExpenses}
      ></HeaderCard>
      {content}
    </>
  );
}

const styles = StyleSheet.create({
  listContainer: {
    flex: 1,
    marginTop: 5,
    // marginBottom: 10,
  },
  infoText: {
    color: "white",
    marginTop: 20,
    textAlign: "center",
    fontSize: 18,
    fontFamily: "open-sans",
  },
});
