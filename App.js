import { StatusBar } from "expo-status-bar";
import React from "react";
import { Text, View, StyleSheet, Icon, Dimensions } from "react-native";
import { GlobalProvider } from "./context/globalState";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import {
  HomeWhiteIcon,
  HomeOrangeIcon,
  SearchWhiteIcon,
  SearchOrangeIcon,
  AddWhiteIcon,
  AddOrangeIcon,
  MessageWhiteIcon,
  MessageOrangeIcon,
  ProfileWhiteIcon,
  ProfileOrangeIcon,
} from "./assets/icon/Icon";
import colors from "./constant/colors";

import ProductSheetScreen from "./screens/ProductSheetScreen";
import LoginScreen from "./screens/login/LoginScreen";
import EmailScreen from "./screens/login/EmailScreen";
import NameScreen from "./screens/login/NameScreen";
import PictureScreen from "./screens/login/PictureScreen";
import GenderScreen from "./screens/login/GenderScreen";
import HomeScreen from "./screens/home/HomeScreen";
import ProfileScreen from "./screens/profile/ProfileScreen";

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

const profileStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Profile"
        component={ProfileScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

const createBottomTabs = () => {
  return (
    <MaterialBottomTabs.Navigator
      barStyle={{ backgroundColor: colors.background_white }}
    >
      <MaterialBottomTabs.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: "",
          tabBarIcon: ({ focused }) =>
            focused ? <HomeOrangeIcon /> : <HomeWhiteIcon />,
        }}
      />
      <MaterialBottomTabs.Screen
        name="tab5"
        component={EmailScreen}
        options={{
          tabBarLabel: "",
          tabBarIcon: ({ focused }) =>
            focused ? <SearchOrangeIcon /> : <SearchWhiteIcon />,
        }}
      />
      <MaterialBottomTabs.Screen
        name="tab6"
        component={NameScreen}
        options={{
          tabBarLabel: "",
          tabBarIcon: ({ focused }) =>
            focused ? <AddOrangeIcon /> : <AddWhiteIcon />,
        }}
      />
      <MaterialBottomTabs.Screen
        name="tab7"
        component={NameScreen}
        options={{
          tabBarLabel: "",
          tabBarIcon: ({ focused }) =>
            focused ? <MessageOrangeIcon /> : <MessageWhiteIcon />,
        }}
      />
      <MaterialBottomTabs.Screen
        name="tab8"
        component={profileStack}
        options={{
          tabBarLabel: "",
          tabBarIcon: ({ focused }) =>
            focused ? <ProfileOrangeIcon /> : <ProfileWhiteIcon />,
        }}
      />
    </MaterialBottomTabs.Navigator>
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
          <Stack.Screen
            name="HomeBottomTab"
            component={createBottomTabs}
            options={{
              headerShown: false,
              headerStyle: { backgroundColor: "purple" },
            }}
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
