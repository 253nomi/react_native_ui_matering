import { StyleSheet, Image } from "react-native";
import { s } from "react-native-size-matters";

const UserAvatar = () => {
  return (
    <Image
      source={{
        uri: "https://trapezeonline.com/wp-content/uploads/2019/12/gar1.png",
      }}
      style={styles.imageAvatar}
    />
  );
};

const styles = StyleSheet.create({
  imageAvatar: {
    height: s(32),
    width: s(32),
    borderRadius: s(16),
  },
});

export default UserAvatar;
