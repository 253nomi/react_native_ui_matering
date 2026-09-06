import { StyleSheet, Text, View } from "react-native";
import { s, ms, vs } from "react-native-size-matters";

const AddPaymentMethodButton = () => {
  return (
    <View style={styles.addPaymentMethodButton}>
      <Text style={styles.title}>+ ADD NEW</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  addPaymentMethodButton: {
    paddingVertical: vs(16),
    borderColor: "#F0F5FA",
    borderWidth: s(2),
    borderRadius: s(10),
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    color: "#FF7622",
    fontSize: ms(14),
    fontWeight: "700",
    fontFamily: "Sen_700Bold",
  },
});

export default AddPaymentMethodButton;
