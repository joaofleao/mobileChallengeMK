import React, { useState, useEffect } from "react";
import {
  Text,
  AsyncStorage,
  StyleSheet,
  Image,
  View,
  Keyboard,
} from "react-native";

import colors from "../constants/colors";
import TextField from "../components/TextField";
import Button from "../components/Button";

export default function Onboarding({ route, navigation }) {
  const [name, setName] = useState("");

  useEffect(() => {
    Keyboard.addListener("keyboardDidShow", _keyboardDidShow);
    Keyboard.addListener("keyboardDidHide", _keyboardDidHide);
  }, []);

  useEffect(() => {
    async function fetchData() {
      try {
        const name = await AsyncStorage.getItem("name");

        if (name) if (name !== "") acessApp(name);
      } catch (error) {
        console.log(error.message);
      }
    }

    fetchData();
  }, []);

  const [keyboardStatus, setKeyboardStatus] = useState(false);
  const _keyboardDidShow = () => setKeyboardStatus(true);
  const _keyboardDidHide = () => setKeyboardStatus(false);

  const acessApp = async (prop) => {
    try {
      await AsyncStorage.setItem("name", prop);
    } catch (error) {
      console.log(error.message);
    }
    navigation.reset({
      index: 0,
      routes: [{ name: "Tabs" }],
    });
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          style={[styles.logo, keyboardStatus && styles.logoCompressed]}
          source={require("../../assets/logo.png")}
        />
      </View>
      <View style={styles.footer}>
        <View style={styles.footerBackground} />

        <View style={styles.footerContent}>
          <View>
            <Text style={styles.message}>
              Bem Vindo ao blog da MK Solutions!
            </Text>
            <Text style={styles.secondMessage}>
              Indique seu nome para melhorarmos sua experiência!
            </Text>
            <TextField
              value={name}
              onChange={(text) => setName(text)}
              icon="user"
              placeholder="Nome"
            />
          </View>
          <Button
            disabled={name === ""}
            floatable
            text="Entrar"
            onPress={() => acessApp(name)}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    marginBottom: 20,
  },
  message: {
    fontFamily: "WorkSans",
    fontSize: 20,
    textAlign: "center",
    marginBottom: 10,
  },
  secondMessage: {
    marginBottom: 20,
    textAlign: "center",
    fontFamily: "WorkSans",
    fontSize: 15,
  },
  header: {
    paddingTop: 40,
    alignItems: "center",
    justifyContent: "center",
    height: "40%",
    backgroundColor: colors.primary,
    borderBottomRightRadius: 75,
  },
  compressed: {
    // height: "30%",
  },
  footer: {
    flex: 1,
  },
  logoCompressed: {
    width: 70,
    height: 70,
  },
  logo: {
    width: 150,
    height: 150,
  },
  footerBackground: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: colors.primary,
  },
  footerContent: {
    alignItems: "center",

    paddingTop: 70,
    padding: 20,
    paddingBottom: 70,
    flex: 1,
    borderTopLeftRadius: 75,
    backgroundColor: colors.background,
  },
});
