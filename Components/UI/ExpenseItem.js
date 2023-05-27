import { View, Text, StyleSheet } from "react-native";
import { Colors } from "../../util/Colors";

export default function ExpenseItem({ title, subTitle, value }) {
  return (
    <View style={styles.container}>
      <View style={styles.titlesContainer}>
        <Text style={styles.titleText}>{title}</Text>
        <Text style={styles.subTitleText}>{subTitle}</Text>
      </View>
      <View style={styles.valueOuterContainer}>
        <View style={styles.valueContainer}>
          <Text style={styles.valueText}>{value}</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: Colors.primary500,
    paddingHorizontal: 15,
    paddingVertical: 8,
    borderRadius: 8,
    elevation: 4,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.5,
    shadowRadius: 8,
  },
  titlesContainer: {
    flex: 3,
  },
  titleText: {
    color: "white",
    fontFamily: "open-sans-bold",
    fontSize: 18,
    paddingVertical: 4,
  },
  subTitleText: {
    color: "white",
    fontFamily: "open-sans",
    fontSize: 16,
    paddingVertical: 4,
  },
  valueOuterContainer: {
    flex: 1,
    alignItems: "flex-end",
  },
  valueContainer: {
    textAlign: "center",
    backgroundColor: "white",
    borderRadius: 8,
    width: 80,
    paddingVertical: 10,
  },
  valueText: {
    color: Colors.primary400,
    fontSize: 18,
    fontFamily: "open-sans-bold",
    textAlign: "center",
  },
});
