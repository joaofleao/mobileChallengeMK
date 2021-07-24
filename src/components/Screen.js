import React from "react";
import { View, ScrollView, StyleSheet } from "react-native";
import colors from "../constants/colors";

export default function Screen({ children }) {
  return (
    <View style={styles.screen}>
      <ScrollView contentContainerStyle={styles.scroll}>{children}</ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    paddingTop: 40,
    backgroundColor: colors.background,
    flex: 1,
  },
  scroll: {
    padding: 20,
    backgroundColor: colors.background,
    flexGrow: 1,
  },
});
