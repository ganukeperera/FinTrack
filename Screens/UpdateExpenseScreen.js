import { View, StyleSheet } from "react-native";
import PrimaryButton from "../Components/UI/PrimaryButton";
import { Colors } from "../util/Colors";
import IconButton from "../Components/UI/IconButton";

export default function UpdateExpenseScreen({ navigation }) {
  function cancelHandler() {
    navigation.goBack();
  }
  function addExpenseHandler() {}
  return (
    <View style={styles.container}>
      <View style={styles.buttonsOuterContainer}>
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
      <View style={styles.iconButtonOuterContainer}>
        <View style={styles.iconButtonContainer}>
          <IconButton name="trash-bin-outline" color="red" size={30} />
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
