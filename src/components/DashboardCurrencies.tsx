import React from "react";
import { View, Text } from "react-native";
import { colors } from "../constants/colors";
type Props = {
  name: string;
  balance: string;
};
const DashboardCurrencies = ({ name, balance }: Props) => {
  return (
    <View
      style={{
        backgroundColor: colors.primary,
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <Text style={{ color: colors.white, fontSize: 24, fontWeight: "700" }}>
        {name}
      </Text>
      <View style={{ marginLeft: 20, marginRight: 20 }}>
        <Text style={{ fontSize: 18, fontWeight: "600", color: colors.white }}>
          Balance
        </Text>
        <Text style={{ color: colors.white }}>{balance}</Text>
      </View>
    </View>
  );
};

export default DashboardCurrencies;
