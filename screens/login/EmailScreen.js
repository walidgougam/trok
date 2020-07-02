import React, { useState, useContext } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Dimensions,
  Button,
  TouchableOpacity,
} from "react-native";
import {
  useNavigation,
  useRoute,
  useFocusEffect,
  useNavigationState,
} from "@react-navigation/native";
import { GlobalContext, GlobalProvider } from "../../context/globalState";
import normalize from "react-native-normalize";
import colors from "../../constant/colors";
import css from "../../constant/css";

import BtnBlueAction from "../../component/BtnBlueAction";
import InputComponent from "../../component/InputComponent";
import GreenLineLoaderLogin from "../../component/GreenLineLoaderLogin";
import HeaderComponent from "../../component/HeaderComponent";

const EmailScreen = ({ navigation }) => {
  const [error, setError] = useState(true);
  const [hidePassword, setHidePassword] = useState(true);
  const { email, setEmail } = useContext(GlobalContext);
  const { password, setPassword } = useContext(GlobalContext);
  const route = useRoute();

  const handleInput = (value, type) => {
    switch (type) {
      case "email":
        return setEmail(value);
      case "password":
        return setPassword(value);
      default:
        console.log("rien");
    }
  };
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
        <View style={[styles.container_white]}>
          <Text style={styles.title}>Bienvenue !</Text>
          <Text style={styles.text_input_question}>
            Tout d’abord, quelle est votre adresse email ?
          </Text>
          <View style={{ marginBottom: normalize(24) }}>
            <InputComponent
              login
              error={error}
              title={email}
              placeholder="Votre adresse email"
              onChangeText={(value) => handleInput(value, "email")}
            />
            <Text style={styles.input_warning}>
              Vous recevrez un email de confirmation
            </Text>
          </View>

          <Text style={styles.text_input_question}>
            Ensuite, choisissez un mot de passe
          </Text>
          <View>
            <InputComponent
              login
              error={error}
              title={password}
              password
              secureTextEntry={hidePassword}
              showPassword={() => setHidePassword(!hidePassword)}
              hidePassword={true}
              placeholder="Votre mot de passe"
              onChangeText={(value) => handleInput(value, "password")}
            />
            <Text style={styles.input_warning}>
              Il doit contenir au moins 8 caractères.
            </Text>
          </View>
        </View>
        <BtnBlueAction
          title="Continuer"
          navigation={() => navigation.navigate("Name")}
          backgroundColor={colors.btn_action}
          color={colors.text_white}
        />
      </View>
    </View>
  );
};

// const EmailScreen = (props) => {
//   return (
//     <BackgroundBicolor
//       headerTitle="Créer mon compte"
//       children={render()}
//       navigation={props.navigation}
//     />
//   );
// };

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  header: {
    backgroundColor: colors.main_green,
    height: normalize(70, "height"),
    justifyContent: "flex-end",
  },
  container_white: {
    marginHorizontal: normalize(16),
  },
  title: {
    ...css.title,
  },
  text_input_question: {
    ...css.text_description,
  },
  input_warning: {
    fontSize: normalize(10, "fontSize"),
    color: colors.text_description_black,
    // fontFamily:"Avenir ROman"
  },
});

export default EmailScreen;
