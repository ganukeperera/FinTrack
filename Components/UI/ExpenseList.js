import { View, FlatList, StyleSheet } from "react-native";
import ExpenseItem from "./ExpenseItem";

export default function ExpenseList({ expenseData }) {
  return (
    <View style={styles.listContainer}>
      <FlatList
        data={expenseData}
        renderItem={(itemData) => (
          <ExpenseItem
            id={itemData.item.id}
            title={itemData.item.description}
            subTitle={itemData.item.date}
            value={itemData.item.amount}
          ></ExpenseItem>
        )}
        keyExtractor={(item) => item.id}
      ></FlatList>
    </View>
  );
}

const styles = StyleSheet.create({
  listContainer: {
    flex: 1,
    marginTop: 5,
  },
});
