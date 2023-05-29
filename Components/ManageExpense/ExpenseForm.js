import { View, Text, StyleSheet } from "react-native";
import Input from "./Input";
import { useState } from "react";

export default function ExpenseForm() {
  const [expenseAmount, setAmount] = useState("");
  const [expenseDate, setExpenseDate] = useState("");
  const [expenseDescription, setExpenseDescription] = useState("");

  function amountHandler(amount) {}
  function dateHandler(date) {}
  function descriptionHandler(desciption) {}
  return (
    <View style={styles.form}>
      <Text style={styles.title}>Your Expense</Text>
      <View style={styles.amountAndDateContainer}>
        <View style={styles.amountAndDate}>
          <Input
            label="Amount"
            inputFieldConfgs={{ keyboardType: "decimal-pad" }}
            onChangeText={amountHandler}
            value={expenseAmount}
          ></Input>
        </View>
        <View style={styles.amountAndDate}>
          <Input
            label="Date"
            inputFieldConfgs={{
              keyboardType: "numeric",
              placeholder: "YYYY-MM-DD",
              maxLength: 10,
            }}
            onChangeText={dateHandler}
            value={expenseDate}
          ></Input>
        </View>
      </View>

      <Input
        label="Description"
        inputFieldConfgs={{
          keyboardType: "default",
          multiline: true,
          textAlignVertical: "top",
        }}
        onChangeText={descriptionHandler}
        value={expenseDescription}
      ></Input>
    </View>
  );
}

const styles = StyleSheet.create({
  form: {
    paddingHorizontal: 24,
  },
  title: {
    marginTop: 100,
    fontSize: 24,
    fontFamily: "open-sans-bold",
    color: "white",
    textAlign: "center",
    marginBottom: 20,
  },
  amountAndDateContainer: {
    flexDirection: "row",
  },
  amountAndDate: {
    flex: 1,
  },
});
