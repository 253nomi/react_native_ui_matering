import { StyleSheet, TouchableOpacity, View } from "react-native";
import { s } from "react-native-size-matters";
import CommonButton from "./CommonButton";
import Feather from "@expo/vector-icons/Feather";

interface SendButtonProps {
  onPress: () => void;
}

const SendButton = ({ onPress }: SendButtonProps) => {
  return (
    <CommonButton
      child={<Feather name="send" size={s(24)} color="white" />}
      width={46}
      height={46}
      borderRadius={40}
      backgroundColor="#1077AF"
      onPress={onPress}
    />
  );
};
export default SendButton;
