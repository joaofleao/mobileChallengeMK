import React, { useState } from "react";
import { StyleSheet, Text, View, Modal, TextInput } from "react-native";
import colors from "../constants/colors";
import DatePicker from "react-native-modern-datepicker";
import { getToday, getFormatedDate } from "react-native-modern-datepicker";

import Button from "../components/Button";

export default function DatePicker2({ onChange, value, label }) {
  const [modalVisible, setModalVisible] = useState(false);

  const formatDate = () => {
    if (value) {
      let dateFormatted = value.split("/");
      const newDate = `${dateFormatted[2]}/${dateFormatted[1]}/${dateFormatted[0]}`;
      return newDate;
    }
    return "Selecionar";
  };

  return (
    <View style={styles.header}>
      <Text style={styles.label}>{label}</Text>
      <Button
        bordered
        style={styles.button}
        text={formatDate()}
        onPress={() => setModalVisible(!modalVisible)}
      />

      <Modal
        animationType="slide"
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.modal}>
          <Text style={styles.title}>Selecione uma data</Text>
          <DatePicker
            options={{
              mainColor: colors.primary,
              textSecondaryColor: "#fff",
            }}
            current="2020-07-13"
            selected="2020-07-23"
            mode="calendar"
            style={{ borderRadius: 10 }}
            onSelectedChange={onChange}
          />
          <View style={styles.footer}>
            <Button
              text="Selecionar"
              onPress={() => setModalVisible(!modalVisible)}
            />
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  modalContent: {
    justifyContent: "center",
    alignItems: "center",
    margin: 30,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  modal: {
    textAlign: "center",
    justifyContent: "space-between",
    height: "100%",
    paddingBottom: 50,
    paddingTop: 50,
  },
  title: {
    fontFamily: "WorkSansSemiBold",
    fontSize: 30,
    color: colors.text,
    textAlign: "center",
    padding: 20,
  },
  footer: {
    alignItems: "center",
  },
  button: {
    width: 60,
  },
  textField: {
    backgroundColor: colors.backgroundItem,
    borderRadius: 10,
    padding: 15,
    marginBottom: 20,
  },
  label: {
    color: colors.primary,
    fontFamily: "WorkSansMedium",
    fontSize: 15,
  },
});
