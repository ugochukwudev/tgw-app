import React from "react";
import { View, Image } from "react-native";
import { colors } from "../constants/colors";
import Header from "../components/Header";
const PreviewPic = () => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: colors.primary,
        display: "flex",
      }}
    >
      <View
        style={{
          marginTop: 50,
          display: "flex",
          paddingHorizontal: "5%",
        }}
      >
        <Header name="Profile Pic" />
      </View>
      <View
        style={{
          height: "80%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Image
          style={{
            width: "100%",
            height: "50%",
          }}
          source={require("../../assets/user-image.jpeg")}
        />
      </View>
    </View>
  );
};

export default PreviewPic;
