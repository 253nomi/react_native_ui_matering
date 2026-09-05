import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { s, ms, vs } from "react-native-size-matters";

interface CommonSocialInfoProps {
  socialIcon: React.ReactNode;
  title: string;
  actionIcon: React.ReactNode;
}

const SocialSectionInfo = ({
  socialIcon,
  title,
  actionIcon,
}: CommonSocialInfoProps) => {
  return (
    <View style={styles.socialInfoView}>
      <View
        style={{
          flexDirection: "row",
          gap: s(10),
          alignItems: "center",
          justifyContent: "flex-start",
        }}
      >
        {socialIcon}
        <Text style={styles.title}>{title}</Text>
      </View>
      {actionIcon}
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: ms(12),
  },
  socialInfoView: {
    paddingVertical: vs(16),
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between", // For Main Axis Alignment in Row & Cross Axis Alignment in Column
    alignItems: "center", // For Cross Axis Alignment in Row & Main Axis Alignment in Column
    borderBottomColor: "#E4E6E8",
    borderBottomWidth: 1,
  },
});

export default SocialSectionInfo;
