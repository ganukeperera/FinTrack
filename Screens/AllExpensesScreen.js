import { View, StyleSheet } from "react-native";
import { Colors } from "../util/Colors";
import ExpensesOutput from "../Components/UI/ExpensesOutput";
import { DummyData } from "./RecentExpensesScreen";
import { useSelector } from "react-redux";

export default function AllExpensesScreen() {
  const recentExpenses = useSelector((store) => store.reducer.expenses);
  return (
    <View style={styles.container}>
      <ExpensesOutput
        expenses={recentExpenses}
        expensesPeriod="Total"
        fallbackText="No expenses found!"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.primary800,
    flex: 1,
    paddingTop: 25,
    paddingBottom: 10,
    paddingHorizontal: 25,
  },
});
