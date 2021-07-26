import React, { useState, useEffect } from "react";
import { AsyncStorage, StyleSheet, View } from "react-native";

import Screen from "../components/Screen";
import Header from "../components/Header";
import TextField from "../components/TextField";
import DatePicker from "../components/DatePicker";

export default function NewPost({ route, navigation }) {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [author, setAuthor] = useState("");
  const [date, setDate] = useState("");

  useEffect(() => {
    async function fetchData() {
      try {
        const { id } = route.params;
        if (id === -1) return;

        const posts = JSON.parse(await AsyncStorage.getItem("posts"));
        const data = posts.find((x) => x.id === id);
        setTitle(data.title);
        setBody(data.body);
        setAuthor(data.author);
        setDate(data.date);
      } catch (error) {
        console.log(error.message);
      }
    }

    fetchData();
  }, []);

  const handleBack = async () => {
    navigation.goBack();
  };

  const handleDelete = async (id) => {
    let newPosts = [];
    let posts = JSON.parse(await AsyncStorage.getItem("posts"));
    posts.forEach((element) => {
      if (element.id !== id) newPosts.push({ ...element, id: newPosts.length });
    });
    console.log(newPosts);
    return newPosts;
  };

  const handleSave = async () => {
    const { id } = route.params;
    let posts;
    if (id !== -1) {
      posts = await handleDelete(id);
    } else posts = JSON.parse(await AsyncStorage.getItem("posts"));

    const newPost = {
      title,
      body,
      author,
      date,
      userId: 0,
      id: posts.length,
    };

    posts.push(newPost);

    try {
      await AsyncStorage.setItem("posts", JSON.stringify(posts));
    } catch (error) {
      console.log(error.message);
    }

    navigation.reset({
      index: 0,
      routes: [{ name: "Tabs" }],
    });
  };

  return (
    <View style={styles.screen}>
      <Screen buttonText="Publicar" buttonFunction={handleSave}>
        <Header
          leadingFunction={handleBack}
          title="Novo Post"
          leadingText="Cancelar"
        />
        <TextField
          size={50}
          onChange={(text) => setTitle(text)}
          value={title}
          placeholder="Como trabalhar com processos ágeis"
          label="Título"
        />
        <TextField
          value={body}
          onChange={(text) => setBody(text)}
          placeholder="Primeiramente é necessário pensar em..."
          label="Texto"
        />
        <TextField
          value={author}
          onChange={(text) => setAuthor(text)}
          placeholder="Bill Gates"
          label="Autor"
        />
        <DatePicker
          value={date}
          onChange={(date) => setDate(date)}
          label="Data"
        />
      </Screen>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    paddingTop: 40,
    backgroundColor: colors.background,
    flex: 1,
  },
});
