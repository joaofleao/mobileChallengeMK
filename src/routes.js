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

const androidStyles = StyleSheet.create({
  container: {
    height: 70,
    borderTopWidth: 1,
    borderTopColor: colors.primary,
    paddingTop: 7,
  },
  labelStyle: {
    fontSize: 15,
    marginBottom: 11,
  },
});

const iOSStyles = StyleSheet.create({
  container: {
    borderTopWidth: 1,
    borderTopColor: colors.primary,
    paddingTop: 5,
  },
  labelStyle: {
    fontSize: 14,
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
            title: "Posts",
            tabBarIcon: (e) => Icon({ focused: e.focused, name: "home" }),
          }}
          component={Home}
        />

        <Tab.Screen
          name="Search"
          options={{
            title: "Buscar",
            tabBarIcon: (e) => Icon({ focused: e.focused, name: "search" }),
          }}
          component={Search}
        />
        <Tab.Screen
          name="Profile"
          options={{
            title: "Perfil",
            tabBarIcon: (e) => Icon({ focused: e.focused, name: "user" }),
          }}
          component={Profile}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

function Home() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Home" component={Posts} />
      <Stack.Screen name="Post" component={Post} />
      <Stack.Screen name="NewPost" component={NewPost} />
    </Stack.Navigator>
  );
}

function Search() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="b" component={Home} />
    </Stack.Navigator>
  );
}

function Profile() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="c" component={Home} />
    </Stack.Navigator>
  );
}
