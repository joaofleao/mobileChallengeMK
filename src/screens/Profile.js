import React, { useState, useEffect } from "react";
import { Text, View, AsyncStorage, Alert } from "react-native";
import styles from "../constants/baseStyle";

import Screen from "../components/Screen";
import EditableCard from "../components/EditableCard";
import ProfileCard from "../components/ProfileCard";

export default function Search({ navigation }) {
  const [data, setData] = useState([]);
  const [name, setName] = useState("");

  useEffect(() => {
    async function fetchData() {
      try {
        const posts = JSON.parse(await AsyncStorage.getItem("posts"));
        const name = await AsyncStorage.getItem("name");
        setName(name);
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
      if (element.id !== id) newPosts.push({ ...element, id: newPosts.length });
    });

    setData(newPosts);

    try {
      await AsyncStorage.setItem("posts", JSON.stringify(newPosts));
    } catch (error) {
      console.log(error.message);
    }
  };

  const handleEdit = (id) => {
    navigation.navigate("NewPost", { id });
  };

  const logOut = () => {
    navigation.navigate("Onboarding");
  };

  const warnClean = async () => {
    Alert.alert(
      "Excluir Posts",
      "Você está prestes a excluir TODOS os seus posts, tem certeza que quer realizar essa ação?",
      [
        {
          text: "Cancelar",
          style: "cancel",
        },
        { text: "Excluir", onPress: () => clearPosts() },
      ]
    );
  };

  const clearPosts = async () => {
    try {
      await AsyncStorage.setItem("posts", JSON.stringify([]));
    } catch (error) {
      console.log(error.message);
    }
    setData([]);
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
      <ProfileCard
        trailingFunction={logOut}
        leadingFunction={warnClean}
        name={name}
        numberOfPosts={data.length}
      />
      <Text style={styles.subTitle}>Suas publicações</Text>
      {renderPosts()}
    </Screen>
  );
}
