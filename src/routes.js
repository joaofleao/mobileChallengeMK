import "react-native-gesture-handler";
import colors from "./constants/colors";
import * as React from "react";
import { StyleSheet, AsyncStorage } from "react-native";
import { setStatusBarStyle } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

import Posts from "./screens/Posts.js";
import Post from "./screens/Post.js";
import NewPost from "./screens/NewPost.js";
import Search from "./screens/Search.js";
import Profile from "./screens/Profile.js";

const androidStyles = StyleSheet.create({
  container: {
    height: 70,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    elevation: 20,
  },
});

const iOSStyles = StyleSheet.create({
  container: {
    height: 70,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    elevation: 5,
  },
});

const Icon = ({ focused, name }) => {
  return (
    <FontAwesomeIcon
      name={name}
      size={24}
      size={focused ? 27 : 24}
      color={focused ? colors.primary : colors.textDisabled}
    />
  );
};

export function Routes() {
  setStatusBarStyle("dark");
  return (
    <NavigationContainer>
      <Tab.Navigator
        tabBarOptions={{
          showLabel: false,
          activeTintColor: colors.primary,
          inactiveTintColor: colors.textDisabled,
          initialRouteName: "Home",
          keyboardHidesTabBar: true,
          labelStyle:
            Platform.OS === "android"
              ? androidStyles.labelStyle
              : iOSStyles.labelStyle,
          style:
            Platform.OS === "android"
              ? androidStyles.container
              : iOSStyles.container,
        }}
      >
        <Tab.Screen
          name="Home"
          options={{
            tabBarIcon: (e) => Icon({ focused: e.focused, name: "home" }),
          }}
          component={HomeTab}
        />
        <Tab.Screen
          name="Search"
          options={{
            tabBarIcon: (e) => Icon({ focused: e.focused, name: "search" }),
          }}
          component={SearchTab}
        />
        <Tab.Screen
          name="Profile"
          options={{
            tabBarIcon: (e) => Icon({ focused: e.focused, name: "user" }),
          }}
          component={ProfileTab}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

function HomeTab() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Home" component={Posts} />
      <Stack.Screen name="Post" component={Post} />
      <Stack.Screen name="NewPost" component={NewPost} />
    </Stack.Navigator>
  );
}

function SearchTab() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Search" component={Search} />
      <Stack.Screen name="Post" component={Post} />
    </Stack.Navigator>
  );
}

function ProfileTab() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="Post" component={Post} />
    </Stack.Navigator>
  );
}
