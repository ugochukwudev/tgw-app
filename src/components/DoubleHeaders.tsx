import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { colors } from "../constants/colors";
type Props = {
  name: string;
  more: string;
};
const DoubleHeaders = ({ name, more }: Props) => {
  return (
    <View
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <Text
        style={{
          marginVertical: 10,
          fontWeight: "700",
          color: colors.white,
          fontSize: 20,
        }}
      >
        {name}
      </Text>
      <TouchableOpacity>
        <Text
          style={{
            marginVertical: 10,
            fontWeight: "500",
            color: colors.white,
            fontSize: 16,
          }}
        >
          {more}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default DoubleHeaders;
