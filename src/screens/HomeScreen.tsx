import { View, Text, StyleSheet, FlatList } from "react-native";
import { useState } from "react";
import SizedBox from "../components/SizedBox";
import { s, ms, vs } from "react-native-size-matters";
import MeditationCard from "../components/MediationCard";
import HomeButtonsView from "../components/HomeButtonsView";
import { ButtonType } from "../components/HomeButtonsView";
import { MediationCardProps } from "../components/MediationCard";

const HomeScreen = () => {
  const [selectedButton, setSelectedButton] = useState<ButtonType>("Live");
  return (
    <View style={styles.container}>
      <SizedBox height={vs(50)} />

      <Text style={styles.title}>Meditations</Text>
      <SizedBox height={vs(3)} />
      <Text style={styles.description}>Lorem Ipsum is simply dummy text</Text>

      <SizedBox height={vs(10)} />
      <HomeButtonsView
        buttons={[
          {
            title: "Live",
            onPress: () => {
              setSelectedButton("Live");
            },
          },
          {
            title: "Recorded",
            onPress: () => {
              setSelectedButton("Recorded");
            },
          },
        ]}
        selectedButton={selectedButton}
        setSelectedButton={setSelectedButton}
      />
      <SizedBox height={vs(10)} />
      <FlatList
        data={meditationCards}
        numColumns={2}
        columnWrapperStyle={{
          justifyContent: "space-between",
          marginBottom: vs(12),
        }}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item, index }) => (
          <MeditationCard
            backgroundImage={item.backgroundImage}
            badgeText={item.badgeText}
            title={item.title}
            time={item.time}
          />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: s(16),
  },
  title: {
    fontSize: ms(20),
    fontWeight: "600",
    fontFamily: "Montserrat_600SemiBold",
  },
  description: {
    fontSize: ms(14),
    fontWeight: "400",
    fontFamily: "Montserrat_400Regular",
    color: "#2C2016",
  },
});

export default HomeScreen;

const meditationCards: MediationCardProps[] = [
  {
    backgroundImage:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSR0ResjUoOkHt8gZY49EovYtNZr27sIni_1Elkta3FhA&s",
    badgeText: "live",
    title: "Meditation",
    time: "31ˢᵗ Jan - 09:00 am",
  },
  {
    backgroundImage:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSR0ResjUoOkHt8gZY49EovYtNZr27sIni_1Elkta3FhA&s",
    badgeText: "live",
    title: "Morning Meditation",
    time: "1ˢᵗ Feb - 10:00 am",
  },
  {
    backgroundImage:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSR0ResjUoOkHt8gZY49EovYtNZr27sIni_1Elkta3FhA&s",
    badgeText: "live",
    title: "Mindfulness",
    time: "2ⁿᵈ Feb - 09:30 am",
  },
  {
    backgroundImage:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSR0ResjUoOkHt8gZY49EovYtNZr27sIni_1Elkta3FhA&s",
    badgeText: "live",
    title: "Relaxation",
    time: "3ʳᵈ Feb - 08:00 am",
  },
  {
    backgroundImage:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSR0ResjUoOkHt8gZY49EovYtNZr27sIni_1Elkta3FhA&s",
    badgeText: "live",
    title: "Deep Focus",
    time: "4ᵗʰ Feb - 11:00 am",
  },
  {
    backgroundImage:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSR0ResjUoOkHt8gZY49EovYtNZr27sIni_1Elkta3FhA&s",
    badgeText: "live",
    title: "Evening Calm",
    time: "5ᵗʰ Feb - 07:00 pm",
  },
];
