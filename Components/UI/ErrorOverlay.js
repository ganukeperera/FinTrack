import { StyleSheet, View, Text } from "react-native";
import PrimaryButton from "./PrimaryButton";
import { Colors } from "../../util/Colors";

export default function ErrorOverlay({ message, onPress }) {
  return (
    <View style={styles.container}>
      <Text style={[styles.text, styles.title]}>Error has occurred!</Text>
      <Text style={styles.text}>{message}</Text>
      <PrimaryButton bgColor={Colors.primary500} onPress={onPress}>
        OK
      </PrimaryButton>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.primary700,
  },
  text: {
    color: "white",
    fontSize: 14,
    fontFamily: "open-sans",
    marginBottom: 10,
  },
  title: {
    fontSize: 20,
    fontFamily: "open-sans-bold",
    margin: 20,
  },
});
