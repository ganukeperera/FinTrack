import { View, StyleSheet, FlatList } from "react-native";
import { Colors } from "../util/Colors";
import ExpensesOutput from "../Components/UI/ExpensesOutput";

//adding dummyData
export const DummyData = [
  {
    id: "e1",
    description: "A pair of trousers",
    amount: 89.29,
    date: new Date("2022-01-05"),
  },
  {
    id: "e2",
    description: "A pair of trousers2",
    amount: 89.29,
    date: new Date("2022-01-05"),
  },
  {
    id: "e3",
    description: "A pair of trousers3",
    amount: 89.29,
    date: new Date("2022-01-05"),
  },
  {
    id: "e4",
    description: "A pair of trousers4",
    amount: 89.29,
    date: new Date("2022-01-05"),
  },
  {
    id: "e5",
    description: "A pair of trousers5",
    amount: 89.29,
    date: new Date("2022-01-05"),
  },
  {
    id: "e6",
    description: "A pair of trousers5",
    amount: 89.29,
    date: new Date("2022-01-05"),
  },
  {
    id: "e7",
    description: "A pair of trousers5 A pair of trousers5A pair of trousers5",
    amount: 89.29,
    date: new Date("2022-01-05"),
  },
];

const recentExpenses = DummyData;

export default function RecentExpensesScreen() {
  return (
    <View style={styles.container}>
      <ExpensesOutput expenses={recentExpenses} expensesPeriod="Last 7 Days" />
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
