import { View, Pressable, Text, StyleSheet } from "react-native";
import { Colors } from "../../util/Colors";

export default function PrimaryButton({ children, bgColor, onPress }) {
  return (
    <View style={styles.container}>
      <Pressable
        style={({ pressed }) =>
          pressed
            ? [
                styles.pressNormal,
                { backgroundColor: bgColor },
                styles.pressPressed,
              ]
            : [styles.pressNormal, { backgroundColor: bgColor }]
        }
        onPress={onPress}
      >
        <Text style={styles.text}>{children}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  pressNormal: {
    backgroundColor: Colors.primary500,
    borderRadius: 8,
  },
  pressPressed: {
    opacity: 0.5,
  },
  text: {
    textAlign: "center",
    color: "white",
    fontSize: 16,
    fontFamily: "open-sans-bold",
    margin: 10,
  },
});
