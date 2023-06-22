import React from "react";
import { Text, View, Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { colors } from "../constants/colors";
type Props = {
  category: string;
  name: string;
};
const WalletActions = ({ category, name }: Props) => {
  return (
    <View style={{ display: "flex", alignItems: "center" }}>
      {category == "add" ? (
        <Ionicons name="add-circle" size={30} color="white" />
      ) : category == "withdraw" ? (
        <Image
          source={require("../../assets/withdraw.png")}
          style={{ width: 30, height: 30 }}
        />
      ) : (
        <MaterialCommunityIcons name="transfer" size={30} color="white" />
      )}
      <Text style={{ color: colors.white, fontSize: 14, fontWeight: "400" }}>
        {name}
      </Text>
    </View>
  );
};

export default WalletActions;
