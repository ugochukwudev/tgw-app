import React from "react";
import { View, Text, Image } from "react-native";
import { colors } from "../constants/colors";
type Props = {
  content: string;
};
const FriendsMessage = ({ content }: Props) => {
  return (
    <View
      style={{
        marginHorizontal: 20,
        marginVertical: 20,
        display: "flex",
        flexDirection: "row",
      }}
    >
      <Image
        style={{ width: 50, height: 50, marginRight: 6, borderRadius: 999 }}
        source={require("../../assets/user-image.jpeg")}
      />
      <View
        style={{
          width: "50%",
          borderTopRightRadius: 10,
          borderBottomLeftRadius: 10,
          borderBottomRightRadius: 10,
          backgroundColor: colors.darkPrimary,

          paddingVertical: 6,
          paddingHorizontal: 10,
        }}
      >
        <Text style={{ color: colors.white, fontSize: 16 }}>{content}</Text>
      </View>
    </View>
  );
};

export default FriendsMessage;
