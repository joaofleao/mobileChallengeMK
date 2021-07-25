import React, { useState, useEffect } from "react";
import { View, Text } from "react-native";
import styles from "../constants/baseStyle";
import { getData } from "../api";

import PostCard from "../components/PostCard";
import Header from "../components/Header";
import Screen from "../components/Screen";

export default function Posts({ navigation }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await getData();
        const data = response.data;
        setData(data);
      } catch (error) {
        console.log("error");
        return;
      }
    }

    fetchData();
  }, []);

  const handleOpen = (id, userId) => {
    navigation.navigate("Post", { id, userId });
  };

  const handleNew = () => {
    navigation.navigate("NewPost");
  };

  const renderPosts = () => {
    if (data.length === 0) {
      return (
        <View style={styles.emptyStateContainer}>
          <Text style={styles.emptyState}>Nenhum resultado encontrado</Text>
        </View>
      );
    } else {
      return data.map((post) => {
        return (
          <PostCard key={post.id} handleOnPress={handleOpen} data={post} />
        );
      });
    }
  };

  return (
    <Screen>
      <Header trailingName={"add"} trailingFunction={handleNew} />
      <Text style={styles.title}>Posts</Text>
      <Text style={styles.subTitle}>Bem vindo ao blog da MK Solutions!</Text>
      {renderPosts()}
    </Screen>
  );
}
