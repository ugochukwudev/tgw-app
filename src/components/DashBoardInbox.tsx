import React from "react";
import { View, Image, Text } from "react-native";
import { colors } from "../constants/colors";
const DashBoardInbox = () => {
  return (
    <View
      style={{
        backgroundColor: colors.white,
        display: "flex",
        flexDirection: "row",
        paddingHorizontal: 10,
        paddingVertical: 10,
        marginBottom: 10,
        alignItems: "center",
        borderRadius: 16,
      }}
    >
      <Image
        style={{ width: "15%", height: 55, borderRadius: 999 }}
        source={require("../../assets/user-image.jpeg")}
      />
      <View style={{ marginLeft: 20 }}>
        <Text style={{ fontSize: 18, fontWeight: "600" }}>Ekene</Text>
        <Text style={{}}>How far my broddy...</Text>
      </View>
    </View>
  );
};

export default DashBoardInbox;
