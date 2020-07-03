import React from "react";
import { View, Text, StyleSheet } from "react-native";
import colors from "../constant/colors";

import { ProfilePictureIcon } from "../assets/icon/Icon";

export default function PictureProfileComponent({ width, height, title }) {
  return (
    <View style={styles.wrapper_profile_icon}>
      <ProfilePictureIcon width={width} height={height} />
      <Text style={styles.pseudo}>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper_profile_icon: {
    alignItems: "center",
  },
  pseudo: {
    marginTop: 12,
    color: colors.text_description_black,
    fontSize: 14,
    fontFamily: "Avenir Medium",
    lineHeight: 20,
  },
});
