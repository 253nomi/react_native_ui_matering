import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { HomeButtonModel } from "../models/HomeButtonModel";
import { s, ms, vs } from "react-native-size-matters";

export type ButtonType = "Live" | "Recorded";

interface ButtonViewProps {
  buttons: HomeButtonModel[];
  selectedButton: ButtonType;
  setSelectedButton: React.Dispatch<React.SetStateAction<ButtonType>>;
}

const HomeButtonsView = ({
  buttons,
  selectedButton,
  setSelectedButton,
}: ButtonViewProps) => {
  return (
    <View style={styles.buttonsView}>
      {buttons.map((button) => (
        <TouchableOpacity
          key={button.title}
          onPress={button.onPress}
          style={[
            styles.buttonView,
            selectedButton === button.title && {
              backgroundColor: "#75563B",
            },
          ]}
        >
          <Text>{button.title}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default HomeButtonsView;

const styles = StyleSheet.create({
  buttonsView: {
    height: vs(40),
    width: "100%",
    borderRadius: s(12),
    backgroundColor: "#F5F5F4",
    flexDirection: "row",
    alignItems: "center",
  },
  buttonView: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    height: vs(32),
    borderRadius: s(8),
  },
});
