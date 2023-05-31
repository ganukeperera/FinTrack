import { View, Text, StyleSheet } from "react-native";
import Input from "./Input";
import { useState } from "react";
import PrimaryButton from "../UI/PrimaryButton";
import { Colors } from "../../util/Colors";
import { useNavigation } from "@react-navigation/native";

let formIsValid = true;

export default function ExpenseForm({
  submitBtnTitle,
  onSubmit,
  onCancel,
  defaultValues,
}) {
  const [expenseAmount, setAmount] = useState({
    amount: defaultValues ? defaultValues.amount.toString() : "",
    isValid: true,
  });
  const [expenseDate, setExpenseDate] = useState({
    date: defaultValues ? defaultValues.date : "",
    isValid: true,
  });
  const [expenseDescription, setExpenseDescription] = useState({
    description: defaultValues ? defaultValues.description : "",
    isValid: true,
  });

  function amountHandler(amount) {
    setAmount({ amount: amount, isValid: true });
  }
  function dateHandler(date) {
    setExpenseDate({ date: date, isValid: true });
  }
  function descriptionHandler(desciption) {
    setExpenseDescription({ description: desciption, isValid: true });
  }

  const navigation = useNavigation();
  function confirmHandler() {
    const expense = {
      description: expenseDescription.description,
      amount: +expenseAmount.amount,
      date: expenseDate.date,
    };

    const amountIsValid = !isNaN(expense.amount) && expense.amount > 0;
    const dateIsValid = new Date(expense.date).toString() !== "Invalid Date";
    const descriptionIsValid = expense.description.trim().length > 0;

    if (!amountIsValid || !dateIsValid || !descriptionIsValid) {
      formIsValid = false;
      setAmount((curValue) => {
        return { amount: curValue.amount, isValid: amountIsValid };
      });
      setExpenseDescription((curValue) => {
        return {
          description: curValue.description,
          isValid: descriptionIsValid,
        };
      });
      setExpenseDate((curValue) => {
        return { date: curValue.date, isValid: dateIsValid };
      });
    } else {
      formIsValid = true;
      onSubmit(expense);
    }
  }

  return (
    <View style={styles.form}>
      <Text style={styles.title}>Your Expense</Text>
      <View style={styles.amountAndDateContainer}>
        <View style={styles.amountAndDate}>
          <Input
            label="Amount"
            isValid={expenseAmount.isValid}
            inputFieldConfgs={{
              keyboardType: "decimal-pad",
              onChangeText: amountHandler,
              value: expenseAmount.amount,
            }}
          ></Input>
        </View>
        <View style={styles.amountAndDate}>
          <Input
            label="Date"
            isValid={expenseDate.isValid}
            inputFieldConfgs={{
              keyboardType: "numeric",
              placeholder: "YYYY-MM-DD",
              maxLength: 10,
              onChangeText: dateHandler,
              value: expenseDate.date,
            }}
          ></Input>
        </View>
      </View>

      <Input
        label="Description"
        isValid={expenseDescription.isValid}
        inputFieldConfgs={{
          keyboardType: "default",
          multiline: true,
          textAlignVertical: "top",
          onChangeText: descriptionHandler,
          value: expenseDescription.description,
        }}
      ></Input>
      {!formIsValid && (
        <Text style={styles.validationText}>Please add valid input!</Text>
      )}

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
  validationText: {
    color: Colors.error500,
    textAlign: "left",
    fontFamily: "open-sans-bold",
    fontSize: 12,
    margin: 5,
  },
});
