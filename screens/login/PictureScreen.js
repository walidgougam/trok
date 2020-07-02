import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import normalize from "react-native-normalize";
import {
  useNavigation,
  useRoute,
  useFocusEffect,
  useNavigationState,
} from "@react-navigation/native";
import colors from "../../constant/colors";
import { ProfileWhite } from "../../assets/icon/Icon";
import css from "../../constant/css";

import GreenLineLoaderLogin from "../../component/GreenLineLoaderLogin";
import HeaderComponent from "../../component/HeaderComponent";
import BtnBlueAction from "../../component/BtnBlueAction";

export default function PictureScreen({ navigation }) {
  const route = useRoute();
  const [picture, setPicture] = useState(false);
  return (
    <View style={styles.container}>
      <HeaderComponent navigation={navigation} />
      <GreenLineLoaderLogin focus={route} />
      <View
        style={{
          flex: 1,
          justifyContent: "space-between",
          marginVertical: 45,
        }}
      >
        <View style={styles.container_white}>
          <Text style={styles.title}>Choisir ma photo</Text>
          <Text style={styles.text_description}>
            Vous aurez plus de chance d’échanger avec votre photo !
          </Text>
          <View style={styles.wrapper_profile_icon}>
            <ProfileWhite />
            <Text style={styles.pseudo}>user_pseudo</Text>
          </View>
        </View>
        <View>
          <BtnBlueAction
            title="Ajouter une photo"
            marginBottom={normalize(18)}
            backgroundColor={colors.btn_action}
            color={colors.text_white}
          />
          <BtnBlueAction
            title={picture ? "Suivant" : "Passer"}
            backgroundColor={colors.background_white}
            color={colors.btn_action}
            navigation={() => navigation.navigate("Gender")}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  container_white: {
    marginHorizontal: normalize(16),
  },
  title: {
    ...css.title,
  },
  text_description: {
    ...css.text_description,
  },
  wrapper_profile_icon: {
    alignItems: "center",
    marginTop: 62,
  },
  pseudo: {
    marginTop: 12,
    color: colors.text_description_black,
    fontSize: 14,
    fontFamily: "Avenir Medium",
    lineHeight: 20,
  },
});
