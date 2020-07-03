import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput, Dimensions } from "react-native";
import normalize from "react-native-normalize";
import {
  useNavigation,
  useRoute,
  useFocusEffect,
  useNavigationState,
} from "@react-navigation/native";
import css from "../../constant/css";
import colors from "../../constant/colors";

import BackgroundBicolor from "../../component/BackgroundBicolor";
import InputComponent from "../../component/InputComponent";
import GreenLineLoaderLogin from "../../component/GreenLineLoaderLogin";
import HeaderComponent from "../../component/HeaderComponent";
import BtnBlueAction from "../../component/BtnBlueAction";

const NameScreen = ({ navigation }) => {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const route = useRoute();
  return (
    <View style={styles.container}>
      <HeaderComponent navigation={navigation} />
      <GreenLineLoaderLogin focus={route} />
      <View
        style={{
          flex: 1,
          justifyContent: "space-between",
          marginVertical: normalize(45),
        }}
      >
        <View style={styles.container_white}>
          <Text style={styles.text_question}>Quel est votre nom ? </Text>
          <Text style={styles.text_description}>
            Vous apparaitrez sous la forme Prénom.N sur la plateforme.
          </Text>
          <InputComponent
            error={true}
            placeholder="Prénom"
            marginBottom={normalize(11)}
            value={firstname}
            onChangeText={(value) => setFirstname(value)}
          />
          <InputComponent
            error={true}
            placeholder="Nom"
            value={lastname}
            onChangeText={(value) => setLastname(value)}
          />
        </View>
        <BtnBlueAction
          title="Continuer"
          navigation={() => navigation.navigate("Picture")}
          backgroundColor={colors.btn_action}
          color={colors.text_white}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  container_white: {
    marginHorizontal: normalize(16),
  },
  text_question: {
    ...css.title,
  },
  text_description: {
    ...css.text_description,
  },
});

export default NameScreen;
