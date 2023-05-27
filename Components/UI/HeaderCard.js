import { View, Text, StyleSheet } from "react-native";
import { Colors } from "../../util/Colors";

export default function HeaderCard({ titleLeft, titleRight }) {
  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.textLeft}>{titleLeft}</Text>
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.textRight}>{titleRight}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: Colors.primary50,
    borderWidth: 1,
    borderColor: Colors.primary200,
    borderRadius: 8,
    padding: 6,
    alignItems: "center",
    elevation: 4,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.5,
    shadowRadius: 8,
  },
  textContainer: {
    flex: 1,
  },
  textLeft: {
    color: Colors.primary400,
    textAlign: "left",
    fontFamily: "open-sans",
    fontSize: 16,
  },
  textRight: {
    color: Colors.primary400,
    textAlign: "right",
    fontFamily: "open-sans-bold",
    fontSize: 20,
  },
});
