import React from "react";
import { View, Text, StyleSheet, ImageBackground } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Feather } from "@expo/vector-icons";
import { s, ms, vs } from "react-native-size-matters";

export interface MediationCardProps {
  backgroundImage: string;
  badgeText: string;
  title: string;
  time: string;
}

const MeditationCard = ({
  backgroundImage,
  badgeText,
  title,
  time,
}: MediationCardProps) => {
  return (
    <View style={styles.card}>
      <ImageBackground
        source={{
          uri: backgroundImage,
        }}
        style={styles.image}
        imageStyle={styles.imageStyle}
      >
        {/* Dark gradient at bottom */}
        <LinearGradient
          colors={["#0F0B0700", "#0F0B07"]}
          style={styles.gradient}
        />

        {/* Live Badge */}
        <View style={styles.liveBadge}>
          <Text style={styles.liveText}>{badgeText}</Text>
        </View>

        {/* Bottom Content */}
        <View style={styles.content}>
          <Text style={styles.title}>{title}</Text>

          <View style={styles.dateRow}>
            <Feather name="video" size={s(16)} color="#4A90E2" />

            <Text style={styles.dateText}>{time}</Text>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    width: "48.5%",
    height: vs(161),
    borderRadius: s(12),
    overflow: "hidden",
  },

  image: {
    flex: 1,
  },

  imageStyle: {
    borderRadius: s(12),
  },

  gradient: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    height: "55%",
  },

  liveBadge: {
    alignSelf: "flex-end",
    top: vs(8),
    right: s(8),
    paddingHorizontal: s(8),
    paddingVertical: s(3),
    borderRadius: s(90),
    backgroundColor: "#ED151C",
    alignItems: "center",
    justifyContent: "center",
  },

  liveText: {
    color: "#FFFFFF",
    fontSize: ms(11),
    fontFamily: "Montserrat_600SemiBold",
  },

  content: {
    position: "absolute",
    left: s(8),
    right: s(8),
    bottom: vs(8),
  },

  title: {
    color: "#FFFFFF",
    fontSize: ms(12),
    fontFamily: "Montserrat_600SemiBold",
  },

  dateRow: {
    flexDirection: "row",
    alignItems: "center",
  },

  dateText: {
    color: "#FFFFFF",
    fontSize: ms(12),
    fontFamily: "Montserrat_400Regular",
    marginLeft: s(12),
  },
});

export default MeditationCard;
