import { View, Text, TextInput, StyleSheet } from "react-native";

export default function Input({ label, inputFieldConfgs }) {
  const style = [styles.input];
  if (inputFieldConfgs["multiline"] == true) {
    style.push(styles.inputMultiline);
  }
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{label}</Text>
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
  input: {
    backgroundColor: "white",
    padding: 10,
    borderRadius: 6,
  },
  inputMultiline: {
    height: 100,
  },
});
