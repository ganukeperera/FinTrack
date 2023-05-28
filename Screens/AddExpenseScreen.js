import { View, StyleSheet } from "react-native";
import PrimaryButton from "../Components/UI/PrimaryButton";
import { Colors } from "../util/Colors";

export default function AddExpenseScreen({ navigation }) {
  function cancelHandler() {
    navigation.goBack();
  }
  function addExpenseHandler() {}
  return (
    <View style={styles.container}>
      <View style={styles.buttonOuterContainer}>
        <View style={styles.buttonContainer}>
          <PrimaryButton bgColor={Colors.primary800} onPress={cancelHandler}>
            Cancel
          </PrimaryButton>
        </View>
        <View style={styles.buttonContainer}>
          <PrimaryButton
            bgColor={Colors.primary500}
            onPress={addExpenseHandler}
          >
            Add
          </PrimaryButton>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.primary800,
    flex: 1,
  },
  buttonOuterContainer: {
    flexDirection: "row",
    justifyContent: "center",
    flex: 1,
    margin: 20,
  },
  buttonContainer: {
    margin: 5,
    flex: 1,
    maxWidth: 150,
  },
});
