import { Pressable, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function IconButton({ name, color, onPress, size }) {
  return (
    <Pressable
      style={({ pressed }) => pressed && styles.press}
      onPress={onPress}
    >
      <Ionicons name={name} color={color} size={size}></Ionicons>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  press: {
    opacity: 0.7,
  },
});
