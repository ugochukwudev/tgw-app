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
  TouchableOpacity,
  StatusBar,
} from "react-native";
import { colors } from "../constants/colors";
import { LinearGradient } from "expo-linear-gradient";
import HorizontalLine from "../components/HorizontalLine";
import FriendsMessage from "../components/FriendsMessage";
import YourMessage from "../components/YourMessage";
import { Ionicons, AntDesign, Entypo } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
const Chat = ({ route }: any) => {
  const activeMap = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  const top: any = StatusBar.currentHeight;
  const height = Dimensions.get("window").height - 90;
  const { type } = route.params;
  const navigation: any = useNavigation();
  return (
    <View
      style={{
        flex: 1,
      }}
    >
      <ScrollView
        contentContainerStyle={{
          backgroundColor: colors.green,
        }}
      >
        <View
          style={{
            paddingHorizontal: 16,
            position: "relative",
            display: "flex",
            height: 50,
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <Image
            style={{ width: 50, height: 50, borderRadius: 999 }}
            source={
              type == "group"
                ? require("../../assets/city-background.jpg")
                : require("../../assets/user-image.jpeg")
            }
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
              {type == "group" ? "Solana Devs" : "Okoro Odumodoback"}
            </Text>
            <Text style={{ color: colors.white }}>Active now</Text>
          </View>
          {type == "group" && (
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("PendingRequests");
              }}
              style={{
                backgroundColor: colors.yellow,
                paddingVertical: 10,
                paddingHorizontal: 10,
                marginLeft: 30,
                borderRadius: 999,
              }}
            >
              <Text style={{ color: colors.white }}>1 Pending Request</Text>
            </TouchableOpacity>
          )}
        </View>
        <HorizontalLine />
        <View style={{ height: height, backgroundColor: "#d8efee" }}>
          <ScrollView style={{ display: "flex" }}>
            {activeMap.map(() => {
              return (
                <>
                  <FriendsMessage content="Abeg wetin be ship or yatch website" />
                  <FriendsMessage content="Let's discuss something else biko..." />
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
    </View>
  );
};

export default Chat;
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
