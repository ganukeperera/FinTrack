import { View, Text, StyleSheet } from "react-native";
import { Colors } from "../util/Colors";

export default function AllExpensesScreen() {
  return (
    <View style={styles.backgroundColor}>
      <Text>All Expenses</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.primary800,
  },
});
