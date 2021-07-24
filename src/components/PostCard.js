import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import colors from "../constants/colors";

export default function PostCard({ data, handleOnPress }) {
  return (
    <TouchableOpacity
      onPress={() => handleOnPress(data.id)}
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
    backgroundColor: colors.background,
    borderRadius: 20,
    elevation: 2,
    padding: 20,
    marginBottom: 20,
  },
});
