import React, { useState, useEffect } from "react";
import { Text, View, AsyncStorage, Alert } from "react-native";
import styles from "../constants/baseStyle";

import Screen from "../components/Screen";
import Header from "../components/Header";
import EditableCard from "../components/EditableCard";

export default function Search({ navigation }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const posts = JSON.parse(await AsyncStorage.getItem("posts"));
        // console.log(posts);
        setData(posts);
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

  const warnDelete = async (id) => {
    Alert.alert(
      "Excluir Post",
      "Você está prestes a excluir um post, tem certeza que quer realizar essa ação?",
      [
        {
          text: "Cancelar",
          style: "cancel",
        },
        { text: "Excluir", onPress: () => handleDelete(id) },
      ]
    );
  };

  const handleDelete = async (id) => {
    let newPosts = [];

    data.forEach((element) => {
      console.log(id);
      if (element.id !== id) newPosts.push(element);
    });

    setData(newPosts);

    try {
      // await AsyncStorage.setItem("posts", JSON.stringify(newPosts));
    } catch (error) {
      console.log(error.message);
    }
  };

  const handleEdit = (id) => {
    navigation.navigate("NewPost", { data });
  };

  const renderPosts = () => {
    if (data.length === 0) {
      return (
        <View style={styles.emptyStateContainer}>
          <Text style={styles.emptyState}>{"Nenhum post publicado"}</Text>
        </View>
      );
    } else {
      return data.map((post) => {
        return (
          <EditableCard
            key={post.id}
            onPressDelete={warnDelete}
            onPressEdit={handleEdit}
            onPress={handleOpen}
            data={post}
          />
        );
      });
    }
  };
  return (
    <Screen>
      <Header />
      <Text style={styles.title}>Meu Perfil</Text>
      <Text style={styles.subTitle}>Gerencie seus posts</Text>
      {renderPosts()}
    </Screen>
  );
}
