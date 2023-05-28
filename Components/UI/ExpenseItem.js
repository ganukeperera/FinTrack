import { View, Text, StyleSheet, Pressable } from "react-native";
import { Colors } from "../../util/Colors";
import { useNavigation } from "@react-navigation/native";

export default function ExpenseItem({ title, subTitle, value }) {
  const navigation = useNavigation();
  function updateHandler() {
    navigation.navigate("UpdateExpense");
  }
  return (
    <View style={styles.container}>
      <Pressable
        style={({ pressed }) =>
          pressed
            ? [styles.pressNormal, styles.pressPressed]
            : styles.pressNormal
        }
        onPress={updateHandler}
      >
        <View style={styles.titlesContainer}>
          <Text style={styles.titleText}>{title}</Text>
          <Text style={styles.subTitleText}>{subTitle}</Text>
        </View>
        <View style={styles.valueOuterContainer}>
          <View style={styles.valueContainer}>
            <Text style={styles.valueText}>{value.toFixed(2)}</Text>
          </View>
        </View>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    borderRadius: 8,
    elevation: 4,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.5,
    shadowRadius: 8,
  },
  pressNormal: {
    paddingHorizontal: 15,
    paddingVertical: 8,
    backgroundColor: Colors.primary500,
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 8,
    flex: 1,
  },
  pressPressed: {
    opacity: 0.5,
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
