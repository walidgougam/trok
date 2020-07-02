import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Image,
  TouchableOpacity,
} from "react-native";
import colors from "../constant/colors";
import { WrongEmail, GoodEmail, HidePassword } from "../assets/icon/Icon";
import normalize from "react-native-normalize";

export default function InputComponent(props) {
  return (
    <View
      style={[styles.container_input, { marginBottom: props.marginBottom }]}
    >
      <View style={styles.wrapper_input}>
        <TextInput
          maxLength={30}
          style={styles.input}
          placeholderTextColor={colors.text_input}
          onChangeText={(text) => props.onChangeText(text)}
          value={props.title}
          placeholder={props.placeholder}
          underlineColorAndroid="transparent"
          secureTextEntry={props.secureTextEntry}
        />
      </View>
      <View style={{ flexDirection: "row" }}>
        {props.password && (
          <TouchableOpacity
            style={{ marginRight: normalize(13) }}
            onPress={props.showPassword}
          >
            <HidePassword />
          </TouchableOpacity>
        )}
        {props.error ? props.login && <WrongEmail /> : <GoodEmail />}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container_input: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderColor: colors.icon_profile_grey,
    borderWidth: normalize(1),
    borderRadius: normalize(1),
    paddingHorizontal: normalize(14),
  },
  wrapper_input: {
    height: normalize(42, "height"),
    borderColor: "transparent",
    fontSize: normalize(12, "fontSize"),
    justifyContent: "center",
  },
  input: {
    // color: colors.text_input,
  },
});
