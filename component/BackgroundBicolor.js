import React, { Component } from "react";
import { Text, View, StyleSheet, Image, TouchableOpacity } from "react-native";
import colors from "../constant/colors";
import { ArrowLeft } from "../assets/icon/Icon";
import normalize from "react-native-normalize";

const BackgroundBicolor = (props) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.wrapper_header_title}>
          <TouchableOpacity>
            <ArrowLeft />
          </TouchableOpacity>

          <Text style={styles.text_header}>{props.headerTitle}</Text>
        </View>
      </View>
      <View style={styles.container_white}>{props.children}</View>
      <TouchableOpacity onPress={() => props.navigation.navigate("NameScreen")}>
        <Text>lien suivant </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
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

export default BackgroundBicolor;
