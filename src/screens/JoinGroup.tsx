import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { View, TouchableOpacity, Image, Text, ScrollView } from "react-native";
import { colors } from "../constants/colors";
import Header from "../components/Header";
import Toast from "react-native-toast-message";

const JoinGroup = () => {
  const showToast = (texta: string, textb?: string) => {
    Toast.show({
      type: "info",
      text1: texta,
      text2: textb,
    });
  };
  return (
    <LinearGradient
      colors={[colors.yellow, colors.primary]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 0 }}
      style={{ flex: 1, backgroundColor: colors.darkPrimary }}
    >
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{
          marginTop: 70,
          width: "90%",
          display: "flex",
          alignSelf: "center",
        }}
      >
        <Header name="Join Group" />
        <View
          style={{
            width: "100%",
            marginTop: 30,
            display: "flex",
            alignItems: "center",
          }}
        >
          <Image
            style={{ width: "80%", height: 250, borderRadius: 999 }}
            source={require("../../assets/city-background.jpg")}
          />
          <Text
            style={{ fontSize: 20, fontWeight: "700", color: colors.white }}
          >
            Solana Developers
          </Text>
          <Text style={{ color: colors.white }}>Members: 33.4k</Text>
        </View>
        <View>
          <Text
            style={{ fontSize: 18, fontWeight: "600", color: colors.white }}
          >
            About
          </Text>
          <Text
            style={{ fontSize: 15, fontWeight: "400", color: colors.white }}
          >
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Inventore
            hic voluptates ex blanditiis quis sit enim! Blanditiis expedita
            dolor dicta laboriosam laudantium enim saepe inventore architecto,
            soluta accusantium ipsum mollitia. Lorem ipsum, dolor sit amet
            consectetur adipisicing elit. Inventore hic voluptates ex blanditiis
            quis sit enim! Blanditiis expedita dolor dicta laboriosam laudantium
            enim saepe inventore architecto, soluta accusantium ipsum mollitia.
          </Text>
        </View>
        <TouchableOpacity
          onPress={() => {
            showToast(
              "Request sent",
              "Your Request to Join Solana is Pending until an Admin Accepts You..."
            );
          }}
          style={{
            backgroundColor: colors.darkPrimary,
            width: "35%",
            marginTop: 10,
            display: "flex",
            alignSelf: "flex-end",
            paddingVertical: 10,
            alignItems: "center",
            borderRadius: 999,
            marginBottom: 10,
          }}
        >
          <Text
            style={{ color: colors.white, fontSize: 16, fontWeight: "600" }}
          >
            Join!
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </LinearGradient>
  );
};

export default JoinGroup;
