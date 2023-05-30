import { View, StyleSheet } from "react-native";
import { Colors } from "../util/Colors";
import IconButton from "../Components/UI/IconButton";
import { useLayoutEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeExpense } from "../store/expense";
import ExpenseForm from "../Components/ManageExpense/ExpenseForm";
import { addExpense, updateExpense } from "../store/expense";

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
      return expense.id === editedExpenseId;
    });
    dispatch(removeExpense({ expense: expense[0] }));
    navigation.goBack();
  }
  function confirmHandler(expensedata) {
    if (isEditing) {
      dispatch(
        updateExpense({
          id: editedExpenseId,
          expense: { ...expensedata, id: editedExpenseId },
        })
      );
    } else {
      dispatch(addExpense({ expense: { ...expensedata, id: Date.now() } }));
    }
    navigation.goBack();
  }

  function cancelHandler() {
    navigation.goBack();
  }
  const defaultValues = isEditing
    ? allExpenses.filter((expense) => expense.id === editedExpenseId)
    : null;
  return (
    <View style={styles.container}>
      <ExpenseForm
        submitBtnTitle={isEditing ? "Update" : "Add"}
        onSubmit={confirmHandler}
        onCancel={cancelHandler}
        defaultValues={defaultValues ? defaultValues[0] : null}
      ></ExpenseForm>

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
  iconButtonOuterContainer: {
    borderTopColor: "white",
    borderTopWidth: 2,
    marginHorizontal: 20,
    paddingTop: 20,
    alignItems: "center",
  },
  iconButtonContainer: {},
});
