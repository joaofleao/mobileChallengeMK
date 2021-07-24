import React, { useState, useEffect } from "react";
import { Share, Text } from "react-native";
import styles from "../constants/baseStyle";
import { getPost } from "../api";

import Screen from "../components/Screen";
import Header from "../components/Header";

export default function TutorialScreen({ route, navigation }) {
  const [data, setData] = useState({});

  const handleShare = async () => {
    try {
      await Share.share({
        message: `${data.title}\n\n${data.body}\n\nEnviado pelo aplicativo MK Solutions`,
      });
    } catch (error) {
      alert(error.message);
    }
  };

  useEffect(() => {
    async function fetchData() {
      try {
        const { id } = route.params;
        const response = await getPost(id);
        const data = response.data;
        setData(data);
      } catch (error) {
        console.log("error");
        return;
      }
    }

    fetchData();
  }, []);

  return (
    <Screen>
      <Header
        navigation={navigation}
        trailingIcon="share-2"
        trailingFunction={handleShare}
      />
      <Text style={styles.postTitle}>{data.title}</Text>
      <Text style={styles.subTitle}>{data.body}</Text>
    </Screen>
  );
}
