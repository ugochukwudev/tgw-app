import React, { useState } from "react";
import {
  ScrollView,
  Switch,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import Header from "../components/Header";
import { LinearGradient } from "expo-linear-gradient";
import { colors } from "../constants/colors";
const CreateGroups = () => {
  const [isEnabled, setIsEnabled] = useState(true);

  const toggleSwitch = () => {
    setIsEnabled((previousState) => !previousState);
  };
  return (
    <LinearGradient
      colors={[colors.yellow, colors.primary]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 0 }}
      style={{ flex: 1, backgroundColor: colors.darkPrimary }}
    >
      <ScrollView>
        <View
          style={{
            marginTop: 70,
            width: "90%",
            display: "flex",
            alignSelf: "center",
          }}
        >
          <Header name="Create Group" />
        </View>
        <View
          style={{
            marginTop: 50,
            display: "flex",
            alignItems: "center",
            alignSelf: "center",
            width: "90%",
          }}
        >
          <TextInput
            style={{
              width: "100%",
              height: 50,
              backgroundColor: colors.white,
              borderRadius: 16,
              paddingHorizontal: 20,
            }}
            placeholder="name of new group..."
          />
          <TextInput
            style={{
              width: "100%",
              height: 150,
              backgroundColor: colors.white,
              borderRadius: 16,
              paddingHorizontal: 20,
              marginTop: 30,
              textAlignVertical: "top", // Set the vertical alignment to top
              paddingVertical: 10,
            }}
            placeholder="group description..."
            multiline={true}
          />
          <View
            style={{
              elevation: 1,
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              marginTop: 30,
              width: "100%",
              justifyContent: "space-between",
              paddingHorizontal: 16,
              borderRadius: 10,
            }}
          >
            <Text style={{ color: colors.white, fontSize: 16 }}>
              {isEnabled
                ? "Approve Users Personally"
                : "Add Users without Approval"}
            </Text>
            <Switch
              style={{}}
              trackColor={{ false: "#767577", true: colors.primary }}
              thumbColor={colors.white}
              ios_backgroundColor="#3e3e3e"
              onValueChange={toggleSwitch}
              value={isEnabled}
            />
          </View>
          <TouchableOpacity
            style={{
              width: "40%",
              backgroundColor: colors.yellow,
              marginTop: 30,
              paddingVertical: 10,
              display: "flex",
              alignItems: "center",
              borderRadius: 10,
            }}
          >
            <Text
              style={{
                color: colors.white,
                fontSize: 16,
              }}
            >
              Create Group
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </LinearGradient>
  );
};

export default CreateGroups;
