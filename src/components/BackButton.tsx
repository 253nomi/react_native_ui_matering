import { StyleSheet, TouchableOpacity, View } from "react-native";
import { s } from "react-native-size-matters";
import { Ionicons } from "@expo/vector-icons";
import CommonButton from "./CommonButton";

const BackButton = () => {
  return (
    <CommonButton
      child={<Ionicons name="arrow-back" size={s(20)} color="#181C2E" />}
      width={32}
      height={32}
      borderRadius={16}
      backgroundColor="#ECF0F4"
      onPress={() => {}}
    />
  );
};
export default BackButton;
