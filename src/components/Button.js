import React, { useEffect, useState } from "react";
import { StyleSheet, Keyboard, Text, TouchableOpacity } from "react-native";
import colors from "../constants/colors";

import Icon from "react-native-vector-icons/Feather";

export default function Button({
  onPress,
  text,
  icon,
  leadingIcon,
  trailingIcon,
  bordered,
  plain,
  floatable,
  disabled,
  ...others
}) {
  useEffect(() => {
    Keyboard.addListener("keyboardDidShow", _keyboardDidShow);
    Keyboard.addListener("keyboardDidHide", _keyboardDidHide);
  }, []);

  const [keyboardStatus, setKeyboardStatus] = useState(false);
  const _keyboardDidShow = () => setKeyboardStatus(true);
  const _keyboardDidHide = () => setKeyboardStatus(false);

  const getButtonTheme = () => {
    const buttonTheme = [];
    if (bordered) buttonTheme.push(styles.buttonBordered);
    else if (plain) buttonTheme.push(styles.buttonPlain);
    else buttonTheme.push(styles.buttonFilled);
    if (floatable) buttonTheme.push(styles.floatable);
    if (disabled) buttonTheme.push(styles.disabled);
    return buttonTheme;
  };

  const getTextTheme = () => {
    if (plain || bordered) return styles.textColored;
    return styles.textWhite;
  };

  return !keyboardStatus ? (
    icon ? (
      <TouchableOpacity
        style={[styles.button, styles.iconButton, getButtonTheme()]}
        onPress={onPress}
        {...others}
      >
        <Icon style={[styles.icon, getTextTheme()]} name={icon} />
      </TouchableOpacity>
    ) : (
      <TouchableOpacity
        style={[styles.button, styles.regularButton, getButtonTheme()]}
        onPress={onPress}
      >
        <Icon style={[styles.icon, getTextTheme()]} name={leadingIcon} />
        <Text style={[styles.text, getTextTheme()]}>{text}</Text>
        <Icon style={[styles.icon, getTextTheme()]} name={trailingIcon} />
      </TouchableOpacity>
    )
  ) : (
    <></>
  );
}

const styles = StyleSheet.create({
  iconButton: {
    justifyContent: "center",
    width: 50,
  },
  floatable: {
    position: "absolute",
    right: 0,
    left: 0,
    bottom: 0,
    margin: 20,
  },
  button: {
    height: 50,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 10,
    borderRadius: 50,
  },
  regularButton: {
    minWidth: 130,
  },
  icon: {
    fontSize: 24,
    color: colors.textWhite,
    fontWeight: "normal",
  },
  placeholder: {
    fontSize: 24,
    color: colors.transparent,
  },
  text: {
    textAlign: "center",
    fontFamily: "WorkSansSemiBold",
    fontSize: 18,
    position: "absolute",
    right: 0,
    left: 0,
  },
  buttonFilled: {
    backgroundColor: colors.primary,
  },
  disabled: {
    backgroundColor: colors.textPlaceHolder,
  },
  buttonBordered: {
    backgroundColor: colors.transparent,
    borderWidth: 1,
    borderColor: colors.primary,
  },
  buttonPlain: {
    backgroundColor: colors.transparent,
  },
  textWhite: {
    color: colors.textWhite,
  },
  textColored: {
    color: colors.primary,
  },
});
