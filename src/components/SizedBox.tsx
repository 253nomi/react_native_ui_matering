import React, { ReactNode } from "react";
import { View } from "react-native";
import { scale, verticalScale } from "react-native-size-matters";

// 1. Define the interface for the props
interface SizedBoxProps {
  width?: number;
  height?: number;
  children?: ReactNode; // ReactNode allows any valid React child (text, components, etc.)
}

// 2. Apply the interface to the component
const SizedBox = ({ width, height, children }: SizedBoxProps) => {
  return (
    <View
      style={{
        width: width ? scale(width) : undefined,
        height: height ? verticalScale(height) : undefined,
      }}
    >
      {children}
    </View>
  );
};

export default SizedBox;
