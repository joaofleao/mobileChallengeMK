import React from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import colors from "../constants/colors";

import Button from "./Button";

export default function Header({
  title,
  leadingText,
  trailingText,
  trailingName,
  trailingFunction,
  leadingName,
  leadingFunction,
  cardStyle,
}) {
  const getLeadingButton = () => {
    if (leadingText)
      return (
        <TouchableOpacity onPress={leadingFunction}>
          <Text style={styles.textButton}>{leadingText}</Text>
        </TouchableOpacity>
      );
    return <Button plain icon={leadingName} onPress={leadingFunction} />;
  };

  const getTrailingButton = () => {
    if (trailingText)
      return (
        <TouchableOpacity onPress={trailingFunction}>
          <Text style={styles.textButton}>{trailingText}</Text>
        </TouchableOpacity>
      );
    return <Button plain icon={trailingName} onPress={trailingFunction} />;
  };
  return (
    <View style={[styles.header, title && styles.titledHeader, cardStyle]}>
      <Text style={styles.title}>{title}</Text>
      {getLeadingButton()}
      {getTrailingButton()}
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    marginTop: -20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  titledHeader: {
    marginBottom: 20,
  },
  title: {
    textAlign: "center",
    fontFamily: "WorkSansSemiBold",
    fontSize: 25,
    position: "absolute",
    right: 0,
    left: 0,
  },
  button: {
    textAlign: "center",
    fontFamily: "WorkSansSemiBold",
    fontSize: 15,
  },
  textButton: {
    fontSize: 15,
    fontFamily: "WorkSansSemiBold",
    color: colors.error,
  },
});
