import { StyleSheet, Text, View } from "react-native";
import { s, ms, vs } from "react-native-size-matters";
import MastercardImage from "../assets/MastercardImage.svg";
import SizedBox from "./SizedBox";

const AddPaymentMethodContainer = () => {
  return (
    <View style={styles.paymentMethodContainer}>
      <MastercardImage />
      <SizedBox height={vs(12)} />
      <Text style={styles.title}>No master card added</Text>
      <SizedBox height={vs(4)} />
      <Text style={styles.description}>
        You can add a mastercard and save it for later
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  paymentMethodContainer: {
    borderRadius: s(10),
    backgroundColor: "#F7F8F9",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    paddingVertical: vs(25),
    paddingHorizontal: s(40),
  },
  title: {
    fontSize: ms(16),
    fontWeight: "700",
    fontFamily: "Sen",
    color: "#32343E",
  },
  description: {
    fontWeight: "400",
    fontFamily: "Sen",
    fontSize: ms(15),
    letterSpacing: 0.5,
    lineHeight: vs(24),
    textAlign: "center",
    color: "#2D2D2D",
  },
});

export default AddPaymentMethodContainer;
