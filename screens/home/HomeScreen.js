import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import colors from "../../constant/colors";

import HeaderLogo from "../../component/HeaderLogo";
import FeedServices from "./FeedServices";
import FeedGoods from "./FeedGoods";
import BtnHomeToggle from "../../component/BtnHomeToggle";

export default function HomeScreen() {
  const [goods, setGoods] = useState(true);
  return (
    <View style={styles.container}>
      <HeaderLogo />
      <View style={styles.wrapper_toggle_btn}>
        <BtnHomeToggle
          title="Biens"
          focus={goods}
          changeFocus={() => setGoods(true)}
        />
        <BtnHomeToggle
          title="Services"
          focus={!goods}
          changeFocus={() => setGoods(false)}
        />
      </View>
      {goods ? <FeedGoods /> : <FeedServices />}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background_white,
  },
  wrapper_toggle_btn: {
    flexDirection: "row",
    height: 57,
  },
});
