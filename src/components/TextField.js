import React from "react";
import { StyleSheet, TextInput, Text, View } from "react-native";
import colors from "../constants/colors";

import Icon from "react-native-vector-icons/Feather";

export default function TextField({
  onChange,
  value,
  placeholder,
  label,
  size,
  icon,
  ...props
}) {
  return (
    <View style={[styles.textField, icon && styles.withIcon]}>
      {icon && <Icon name={icon} style={styles.icon} />}
      <View style={styles.content}>
        {label && (
          <View style={styles.header}>
            <Text style={styles.label}>{label}</Text>
            {size && (
              <Text style={styles.size}>{`${value.length}/${size}`}</Text>
            )}
          </View>
        )}
        <TextInput
          maxLength={size}
          onChangeText={onChange}
          value={value}
          {...props}
          placeholder={placeholder}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  icon: {
    fontSize: 24,
    color: colors.primary,
    paddingRight: 20,
  },
  content: {
    flex: 1,
  },
  withIcon: {
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
  },
  textField: {
    backgroundColor: colors.backgroundItem,
    borderRadius: 20,
    padding: 15,
    paddingHorizontal: 20,
    elevation: 10,
    marginBottom: 20,
  },
  label: {
    color: colors.primary,
    fontFamily: "WorkSansMedium",
    fontSize: 15,
  },
  size: {
    color: colors.textDisabled,
    fontFamily: "WorkSansLight",
    fontSize: 15,
  },
});
