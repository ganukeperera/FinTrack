import { View, StyleSheet } from "react-native";
import PrimaryButton from "../Components/UI/PrimaryButton";
import { Colors } from "../util/Colors";
import IconButton from "../Components/UI/IconButton";
import { useLayoutEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeExpense } from "../store/expense";
import ExpenseForm from "../Components/ManageExpense/ExpenseForm";

export default function ManageExpenseScreen({ route, navigation }) {
  const editedExpenseId = route.params?.expenseId;

  const isEditing = !!editedExpenseId;
  const allExpenses = useSelector((state) => state.reducer.expenses);
  const dispatch = useDispatch();

  useLayoutEffect(() => {
    navigation.setOptions({
      title: isEditing ? "Update Expense" : "Add Expense",
    });
  }, [navigation, isEditing]);

  function deleteExpenseHandler() {
    const expense = allExpenses.filter((expense) => {
      // console.log(expense.id + " " + editedExpenseId);
      return expense.id === editedExpenseId;
    });
    console.log(expense[0].id);
    dispatch(removeExpense({ expense: expense[0] }));
    navigation.goBack();
  }

  function confirmHandler() {
    navigation.goBack();
  }

  function cancelHandler() {
    navigation.goBack();
  }

  return (
    <View style={styles.container}>
      <ExpenseForm></ExpenseForm>
      <View style={styles.buttonsOuterContainer}>
        <View style={styles.buttonContainer}>
          <PrimaryButton bgColor={Colors.primary800} onPress={cancelHandler}>
            Cancel
          </PrimaryButton>
        </View>
        <View style={styles.buttonContainer}>
          <PrimaryButton bgColor={Colors.primary500} onPress={confirmHandler}>
            {isEditing ? "Update" : "Add"}
          </PrimaryButton>
        </View>
      </View>
      {isEditing ? (
        <View style={styles.iconButtonOuterContainer}>
          <View style={styles.iconButtonContainer}>
            <IconButton
              name="trash"
              color={Colors.error500}
              size={36}
              onPress={deleteExpenseHandler}
            />
          </View>
        </View>
      ) : (
        <View></View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.primary800,
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
  iconButtonOuterContainer: {
    borderTopColor: "white",
    borderTopWidth: 2,
    marginHorizontal: 20,
    paddingTop: 20,
    alignItems: "center",
  },
  iconButtonContainer: {},
});
