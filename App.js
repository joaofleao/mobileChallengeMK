import React from "react";
import { Routes } from "./src/routes.js";
import { useFonts } from "expo-font";

export default function App() {
  const [loaded, error] = useFonts({
    Spartan: require("./assets/fonts/Spartan-Regular.ttf"),
    WorkSans: require("./assets/fonts/WorkSans-Regular.ttf"),
    WorkSansBold: require("./assets/fonts/WorkSans-Bold.ttf"),
    WorkSansMedium: require("./assets/fonts/WorkSans-Medium.ttf"),
    WorkSansLight: require("./assets/fonts/WorkSans-Light.ttf"),
    WorkSansSemiBold: require("./assets/fonts/WorkSans-SemiBold.ttf"),
  });

  if (!loaded) {
    return null;
  }

  return <Routes />;
}
