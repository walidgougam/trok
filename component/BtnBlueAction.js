import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import colors from "../constant/colors";
import normalize from "react-native-normalize";

export default function BtnBlueAction(props) {
  return (
    <TouchableOpacity
      style={[
        styles.btn,
        {
          marginBottom: props.marginBottom,
          backgroundColor: props.backgroundColor,
        },
      ]}
      onPress={props.navigation}
    >
      <Text style={[styles.title, { color: props.color }]}>{props.title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  btn: {
    marginHorizontal: normalize(70),
    height: 42,
    borderRadius: normalize(26),
    borderWidth: 1,
    borderColor: colors.btn_action,
    justifyContent: "center",
  },
  title: {
    fontSize: normalize(16, "fontSize"),
    fontFamily: "Avenir Book",
    lineHeight: 20,
    textAlign: "center",
  },
});
