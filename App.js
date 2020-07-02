import { StatusBar } from "expo-status-bar";
import React from "react";
import { Text, View, StyleSheet, Icon, Dimensions } from "react-native";
import { GlobalProvider } from "./context/globalState";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

import ProductSheetScreen from "./screens/ProductSheetScreen";
import LoginScreen from "./screens/login/LoginScreen";
import EmailScreen from "./screens/login/EmailScreen";
import NameScreen from "./screens/login/NameScreen";
import PictureScreen from "./screens/login/PictureScreen";
import GenderScreen from "./screens/login/GenderScreen";

import { createDrawerNavigator } from "@react-navigation/drawer";
import { createStackNavigator } from "@react-navigation/stack";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
} from "@react-navigation/native";

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();
const MaterialTopTabs = createMaterialTopTabNavigator();
const MaterialBottomTabs = createMaterialBottomTabNavigator();

// const createHomeStack = () => {
//   return (
//     <Stack.Navigator>
//       <Stack.Screen
//         name="Email"
//         component={EmailScreen}
//         options={{ headerShown: false }}
//       />
//     </Stack.Navigator>
//   );
// };
const createLoginStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Email"
        component={EmailScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Name"
        component={NameScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Picture"
        component={PictureScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};
const createProductStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Product"
        component={ProductSheetScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default function App() {
  return (
    <NavigationContainer>
      <GlobalProvider>
        <Stack.Navigator>
          <Stack.Screen
            name="Login"
            component={LoginScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Email"
            component={EmailScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Name"
            component={NameScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Picture"
            component={PictureScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Gender"
            component={GenderScreen}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </GlobalProvider>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
