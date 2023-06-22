import React from "react";
import { View, Image, Text } from "react-native";
import { colors } from "../constants/colors";
const PendingTransactions = () => {
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
          source={require("../../assets/user-image.jpeg")}
          style={{ height: 50, width: "22%", borderRadius: 999 }}
        />
        <View style={{ marginLeft: 10 }}>
          <Text
            style={{ color: colors.white, fontSize: 20, fontWeight: "500" }}
          >
            James Allan
          </Text>
          <Text
            style={{ color: colors.white, fontSize: 16, fontWeight: "400" }}
          >
            Card 4243 5262 764
          </Text>
        </View>
      </View>
      <View style={{}}>
        <Text style={{ color: colors.white, fontSize: 20, fontWeight: "500" }}>
          +$50.00
        </Text>
        <Text style={{ color: colors.white, fontSize: 16, fontWeight: "400" }}>
          15Jul23
        </Text>
      </View>
    </View>
  );
};

export default PendingTransactions;
