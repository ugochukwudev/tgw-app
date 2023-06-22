import React from "react";
import { View, Text, Image } from "react-native";
import { colors } from "../constants/colors";
const FriendChat = () => {
  return (
    <View
      style={{
        display: "flex",
        flexDirection: "row",
        marginBottom: 10,
        alignItems: "center",
      }}
    >
      <Image
        style={{ width: 60, height: 60, borderRadius: 999 }}
        source={require("../../assets/user-image.jpeg")}
      />
      <View style={{ marginHorizontal: 15 }}>
        <Text style={{ fontWeight: "700", color: colors.white }}>
          Alexander Paul
        </Text>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <Text style={{ color: colors.white }}>You: I n see PWA </Text>
          <View
            style={{
              backgroundColor: colors.white,
              width: 2,
              height: 2,
              borderRadius: 999,
              marginHorizontal: 5,
            }}
          ></View>
          <Text style={{ color: colors.white }}>2:11 PM</Text>
        </View>
      </View>
    </View>
  );
};

export default FriendChat;
