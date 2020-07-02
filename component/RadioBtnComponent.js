import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { RadioButton } from "react-native-paper";
import css from "../constant/css";

export default function RadioBtnComponent(props) {
  return (
    <View style={styles.btn}>
      <RadioButton
        value="second"
        //   status={checked === "second" ? "checked" : "unchecked"}
        //   onPress={() => setChecked("second")}
      />
      <Text style={styles.text_description}>{props.title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  btn: {
    flexDirection: "row",
  },
  text_description: {
    ...css.text_description,
  },
});
