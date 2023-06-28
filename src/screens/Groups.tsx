import React from "react";
import {
  ScrollView,
  View,
  Text,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import Header from "../components/Header";
import { colors } from "../constants/colors";
import { LinearGradient } from "expo-linear-gradient";
import { AntDesign } from "@expo/vector-icons";
import DashboardGroups from "../components/DashboardGroups";

const Groups = () => {
  const activeMap = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  const navigation: any = useNavigation();

  const groups = () => {
    navigation.navigate("Chat", {
      type: "group",
    });
  };
  return (
    <LinearGradient
      colors={[colors.yellow, colors.primary]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 0 }}
      style={{ flex: 1, backgroundColor: colors.darkPrimary }}
    >
      <View
        style={{
          marginTop: 70,
          width: "90%",
          display: "flex",
          alignSelf: "center",
        }}
      >
        <Header name="Groups" />
      </View>
      <View
        style={{
          width: "90%",
          marginTop: 30,
          display: "flex",
          alignSelf: "center",
        }}
      >
        <Text
          style={{
            fontSize: 24,
            fontWeight: "600",
            color: colors.white,
          }}
        >
          Groups
        </Text>
      </View>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          marginTop: 10,
          borderColor: "gray",
          borderRadius: 5,
          padding: 5,
          backgroundColor: colors.white,
          display: "flex",
          alignSelf: "center",
          width: "90%",
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
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("CreateGroup");
        }}
        style={{
          backgroundColor: colors.green,
          marginTop: 20,
          width: "35%",
          alignItems: "center",
          display: "flex",
          alignSelf: "flex-end",
          paddingVertical: 10,
          marginRight: "5%",
          borderRadius: 10,
          marginBottom: 10,
        }}
      >
        <Text style={{ color: colors.white, fontSize: 16, fontWeight: "600" }}>
          Create Group
        </Text>
      </TouchableOpacity>
      <ScrollView>
        <Text
          style={{
            marginVertical: 10,
            fontWeight: "700",
            color: colors.white,
            fontSize: 20,
            marginLeft: "5%",
          }}
        >
          Suggested Groups
        </Text>
        <View
          style={{
            width: "90%",
            display: "flex",
            alignSelf: "center",
            elevation: 1,
            borderRadius: 10,
            marginVertical: 20,
            paddingHorizontal: 20,
            paddingVertical: 20,
          }}
        >
          {activeMap.splice(0, 2).map(() => {
            return (
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate("JoinGroup");
                }}
              >
                <DashboardGroups />
              </TouchableOpacity>
            );
          })}
        </View>
        <Text
          style={{
            marginVertical: 10,
            fontWeight: "700",
            color: colors.white,
            fontSize: 20,
            marginLeft: "5%",
          }}
        >
          My Groups
        </Text>
        <View
          style={{
            width: "90%",
            display: "flex",
            alignSelf: "center",
            elevation: 1,
            borderRadius: 10,
            marginVertical: 20,
            paddingHorizontal: 20,
            paddingVertical: 20,
          }}
        >
          {activeMap.splice(0, 10).map(() => {
            return (
              <TouchableOpacity
                onPress={() => {
                  groups();
                }}
              >
                <DashboardGroups />
              </TouchableOpacity>
            );
          })}
        </View>
      </ScrollView>
    </LinearGradient>
  );
};

export default Groups;
