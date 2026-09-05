import { FlatList, StyleSheet, Text, View } from "react-native";
import { s, vs, ms } from "react-native-size-matters";
import BackButton from "../components/BackButton";
import UserAvatar from "../components/UserAvatar";
import SendButton from "../components/SendButton";
import CommonButton from "../components/CommonButton";
import SocialSectionInfo from "../components/SocialSectionInfo";
import SizedBox from "../components/SizedBox";
import { socialPlatforms } from "../models/SocialPlatformModel";

const ContactUsScreen = () => {
  return (
    <View style={styles.container}>
      <HeaderView />
      <SizedBox height={vs(20)} />
      <Text
        style={{
          fontWeight: "600",
          fontSize: ms(30),
        }}
      >
        Contact Us
      </Text>
      <SizedBox height={vs(20)} />
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
      <Text
        style={{
          fontWeight: "600",
          fontSize: ms(16),
        }}
      >
        Social Media Platforms
      </Text>

      <FlatList
        data={socialPlatforms}
        keyExtractor={(item) => item.key}
        renderItem={({ item, index }) => {
          const Logo = item.logo;
          return (
            <SocialSectionInfo
              socialIcon={
                <CommonButton
                  child={<Logo />}
                  width={46}
                  height={46}
                  borderRadius={40}
                  borderWidth={1}
                  borderColor="#E4E6E8"
                />
              }
              title={item.title}
              actionIcon={
                <SendButton
                  onPress={() => {
                    console.log(item.key);
                  }}
                />
              }
            />
          );
        }}
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
    paddingTop: vs(16),
    paddingBottom: vs(25),
  },
});

export default ContactUsScreen;
