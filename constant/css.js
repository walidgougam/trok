import colors from "./colors";
import normalize from "react-native-normalize";

export default {
  title: {
    color: colors.main_green,
    fontSize: normalize(16, "fontSize"),
    marginBottom: normalize(11),
    lineHeight: 20,
    // fontFamily: "avenir heavy"
  },
  text_description: {
    // fontFamily,"Avenir Roman"
    fontSize: normalize(12, "fontSize"),
    color: colors.text_description_black,
    lineHeight: 20,
    marginBottom: normalize(11),
  },
};
