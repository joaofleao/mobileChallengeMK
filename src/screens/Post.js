import React, { useState, useEffect } from "react";
import { Share, Text, AsyncStorage } from "react-native";
import styles from "../constants/baseStyle";
import { getPost } from "../api";

import Screen from "../components/Screen";
import Header from "../components/Header";

export default function Post({ route, navigation }) {
  const [data, setData] = useState({});

  useEffect(() => {
    async function fetchData() {
      try {
        const { id, userId } = route.params;
        let data;
        if (userId === 0) {
          const posts = JSON.parse(await AsyncStorage.getItem("posts"));
          data = posts.find((x) => x.id === id);
        } else {
          const response = await getPost(id);
          data = response.data;
        }
        setData(data);
      } catch (error) {
        console.log(error.message);
      }
    }

    fetchData();
  }, []);

  const handleShare = async () => {
    try {
      await Share.share({
        message: `${data.title}\n\n${data.body}\n\nEnviado pelo aplicativo MK Solutions`,
      });
    } catch (error) {
      alert(error.message);
    }
  };

  const handleBack = async () => {
    navigation.goBack();
  };

  return (
    <Screen>
      <Header
        title="Post"
        leadingName="chevron-left"
        leadingFunction={handleBack}
        trailingName="share-2"
        trailingFunction={handleShare}
      />
      <Text style={styles.postTitle}>{data.title}</Text>
      <Text style={styles.description}>{data.body}</Text>
    </Screen>
  );
}
