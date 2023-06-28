import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { colors } from "../constants/colors";
import { useNavigation } from "@react-navigation/native";

type Props = {
  name: string;
  more: string;
  run?: () => void;
};
const DoubleHeaders = ({ name, more, run }: Props) => {
  const navigation: any = useNavigation();
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
      <TouchableOpacity
        onPress={() => {
          run && run();
        }}
      >
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
