import React from "react";
import { s } from "react-native-size-matters";
import {
  TouchableOpacity,
  StyleSheet,
  GestureResponderEvent,
} from "react-native";

interface CommonButtonProps {
  child: React.ReactNode;
  backgroundColor?: string;
  height?: number;
  width?: number;
  borderRadius?: number;
  borderWidth?: number;
  borderColor?: string;
  onPress?: (event: GestureResponderEvent) => void;
}

const CommonButton = ({
  child,
  backgroundColor = "#FF7622",
  height = 48,
  width = 48,
  borderRadius = 8,
  borderWidth = 0,
  borderColor = "transparent",
  onPress,
}: CommonButtonProps) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        styles.button,
        {
          backgroundColor,
          width: s(width),
          height: s(height),
          borderRadius: s(borderRadius),
          borderWidth,
          borderColor,
        },
      ]}
    >
      {child}
    </TouchableOpacity>
  );
};

export default CommonButton;

const styles = StyleSheet.create({
  button: {
    justifyContent: "center",
    alignItems: "center",
  },
});
