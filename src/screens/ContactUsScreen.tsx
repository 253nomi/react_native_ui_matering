import { Image, StyleSheet, View } from "react-native";
import { s, vs } from "react-native-size-matters";
import BackButton from "../components/BackButton";
import UserAvatar from "../components/UserAvatar";
import SendButton from "../components/SendButton";
import CommonButton from "../components/CommonButton";
import WhatsApp from "../assets/Whatsapp.svg";

const ContactUsScreen = () => {
  return (
    <View style={styles.container}>
      <HeaderView />
      <SendButton />
      <CommonButton
        child={<WhatsApp />}
        width={46}
        height={46}
        borderRadius={40}
        backgroundColor="#fff"
        borderWidth={1}
        borderColor="#E4E6E8"
        onPress={() => {}}
      />
    </View>
  );
};

const HeaderView = () => {
  return (
    <View style={styles.headerView}>
      <BackButton />
      <UserAvatar />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    marginTop: vs(50),
    paddingHorizontal: s(16),
  },

  headerView: {
    flexDirection: "row",
    justifyContent: "space-between", // For Main Axis Alignment in Row & Cross Axis Alignment in Column
    alignContent: "center", // For Cross Axis Alignment in Row & Main Axis Alignment in Column
  },
});

export default ContactUsScreen;
