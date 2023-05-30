import { View, Text, TextInput, StyleSheet } from "react-native";
import { Colors } from "../../util/Colors";

export default function Input({ label, isValid, inputFieldConfgs }) {
  const style = [styles.input];
  if (!isValid) {
    style.push(styles.inputInavlid);
  }
  if (inputFieldConfgs["multiline"] == true) {
    style.push(styles.inputMultiline);
  }
  return (
    <View style={styles.container}>
      <Text style={[styles.text, !isValid && styles.textInavlid]}>{label}</Text>
      <TextInput style={style} {...inputFieldConfgs} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 5,
  },
  text: {
    color: "white",
    fontSize: 12,
    fontFamily: "open-sans",
    paddingVertical: 10,
  },
  textInavlid: {
    color: Colors.error500,
  },
  input: {
    backgroundColor: "white",
    padding: 10,
    borderRadius: 6,
  },
  inputInavlid: {
    backgroundColor: Colors.error50,
  },
  inputMultiline: {
    height: 100,
  },
});
