import React from "react";
import { StyleSheet, TextInput, Text, View } from "react-native";
import colors from "../constants/colors";

export default function TextField({
  onChange,
  value,
  placeholder,
  label,
  size,
}) {
  return (
    <View>
      <View style={styles.header}>
        <Text style={styles.label}>{label}</Text>
        {size && <Text style={styles.size}>{`${value.length}/${size}`}</Text>}
      </View>
      <TextInput
        maxLength={size}
        onChangeText={onChange}
        value={value}
        multiline
        style={styles.textField}
        placeholder={placeholder}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  textField: {
    backgroundColor: colors.backgroundItem,
    borderRadius: 10,
    padding: 15,
    marginBottom: 20,
  },
  label: {
    color: colors.primary,
    fontFamily: "WorkSansMedium",
    fontSize: 15,
  },
  size: {
    color: colors.textDisabled,
    fontFamily: "WorkSansMedium",
    fontSize: 15,
  },
});
