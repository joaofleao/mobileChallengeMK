import React from "react";
import { Text, TouchableOpacity, StyleSheet } from "react-native";
import colors from "../constants/colors";

import Button from "../components/Button";

export default function EditableCard({
  data,
  onPress,
  onPressDelete,
  onPressEdit,
}) {
  return (
    <TouchableOpacity
      onPress={() => onPress(data.id, data.userId)}
      style={styles.card}
    >
      <Button plain icon="trash" onPress={() => onPressDelete(data.id)} />
      <Text style={styles.title}>{data.title}</Text>
      <Button plain icon="edit-2" onPress={() => onPressEdit(data.id)} />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  title: {
    fontFamily: "WorkSansMedium",
    fontSize: 18,
    color: colors.text,
    width: "60%",
    textAlign: "center",
  },
  card: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: colors.backgroundItem,
    borderRadius: 20,
    elevation: 10,
    paddingVertical: 20,
    paddingHorizontal: 10,
    marginBottom: 20,
  },
});
