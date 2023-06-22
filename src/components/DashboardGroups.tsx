import React from "react";
import { View, Image, Text } from "react-native";
import { colors } from "../constants/colors";
const DashboardGroups = () => {
  return (
    <View
      style={{
        height: 50,
        width: "100%",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: 20,
      }}
    >
      <View
        style={{
          height: 50,
          display: "flex",
          flexDirection: "row",
        }}
      >
        <Image
          source={require("../../assets/city-background.jpg")}
          style={{ height: 50, width: "20%", borderRadius: 999 }}
        />
        <View style={{ marginLeft: 10 }}>
          <Text
            style={{ color: colors.white, fontSize: 20, fontWeight: "500" }}
          >
            Solana Devs
          </Text>
          <Text
            style={{ color: colors.white, fontSize: 16, fontWeight: "400" }}
          >
            Unread: 300 messages
          </Text>
        </View>
      </View>
    </View>
  );
};

export default DashboardGroups;
