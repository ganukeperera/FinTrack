import { View, Text, StyleSheet } from "react-native";
import Input from "./Input";
import { useState } from "react";
import PrimaryButton from "../UI/PrimaryButton";
import { Colors } from "../../util/Colors";
import { useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import { addExpense, updateExpense } from "../../store/expense";

export default function ExpenseForm({ submitBtnTitle, onSubmit, onCancel }) {
  const [expenseAmount, setAmount] = useState("");
  const [expenseDate, setExpenseDate] = useState("");
  const [expenseDescription, setExpenseDescription] = useState("");

  const dispatch = useDispatch();

  function amountHandler(amount) {
    setAmount(amount);
  }
  function dateHandler(date) {
    setExpenseDate(date);
  }
  function descriptionHandler(desciption) {
    setExpenseDescription(desciption);
  }

  const navigation = useNavigation();
  console.log(submitBtnTitle);
  function confirmHandler() {
    const expense = {
      description: expenseDescription,
      amount: +expenseAmount,
      date: expenseDate,
    };
    onSubmit(expense);
  }

  return (
    <View style={styles.form}>
      <Text style={styles.title}>Your Expense</Text>
      <View style={styles.amountAndDateContainer}>
        <View style={styles.amountAndDate}>
          <Input
            label="Amount"
            inputFieldConfgs={{
              keyboardType: "decimal-pad",
              onChangeText: amountHandler,
              value: expenseAmount,
            }}
          ></Input>
        </View>
        <View style={styles.amountAndDate}>
          <Input
            label="Date"
            inputFieldConfgs={{
              keyboardType: "numeric",
              placeholder: "YYYY-MM-DD",
              maxLength: 10,
              onChangeText: dateHandler,
              value: expenseDate,
            }}
          ></Input>
        </View>
      </View>

      <Input
        label="Description"
        inputFieldConfgs={{
          keyboardType: "default",
          multiline: true,
          textAlignVertical: "top",
          onChangeText: descriptionHandler,
          value: expenseDescription,
        }}
      ></Input>
      <View style={styles.buttonsOuterContainer}>
        <View style={styles.buttonContainer}>
          <PrimaryButton bgColor={Colors.primary800} onPress={onCancel}>
            Cancel
          </PrimaryButton>
        </View>
        <View style={styles.buttonContainer}>
          <PrimaryButton bgColor={Colors.primary500} onPress={confirmHandler}>
            {submitBtnTitle}
          </PrimaryButton>
        </View>
      </View>
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
  buttonsOuterContainer: {
    flexDirection: "row",
    justifyContent: "center",
    margin: 20,
  },
  buttonContainer: {
    margin: 5,
    flex: 1,
    maxWidth: 150,
  },
});
