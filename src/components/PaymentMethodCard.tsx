import React from "react";
import { s, vs } from "react-native-size-matters";
import {
  TouchableOpacity,
  StyleSheet,
  View,
  GestureResponderEvent,
  Text,
} from "react-native";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";

interface PaymentMethodCardProp {
  paymentMethodIcon: React.ReactNode;
  backgroundColor?: string;
  height?: number;
  width?: number;
  borderRadius?: number;
  borderWidth?: number;
  borderColor?: string;
  isSelected: boolean;
  paymentMethodName: string;
  onPress: (event: GestureResponderEvent) => void;
}

const PaymentMethodCard = ({
  isSelected,
  paymentMethodIcon,
  backgroundColor = "#F5F5FA",
  height = 72,
  width = 85,
  borderRadius = 10,
  borderWidth = 0,
  borderColor = "transparent",
  paymentMethodName,
  onPress,
}: PaymentMethodCardProp) => {
  return (
    <TouchableOpacity
      style={{
        justifyContent: "center",
        alignItems: "center",
      }}
      onPress={onPress}
    >
      <View
        style={[
          {
            backgroundColor,
            width: s(width),
            height: vs(height),
            borderRadius: s(borderRadius),
            borderWidth,
            borderColor,
          },
          styles.cardStyle,
          isSelected && styles.selectedCardStyle,
        ]}
      >
        {isSelected && (
          <View style={styles.checkStyle}>
            <FontAwesome5 name="check" size={s(9)} color="white" />
          </View>
        )}
        {paymentMethodIcon}
      </View>
      <Text style={styles.label}> {paymentMethodName}</Text>
    </TouchableOpacity>
  );
};

export default PaymentMethodCard;

const styles = StyleSheet.create({
  cardStyle: {
    justifyContent: "center",
    alignItems: "center",
  },
  selectedCardStyle: {
    backgroundColor: "#fff",
    borderWidth: s(2),
    borderColor: "#FF7622",
  },
  checkStyle: {
    height: s(24),
    width: s(24),
    borderRadius: s(12),
    borderWidth: s(2),
    borderColor: "#fff",
    backgroundColor: "#FF7622",
    position: "absolute",
    zIndex: 1,
    top: s(-10),
    right: s(-10),
    alignItems: "center",
    justifyContent: "center",
  },
  label: {
    fontSize: s(14),
    color: "#464E57",
    justifyContent: "center",
    alignItems: "center",
    marginTop: vs(4),
  },
});
