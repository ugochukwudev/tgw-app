import React from "react";
import { View, Image, Text } from "react-native";
import { colors } from "../constants/colors";
const DashboardSavedpost = () => {
  return (
    <View
      style={{
        height: 50,
        width: "100%",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: 20,
        alignItems: "center",
      }}
    >
      <View
        style={{
          height: 50,
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <Image
          source={require("../../assets/upcoming-background.jpg")}
          style={{ height: 40, width: "14%", borderRadius: 999 }}
        />
        <View style={{ marginLeft: 10 }}>
          <Text
            style={{ color: colors.white, fontSize: 20, fontWeight: "500" }}
          >
            How I Made $300...
          </Text>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              width: "86%",
            }}
          >
            <Text
              style={{ color: colors.white, fontSize: 16, fontWeight: "400" }}
            >
              It was like magic when...
            </Text>
            <Text
              style={{ color: colors.white, fontSize: 16, fontWeight: "400" }}
            >
              10Jun23
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default DashboardSavedpost;
