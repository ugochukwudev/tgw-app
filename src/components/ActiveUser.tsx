import React from "react";
import { View, Image, Text } from "react-native";
import { colors } from "../constants/colors";
const ActiveUser = () => {
  return (
    <View
      style={{
        width: 60,
        display: "flex",
        alignItems: "center",
        height: 60,
        marginLeft: 5,
        position: "relative",
      }}
    >
      <Image
        style={{ width: 50, height: 50, borderRadius: 999 }}
        source={require("../../assets/user-image.jpeg")}
      />
      <Text style={{ color: colors.white, fontSize: 16, fontWeight: "400" }}>
        Francis
      </Text>
      <View
        style={{
          backgroundColor: "green",
          height: 15,
          width: 15,
          borderRadius: 999,
          position: "absolute",
          top: 35,
          right: 7,
          borderColor: colors.white,
          borderWidth: 2,
        }}
      ></View>
    </View>
  );
};

export default ActiveUser;
