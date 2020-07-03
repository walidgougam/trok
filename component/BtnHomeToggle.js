import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import colors from "../constant/colors";

export default function BtnHomeToggle({ changeFocus, focus, title }) {
  return (
    <TouchableOpacity
      onPress={changeFocus}
      style={[
        styles.btn,
        {
          borderBottomWidth: focus ? 1 : null,
          borderBottomColor: focus ? colors.main_green : null,
        },
      ]}
    >
      <Text
        style={[
          styles.text_btn,
          {
            color: focus ? colors.main_green : colors.icon_profile_grey,
          },
        ]}
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  btn: {
    width: "50%",
    justifyContent: "center",
  },
  text_btn: {
    textAlign: "center",
  },
});
