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
import { ProfileWhiteIcon } from "../../assets/icon/Icon";
import css from "../../constant/css";

import GreenLineLoaderLogin from "../../component/GreenLineLoaderLogin";
import HeaderComponent from "../../component/HeaderComponent";
import BtnBlueAction from "../../component/BtnBlueAction";
import RadioButton from "../../component/RadioBtnComponent";

export default function GenderScreen({ navigation }) {
  const route = useRoute();
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
          <Text style={styles.title}>Pour finir !</Text>
          <Text style={styles.text_description}>Vous êtes</Text>
          <View>
            <RadioButton title="un trokeur" />
            <RadioButton title="une trokeuse" />
          </View>
        </View>
        <BtnBlueAction
          title="Terminer"
          backgroundColor={colors.btn_action}
          color={colors.background_white}
          navigation={() => navigation.navigate("HomeBottomTab")}
        />
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
});
