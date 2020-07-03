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
import css from "../../constant/css";

import GreenLineLoaderLogin from "../../component/GreenLineLoaderLogin";
import HeaderComponent from "../../component/HeaderComponent";
import BtnBlueAction from "../../component/BtnBlueAction";
import PictureProfileComponent from "../../component/PictureProfileComponent";

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
          <PictureProfileComponent
            width={133}
            height={133}
            title="user_pseudo"
          />
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
    marginBottom: 62,
  },
});
