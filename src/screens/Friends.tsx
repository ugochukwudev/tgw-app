import React from "react";
import {
  ImageBackground,
  ScrollView,
  View,
  Text,
  TextInput,
} from "react-native";
import Header from "../components/Header";
import { colors } from "../constants/colors";
import { AntDesign } from "@expo/vector-icons";
import ActiveUser from "../components/ActiveUser";
import FriendChat from "../components/FriendChat";
import { LinearGradient } from "expo-linear-gradient";
const Friends = () => {
  const activeMap = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  return (
    <LinearGradient
      colors={[colors.test, colors.darkPrimary]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 0 }}
      style={{ flex: 1 }}
    >
      <ScrollView
        nestedScrollEnabled={true}
        scrollEnabled={true}
        contentContainerStyle={{
          alignItems: "center",
          justifyContent: "center",
          flexGrow: 1,
          marginTop: 50,
        }}
      >
        <View style={{ width: "90%", marginVertical: 30 }}>
          <Header name="Friends" />
        </View>
        <View style={{ width: "90%" }}>
          <Text
            style={{
              fontSize: 24,
              fontWeight: "600",
              color: colors.white,
            }}
          >
            Friends
          </Text>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginTop: 10,
              borderColor: "gray",
              borderRadius: 5,
              padding: 5,
              backgroundColor: colors.white,
            }}
          >
            <AntDesign
              name="search1"
              size={20}
              color="black"
              style={{ marginRight: 10 }}
            />
            <TextInput
              style={{ flex: 1, fontSize: 16 }}
              placeholder="Search"
              placeholderTextColor="gray"
            />
          </View>
          <ScrollView
            horizontal
            showsVerticalScrollIndicator={false}
            showsHorizontalScrollIndicator={false}
            style={{
              height: 70,
              width: "100%",
              marginTop: 30,
              display: "flex",
              flexDirection: "row",
              overflow: "scroll",
            }}
          >
            {activeMap.map(() => {
              return <ActiveUser />;
            })}
          </ScrollView>
          <View style={{ marginVertical: 50 }}>
            {activeMap.map(() => {
              return <FriendChat />;
            })}
          </View>
        </View>
      </ScrollView>
    </LinearGradient>
  );
};

export default Friends;
