import React from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import colors from "../constants/colors";

import Icon from "react-native-vector-icons/Feather";

export default function Header({
  navigation,
  trailingIcon,
  trailingFunction,
  leadingIcon = "chevron-left",
  leadingFunction,
}) {
  const handleBack = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.header}>
      {navigation ? (
        <TouchableOpacity onPress={leadingFunction || handleBack}>
          <Icon style={styles.icon} name={leadingIcon} />
        </TouchableOpacity>
      ) : (
        <Icon style={styles.icon} />
      )}
      <Text style={styles.title}>Post</Text>
      {trailingFunction ? (
        <TouchableOpacity onPress={trailingFunction}>
          <Icon style={styles.icon} name={trailingIcon} />
        </TouchableOpacity>
      ) : (
        <Icon style={styles.icon} />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  title: {
    textAlign: "center",
    fontFamily: "WorkSansSemiBold",
    fontSize: 25,
  },
  icon: {
    fontSize: 25,
    color: colors.primary,
  },
});
