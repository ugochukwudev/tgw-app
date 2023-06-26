import React from "react";
import {
  ScrollView,
  View,
  Text,
  Image,
  Dimensions,
  TextInput,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { colors } from "../constants/colors";
import { LinearGradient } from "expo-linear-gradient";
import HorizontalLine from "../components/HorizontalLine";
import FriendsMessage from "../components/FriendsMessage";
import YourMessage from "../components/YourMessage";
import { Ionicons, AntDesign, Entypo } from "@expo/vector-icons";
const Chat = () => {
  const activeMap = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  const height = Dimensions.get("window").height - 125;

  return (
    <LinearGradient
      colors={[colors.test, "#3e7270"]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 0 }}
      style={{ flex: 1 }}
    >
      <ScrollView>
        <View
          style={{
            marginTop: 50,
            paddingHorizontal: 16,
            position: "relative",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <Image
            style={{ width: 50, height: 50, borderRadius: 999 }}
            source={require("../../assets/user-image.jpeg")}
          />
          <View
            style={{
              backgroundColor: "green",
              height: 15,
              width: 15,
              borderRadius: 999,
              position: "absolute",
              top: 35,
              left: 50,
              borderColor: colors.white,
              borderWidth: 2,
            }}
          ></View>
          <View style={{ marginLeft: 24 }}>
            <Text style={{ color: colors.white, fontWeight: "600" }}>
              Okoro Odumodoback
            </Text>
            <Text style={{ color: colors.white }}>Active now</Text>
          </View>
        </View>
        <HorizontalLine />
        <View style={{ height: height }}>
          <ScrollView style={{ display: "flex" }}>
            {activeMap.map(() => {
              return (
                <>
                  <FriendsMessage content="Abeg wetin be ship or yatch website" />
                  <YourMessage content="lol. omo go ask chat GPT nothing concern me and this thing wey you dey yarn... Abeg no dey stress me broddy" />
                </>
              );
            })}
          </ScrollView>
        </View>
        <View style={{ height: 50 }}>
          <View
            style={{
              borderBottomColor: "white",
              borderBottomWidth: 1,
            }}
          />
          <View
            style={{
              width: "100%",
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              height: "100%",
              paddingHorizontal: 8,
            }}
          >
            <Ionicons name="camera" size={24} color="white" />
            <View
              style={{
                backgroundColor: colors.white,
                width: "80%",
                height: "80%",
                marginLeft: 12,
                marginRight: 12,
                borderRadius: 999,
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <KeyboardAvoidingView
                style={{
                  display: "flex",
                  justifyContent: "center",
                  width: "80%",

                  marginLeft: 10,
                  marginRight: 10,
                }}
                behavior={Platform.OS === "ios" ? "padding" : undefined}
                keyboardVerticalOffset={Platform.OS === "ios" ? 64 : 0}
              >
                <TextInput
                  style={{
                    width: "100%",
                    height: 50,
                  }}
                  keyboardType="web-search"
                  multiline={true}
                  placeholder="type..."
                />
              </KeyboardAvoidingView>
              <Entypo name="emoji-happy" size={24} color={colors.primary} />
            </View>
            <AntDesign name="like1" size={24} color="white" />
          </View>
        </View>
      </ScrollView>
    </LinearGradient>
  );
};

export default Chat;
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
