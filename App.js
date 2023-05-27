import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { useCallback } from "react";
import { NavigationContainer } from "@react-navigation/native";
import AllExpensesScreen from "./Screens/AllExpensesScreen";
import RecentExpensesScreen from "./Screens/RecentExpensesScreen";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import { Colors } from "./util/Colors";
import IconButton from "./Components/UI/IconButton";
import store from "./store/store";
import { Provider } from "react-redux";

export default function App() {
  SplashScreen.preventAutoHideAsync();
  const [isFontsLoaded, error] = useFonts({
    "open-sans": require("./assets/fonts/OpenSans-Regular.ttf"),
    "open-sans-bold": require("./assets/fonts/OpenSans-Bold.ttf"),
  });

  const onLayoutRootView = useCallback(async () => {
    if (isFontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [isFontsLoaded]);

  const Tabs = createBottomTabNavigator();
  return (
    <View style={styles.container} onLayout={onLayoutRootView}>
      <StatusBar style="light"></StatusBar>

      <Provider store={store}>
        <NavigationContainer>
          <Tabs.Navigator
            screenOptions={{
              headerTintColor: "white",
              headerStyle: { backgroundColor: Colors.primary500 },
              tabBarStyle: { backgroundColor: Colors.primary500 },
              tabBarActiveTintColor: Colors.accent500,
              tabBarInactiveTintColor: "white",
              headerRight: () => <IconButton name="add" color="white" />,
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
        </NavigationContainer>
      </Provider>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
});

// <SafeAreaView style={styles.container} onLayout={onLayoutRootView}>
//   <StatusBar style="auto" />
//   <HeaderCard titleLeft="Last 7 Days" titleRight="$18.30"></HeaderCard>
//   <ExpenseItem
//     title="Pair of shoues"
//     subTitle="2021-03-04"
//     value="23.30"
//   ></ExpenseItem>
//   <PrimaryButton bgColor={Colors.primary500}>
//     <Ionicons name="md-remove-circle-outline" size={24} color="red" />
//   </PrimaryButton>
// </SafeAreaView>;
