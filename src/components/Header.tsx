import React from "react";
import { View, Image, Text } from "react-native";
import { colors } from "../constants/colors";
type Props = {
  name: string;
};
const Header = ({ name }: Props) => {
  return (
    <View
      style={{
        backgroundColor: colors.white,
        paddingVertical: 10,
        paddingHorizontal: 10,

        borderRadius: 999,
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <Text style={{ color: colors.primary, fontSize: 16, fontWeight: "600" }}>
        {name}
      </Text>
      <Image
        source={require("../../assets/user-image.jpeg")}
        style={{ width: "9%", height: 32, borderRadius: 999 }}
      />
    </View>
  );
};

export default Header;
