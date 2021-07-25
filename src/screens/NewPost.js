import React, { useState } from "react";
import { Text, AsyncStorage } from "react-native";
import styles from "../constants/baseStyle";

import Screen from "../components/Screen";
import Header from "../components/Header";
import TextField from "../components/TextField";
import DatePicker from "../components/DatePicker";

export default function NewPost({ navigation }) {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [author, setAuthor] = useState("");
  const [date, setDate] = useState("");

  const handleBack = async () => {
    navigation.goBack();
  };

  const handleSave = async () => {
    let posts = JSON.parse(await AsyncStorage.getItem("posts"));

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
    navigation.goBack();
  };

  return (
    <Screen buttonText="Publicar" buttonFunction={handleSave}>
      <Header leadingFunction={handleBack} leadingText="Cancelar" />
      <Text style={styles.title}>Novo post</Text>
      <Text style={styles.subTitle}>
        Preencha as informações para realizar uma nova publicação
      </Text>
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
  );
}
