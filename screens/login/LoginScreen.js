import React, { Component } from "react";
import {
  Text,
  View,
  StyleSheet,
  Image,
  TouchableHighlight,
  TouchableOpacity,
} from "react-native";
import images from "../../assets/image/images";
import colors from "../../constant/colors";
import { IconGoogle, IconFacebook } from "../../assets/icon/Icon";
import normalize from "react-native-normalize";

const LoginScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.container_image}>
        <Image source={images.hands} style={styles.image} />
        <View style={styles.wrapper_text_image}>
          <Text style={styles.title_image}>Bienvenue</Text>
          <Text style={styles.text_image}>
            L’application éco-responsable et solidaire de troc d’objets et de
            services entre particuliers !
          </Text>
        </View>
      </View>
      <View style={styles.container_orange}>
        <View style={styles.wrapper_btn}>
          <View>
            <TouchableOpacity
              style={[
                styles.btn,
                {
                  backgroundColor: colors.background_white,
                  marginBottom: normalize(25),
                },
              ]}
            >
              <IconGoogle />
              <Text
                style={[styles.text_btn, { color: colors.text_google_grey }]}
              >
                Login avec Google
              </Text>
            </TouchableOpacity>
          </View>
          <View>
            <TouchableOpacity
              style={[
                styles.btn,
                {
                  backgroundColor: colors.background_facebook_blue,
                  marginBottom: normalize(25),
                },
              ]}
            >
              <IconFacebook />
              <Text style={[styles.text_btn, { color: colors.text_white }]}>
                Login avec Facebook
              </Text>
            </TouchableOpacity>
          </View>
          <View>
            <TouchableOpacity
              style={[
                styles.btn,
                {
                  backgroundColor: "transparent",
                  borderWidth: 1,
                  borderColor: colors.background_white,
                },
              ]}
              onPress={() => navigation.navigate("Email")}
            >
              <Text style={[styles.text_btn, { color: colors.text_white }]}>
                Login avec mon mail
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <TouchableHighlight style={styles.btn_connect}>
          <Text style={styles.text_connect}>Se connecter</Text>
        </TouchableHighlight>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "blue",
  },
  container_image: {
    flex: 1,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  wrapper_text_image: {
    position: "absolute",
    marginHorizontal: normalize(17),
    marginVertical: normalize(29),
    bottom: 0,
  },
  title_image: {
    color: colors.text_white,
    fontSize: normalize(20, "fontSize"),
    marginBottom: normalize(17),
    // fontFamily:"Avenir Heavy"
  },
  text_image: {
    color: colors.text_white,
    fontSize: normalize(15, "fontSize"),
    // fontFamily:"Avenir Medium"
  },
  container_orange: {
    backgroundColor: colors.main_green,
    flex: 1,
  },
  wrapper_btn: {
    marginVertical: normalize(45),
  },
  btn: {
    height: normalize(52, "height"),
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: normalize(68),
    borderRadius: normalize(26),
  },
  text_btn: {
    fontSize: normalize(16, "fontSize"),
    marginLeft: normalize(13),
    // fontFamily:Avenir Book
  },
  icon_google: {
    width: normalize(10, "width"),
    height: normalize(10, "height"),
  },
  btn_connect: {
    alignSelf: "center",
  },
  text_connect: {
    color: colors.text_white,
    textDecorationLine: "underline",
  },
});

export default LoginScreen;
