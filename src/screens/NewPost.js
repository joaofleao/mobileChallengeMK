import React, { useState } from "react";
import { Text } from "react-native";
import styles from "../constants/baseStyle";

import Screen from "../components/Screen";
import Header from "../components/Header";
import TextField from "../components/TextField";
import DatePicker from "../components/DatePicker";

export default function TutorialScreen({ route, navigation }) {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [author, setAuthor] = useState("");
  const [date, setDate] = useState("");

  const handleBack = async () => {
    navigation.goBack();
  };

  const handleSave = async () => {
    console.log(title);
    console.log(body);
    console.log(author);
    console.log(date);
  };

  return (
    <Screen buttonText="Salvar" buttonFunction={handleSave}>
      <Header leadingFunction={handleBack} leadingText="Cancelar" />
      <Text style={styles.title}>Novo post</Text>
      <Text style={styles.subTitle}>
        Preencha as seguintes informações para realizar uma nova publicação
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
