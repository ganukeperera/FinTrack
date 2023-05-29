import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { useCallback } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Colors } from "./util/Colors";
import { store } from "./store/store";
import { Provider } from "react-redux";
import TabNavigationHandler from "./Screens/TabNavigationHandler";
import UpdateExpenseScreen from "./Screens/ManageExpenseScreen";

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

  const Stack = createNativeStackNavigator();
  return (
    <View style={styles.container} onLayout={onLayoutRootView}>
      <StatusBar style="light"></StatusBar>

      <Provider store={store}>
        <NavigationContainer>
          <Stack.Navigator
            initialRouteName="TabScreen"
            screenOptions={{
              contentStyle: { backgroundColor: Colors.primary800 },
              headerStyle: { backgroundColor: Colors.primary500 },
              headerTintColor: "white",
            }}
          >
            <Stack.Screen
              name="TabScreen"
              component={TabNavigationHandler}
              options={{
                headerShown: false,
              }}
            ></Stack.Screen>
            <Stack.Screen
              name="ManageExpense"
              component={UpdateExpenseScreen}
              options={{
                presentation: "modal",
              }}
            ></Stack.Screen>
          </Stack.Navigator>
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
