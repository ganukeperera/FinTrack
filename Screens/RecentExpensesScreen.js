import { View, StyleSheet, FlatList } from "react-native";
import { Colors } from "../util/Colors";
import ExpensesOutput from "../Components/UI/ExpensesOutput";
import { useSelector, useDispatch } from "react-redux";
import { fetchExpenses } from "../util/http";
import { useEffect, useState } from "react";
import { setExpenses } from "../store/expense";
import LaoadingOverlay from "../Components/UI/LoadingOverlay";
import ErrorOverlay from "../Components/UI/ErrorOverlay";

//adding dummyData

export default function RecentExpensesScreen() {
  const allExpenses = useSelector((state) => state.reducer.expenses);
  const [isFetching, setIsFetching] = useState(true);
  const [error, setError] = useState();

  const dispatch = useDispatch();

  useEffect(() => {
    async function getData() {
      setIsFetching(true);
      try {
        const data = await fetchExpenses();
        dispatch(setExpenses(data.reverse()));
      } catch (error) {
        setError(error);
      }
      setIsFetching(false);
    }
    getData();
  }, []);

  function errorHandler() {
    setError(null);
  }

  if (error && !isFetching) {
    return (
      <ErrorOverlay
        message="Could not update the change. Please try again later!"
        onPress={errorHandler}
      ></ErrorOverlay>
    );
  }

  if (isFetching) {
    return <LaoadingOverlay></LaoadingOverlay>;
  }

  const recentExpenses = allExpenses.filter((expense) => {
    const today = new Date();
    const gap = Math.ceil(
      (today.getTime() - new Date(expense.date)) / (1000 * 60 * 60 * 24)
    );
    return gap < 8;
  });

  return (
    <View style={styles.container}>
      <ExpensesOutput
        expenses={recentExpenses}
        expensesPeriod="Last 7 Days"
        fallbackText="No recent items found"
      />
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
