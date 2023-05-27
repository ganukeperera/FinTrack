import { FlatList, View, StyleSheet } from "react-native";
import { ExpenseItem } from "./ExpenseItem";

export default function ExpenseList({ data }) {
  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={(itemData) => (
          <ExpenseItem
            title={itemData.item.description}
            subTitle="2020" //{itemData.item.date.toString}
            value={itemData.item.amout}
          ></ExpenseItem>
        )}
        keyExtractor={(item) => item.id}
      ></FlatList>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
