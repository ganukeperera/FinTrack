import { ActivityIndicator, View, StyleSheet } from "react-native";
import { Colors } from "../../util/Colors";

export default function LaoadingOverlay() {
  return (
    <View style={styles.container}>
      <ActivityIndicator color="white" size="large"></ActivityIndicator>
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
});
