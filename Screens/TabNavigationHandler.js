import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import AllExpensesScreen from "./AddExpenseScreen";
import RecentExpensesScreen from "./RecentExpensesScreen";
import IconButton from "../Components/UI/IconButton";
import { Ionicons } from "@expo/vector-icons";
import { Colors } from "../util/Colors";
import { useNavigation } from "@react-navigation/native";

export default function TabNavigationHandler() {
  const Tabs = createBottomTabNavigator();

  const navigation = useNavigation();
  function addExpenseHandler() {
    navigation.navigate("AddExpense");
  }

  return (
    <Tabs.Navigator
      initialRouteName="RecentExpenses"
      screenOptions={{
        headerTintColor: "white",
        headerStyle: { backgroundColor: Colors.primary500 },
        tabBarStyle: { backgroundColor: Colors.primary500 },
        tabBarActiveTintColor: Colors.accent500,
        tabBarInactiveTintColor: "white",
        headerRight: () => (
          <IconButton
            name="add"
            color="white"
            onPress={addExpenseHandler}
            size={24}
          />
        ),
      }}
    >
      <Tabs.Screen
        name="RecentExpenses"
        component={RecentExpensesScreen}
        options={{
          title: "Recent Expenses",
          tabBarIcon: ({ size, color }) => (
            <Ionicons name="time-outline" size={size} color={color} />
          ),
        }}
      ></Tabs.Screen>
      <Tabs.Screen
        name="AllExpenses"
        component={AllExpensesScreen}
        options={{
          title: "All Expenses",
          tabBarIcon: ({ size, color }) => (
            <Ionicons name="list" size={size} color={color} />
          ),
        }}
      ></Tabs.Screen>
    </Tabs.Navigator>
  );
}
