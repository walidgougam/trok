import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { ArrowLeft } from "../assets/icon/Icon";
import normalize from "react-native-normalize";
import colors from "../constant/colors";

export default function HeaderComponent({ navigation }) {
  return (
    <View style={styles.header}>
      <View style={styles.wrapper_header_title}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <ArrowLeft />
        </TouchableOpacity>
        <Text style={styles.text_header}>Créer mon compte</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: colors.main_green,
    height: normalize(70, "height"),
    justifyContent: "flex-end",
  },
  wrapper_header_title: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: normalize(13),
    marginHorizontal: normalize(11),
  },
  text_header: {
    fontSize: normalize(18, "fontSize"),
    color: colors.text_white,
    marginLeft: normalize(27),
  },
});
