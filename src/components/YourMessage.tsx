import React from "react";
import { View, Text } from "react-native";
import { colors } from "../constants/colors";
type Props = {
  content: string;
};
const YourMessage = ({ content }: Props) => {
  return (
    <View
      style={{
        width: "50%",
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
        borderTopLeftRadius: 10,
        alignSelf: "flex-end",
        backgroundColor: colors.black,
        marginHorizontal: 20,
        marginVertical: 20,
        paddingVertical: 6,
        paddingHorizontal: 10,
      }}
    >
      <Text style={{ color: colors.white, fontSize: 16 }}>{content}</Text>
    </View>
  );
};

export default YourMessage;
