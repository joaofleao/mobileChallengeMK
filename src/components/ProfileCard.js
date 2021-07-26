import React from "react";
import { Text, View, StyleSheet } from "react-native";
import colors from "../constants/colors";

import Header from "../components/Header";

export default function ProfileCard({
  name,
  numberOfPosts,
  leadingFunction,
  trailingFunction,
}) {
  const getInitials = () => {
    if (name) {
      const array = name.split(" ");
      if (array.length === 1) return name[0].toUpperCase();
      else return (array[0][0] + array[array.length - 1][0]).toUpperCase();
    }
  };

  return (
    <View style={styles.card}>
      <Header
        cardStyle={styles.header}
        leadingName="x-circle"
        trailingName="edit-2"
        leadingFunction={leadingFunction}
        trailingFunction={trailingFunction}
      />

      <View style={styles.avatar}>
        <Text style={styles.initials}>{getInitials()}</Text>
      </View>
      <Text style={styles.name}>{name}</Text>

      <Text numberOfLines={1} style={styles.numberOfPosts}>
        {numberOfPosts}
      </Text>
      <Text numberOfLines={1} style={styles.publications}>
        publicações
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: colors.primary,
    marginBottom: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  initials: {
    color: colors.textWhite,
    fontFamily: "WorkSansSemiBold",
    fontSize: 40,
  },
  header: {
    width: "100%",
    marginTop: 0,
  },
  name: {
    fontFamily: "WorkSansBold",
    fontSize: 25,
    color: colors.primary,
    marginBottom: 10,
    textAlign: "center",
  },
  username: {
    fontFamily: "WorkSansMedium",
    fontSize: 15,
    color: colors.text,
    marginBottom: 30,
  },
  numberOfPosts: {
    fontFamily: "WorkSans",
    fontSize: 25,
    color: colors.primary,
  },
  publications: {
    fontFamily: "WorkSansMedium",
    fontSize: 10,
    color: colors.text,
  },
  card: {
    alignItems: "center",
    backgroundColor: colors.backgroundItem,
    borderRadius: 20,
    padding: 10,

    paddingBottom: 30,
    marginBottom: 20,
    elevation: 10,

    shadowColor: "#29589D",
    shadowOpacity: 0.34,
    shadowRadius: 6.27,
  },
});
