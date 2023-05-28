import { View, StyleSheet } from "react-native";
import { Colors } from "../util/Colors";
import ExpensesOutput from "../Components/UI/ExpensesOutput";
import { DummyData } from "./RecentExpensesScreen";

export default function AllExpensesScreen() {
  const recentExpenses = DummyData;
  return (
    <View style={styles.container}>
      <ExpensesOutput expenses={recentExpenses} expensesPeriod="Total" />
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
