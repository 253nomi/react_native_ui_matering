import { View, Text, StyleSheet, Image } from "react-native";
import FoodLogo from "../assets/FoodLogo";

const IntroScreen = () => {
  return (
    <View>
      <Image
        source={require("../assets/Logo.png")}
        style={{
          marginTop: 80,
        }}
      />
      <FoodLogo />
    </View>
  );
};

export default IntroScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
