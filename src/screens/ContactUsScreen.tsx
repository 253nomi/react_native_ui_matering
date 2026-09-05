import { Image, StyleSheet, Text, View } from "react-native";
import { s, vs, ms } from "react-native-size-matters";
import BackButton from "../components/BackButton";
import UserAvatar from "../components/UserAvatar";
import SendButton from "../components/SendButton";
import CommonButton from "../components/CommonButton";
import WhatsApp from "../assets/Whatsapp.svg";
import SocialSectionInfo from "../components/SocialSectionInfo";
import SizedBox from "../components/SizedBox";

const ContactUsScreen = () => {
  return (
    <View style={styles.container}>
      <HeaderView />
      <SocialSectionView />
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

const SocialSectionView = () => {
  return (
    <View style={styles.socialSectionView}>
      <SizedBox height={vs(10)} />

      <Text
        style={{
          fontWeight: "600",
          fontSize: ms(10),
        }}
      >
        Social Media Platforms
      </Text>

      <SocialSectionInfo
        socialIcon={
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
        }
        title="WhatsApp"
        actionIcon={<SendButton onPress={() => {}} />}
      />
      <SocialSectionInfo
        socialIcon={
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
        }
        title="WhatsApp"
        actionIcon={<SendButton onPress={() => {}} />}
      />
      <SocialSectionInfo
        socialIcon={
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
        }
        title="WhatsApp"
        actionIcon={<SendButton onPress={() => {}} />}
      />
      <SocialSectionInfo
        socialIcon={
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
        }
        title="WhatsApp"
        actionIcon={<SendButton onPress={() => {}} />}
      />
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
    alignItems: "center", // For Cross Axis Alignment in Row & Main Axis Alignment in Column
  },

  socialSectionView: {
    backgroundColor: "#F5F5FA",
    width: "100%",
    borderRadius: s(14),
    paddingHorizontal: s(16),
  },
});

export default ContactUsScreen;
