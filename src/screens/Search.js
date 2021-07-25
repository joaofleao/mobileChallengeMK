import React, { useState, useEffect } from "react";
import { Text, View } from "react-native";
import styles from "../constants/baseStyle";
import { getData } from "../api";

import Screen from "../components/Screen";
import Header from "../components/Header";
import TextField from "../components/TextField";
import PostCard from "../components/PostCard";

export default function Search({ navigation }) {
  const [searched, setSearched] = useState("");
  const [data, setData] = useState([]);
  const [emptyMessage, setEmptyMessage] = useState("");
  const [filtered, setFiltered] = useState([]);

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

  const handleOpen = (id) => {
    navigation.navigate("Post", { id });
  };

  const handleSearch = async (text) => {
    setEmptyMessage("Nenhum resultado encontrado");
    setSearched(text);
    let aux = [];
    data.forEach((element) => {
      if (element.title.includes(text)) aux.push(element);
    });
    setFiltered(aux);
    if (text === "") {
      setFiltered([]);
      setEmptyMessage("");
    }
  };

  const renderPosts = () => {
    if (filtered.length === 0) {
      return (
        <View style={styles.emptyStateContainer}>
          <Text style={styles.emptyState}>{emptyMessage}</Text>
        </View>
      );
    } else {
      return filtered.map((post) => {
        return (
          <PostCard key={post.id} handleOnPress={handleOpen} data={post} />
        );
      });
    }
  };
  return (
    <Screen>
      <Header />
      <Text style={styles.title}>Buscar</Text>
      <Text style={styles.subTitle}>Busque posts por seus títulos</Text>
      <TextField onChange={(text) => handleSearch(text)} value={searched} />
      {renderPosts()}
    </Screen>
  );
}
