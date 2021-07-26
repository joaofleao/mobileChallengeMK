import React from "react";
import { Text, TouchableOpacity, StyleSheet } from "react-native";
import colors from "../constants/colors";

export default function PostCard({ data, handleOnPress }) {
  return (
    <TouchableOpacity
      onPress={() => handleOnPress(data.id, data.userId)}
      style={styles.card}
    >
      <Text style={styles.title}>{data.title}</Text>
      <Text numberOfLines={1} style={styles.body}>
        {data.body}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  title: {
    fontFamily: "WorkSansMedium",
    fontSize: 18,
    color: colors.text,
    marginBottom: 10,
  },
  body: {
    fontFamily: "WorkSansMedium",
    fontSize: 11,
    color: colors.text,
  },
  card: {
    backgroundColor: colors.backgroundItem,
    borderRadius: 20,

    padding: 20,
    marginBottom: 20,
    elevation: 10,

    shadowColor: "#29589D",
    shadowOpacity: 0.34,
    shadowRadius: 6.27,
  },
});
