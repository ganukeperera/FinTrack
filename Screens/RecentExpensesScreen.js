import { View, StyleSheet, FlatList } from "react-native";
import { Colors } from "../util/Colors";
import ExpensesOutput from "../Components/UI/ExpensesOutput";
import { useSelector } from "react-redux";

//adding dummyData

export default function RecentExpensesScreen() {
  const allExpenses = useSelector((state) => state.reducer.expenses);
  const recentExpenses = allExpenses.filter((expense) => {
    const today = new Date();
    const gap = Math.ceil(
      (today.getTime() - new Date(expense.date)) / (1000 * 60 * 60 * 24)
    );
    return gap < 8;
  });

  return (
    <View style={styles.container}>
      <ExpensesOutput
        expenses={recentExpenses}
        expensesPeriod="Last 7 Days"
        fallbackText="No recent items found"
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
  listContainer: {
    flex: 1,
    marginTop: 5,
    // marginBottom: 10,
  },
});
