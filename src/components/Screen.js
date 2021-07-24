import React from "react";
import { View, ScrollView, StyleSheet } from "react-native";
import colors from "../constants/colors";
import Button from "../components/Button";

export default function Screen({ children, buttonText, buttonFunction }) {
  return (
    <View style={styles.screen}>
      <ScrollView contentContainerStyle={styles.scroll}>{children}</ScrollView>
      {buttonText && buttonFunction && (
        <Button floatable text={buttonText} onPress={buttonFunction} />
      )}
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
