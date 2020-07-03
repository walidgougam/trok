import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import colors from "../../constant/colors";
import HeaderLogo from "../../component/HeaderLogo";
import { ProfilePictureIcon } from "../../assets/icon/Icon";

export default function ProfileScreen({ title }) {
  return (
    <View style={styles.container}>
      <HeaderLogo />
      <View style={{ marginTop: 34 }}>
        <View style={styles.wrapper_profile_icon}>
          <ProfilePictureIcon width={86} height={86} />
          <Text style={styles.pseudo}>{title}</Text>
        </View>
      </View>
      <Text>changer ma photo de profil</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background_white,
  },
});
