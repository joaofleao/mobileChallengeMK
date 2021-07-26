import "react-native-gesture-handler";
import colors from "./constants/colors";
import * as React from "react";
import { StyleSheet, View } from "react-native";
import { setStatusBarStyle } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import FontAwesomeIcon from "react-native-vector-icons/Feather";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

import Posts from "./screens/Posts.js";
import Onboarding from "./screens/Onboarding.js";
import Post from "./screens/Post.js";
import NewPost from "./screens/NewPost.js";
import Search from "./screens/Search.js";
import Profile from "./screens/Profile.js";

const Icon = ({ focused, name }) => {
  return (
    <FontAwesomeIcon
      name={name}
      size={focused ? 27 : 24}
      color={focused ? colors.primary : colors.textPlaceHolder}
    />
  );
};

const styles = StyleSheet.create({
  screen: {
    paddingTop: 40,
    backgroundColor: colors.background,
    flex: 1,
  },
  iosContainer: {
    height: 80,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    elevation: 20,
  },
  androidContainer: {
    height: 80,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    elevation: 20,
  },
});

const navigationBarOptions = {
  showLabel: false,
  activeTintColor: colors.primary,
  inactiveTintColor: colors.textDisabled,
  initialRouteName: "Home",
  keyboardHidesTabBar: true,
  style:
    Platform.OS === "android" ? styles.androidContainer : styles.iosContainer,
};

export function Routes() {
  setStatusBarStyle("light");
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Onboarding" component={Onboarding} />
        <Stack.Screen name="Tabs" component={Tabs} />
        <Stack.Screen name="NewPost" component={NewPost} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

function Tabs() {
  setStatusBarStyle("dark");
  return (
    <View style={styles.screen}>
      <Tab.Navigator
        tabBarOptions={navigationBarOptions}
        initialRouteName="Home"
        backBehavior="initialRoute"
      >
        <Tab.Screen
          name="Profile"
          options={{
            tabBarIcon: (e) => Icon({ focused: e.focused, name: "user" }),
          }}
          component={ProfileTab}
        />
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
      </Tab.Navigator>
    </View>
  );
}

function HomeTab() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Home" component={Posts} />
      <Stack.Screen name="Post" component={Post} />
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
