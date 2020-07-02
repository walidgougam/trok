import React, { Component } from "react";
import { Text, View, StyleSheet } from "react-native";
import Swiper from "react-native-swiper";
import normalize from "react-native-normalize";

const TitleText = (props) => {
  return (
    <Text style={{ fontSize: normalize(48, "fontSize"), color: "white" }}>
      {props.label}
    </Text>
  );
};

const ProductSheetScreen = () => {
  return (
    <Swiper style={styles.wrapper} showsButtons={true}>
      <View style={styles.slide1}>
        <Text style={styles.text}>Hello Swiper</Text>
      </View>
      <View style={styles.slide2}>
        <Text style={styles.text}>Beautiful</Text>
      </View>
      <View style={styles.slide3}>
        <Text style={styles.text}>And simple</Text>
      </View>
    </Swiper>
  );
};

var styles = StyleSheet.create({
  wrapper: {},
  slide1: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#9DD6EB",
  },
  slide2: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#97CAE5",
  },
  slide3: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#92BBD9",
  },
  text: {
    color: "#fff",
    fontSize: normalize(30, "fontSize"),
    fontWeight: "bold",
  },
});
export default ProductSheetScreen;
