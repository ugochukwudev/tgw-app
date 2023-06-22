import React from "react";
import { View, Text } from "react-native";
import { colors } from "../constants/colors";
type props = {
  subject: string;
  content: string | null;
};
const ProfileDetails = ({ subject, content }: props) => {
  return (
    <View
      style={{
        backgroundColor: colors.white,
        borderRadius: 16,
        paddingVertical: 20,
        paddingHorizontal: 10,
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: 10,
      }}
    >
      <Text style={{ fontSize: 18, color: colors.primary, fontWeight: "700" }}>
        {subject}
      </Text>
      <Text style={{ fontSize: 16, fontWeight: "600", color: colors.primary }}>
        {content}
      </Text>
    </View>
  );
};

export default ProfileDetails;
