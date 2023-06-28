/* eslint-disable react/no-unstable-nested-components */
import React, { useState, useEffect } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { AntDesign } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import { useNavigation } from "@react-navigation/native";

import { MaterialIcons } from "@expo/vector-icons";

import { Entypo } from "@expo/vector-icons";
import { auth } from "../firebase/firebase";
import { colors } from "../constants/colors";
import Dashboard from "../screens/Dashboard";
import Wallet from "../screens/Wallet";
import { FontAwesome5 } from "@expo/vector-icons";
import Friends from "../screens/Friends";
import Calculator from "../screens/Calculator";
import Profile from "../screens/Profile";
// Double-check that we can run the example

const Tab = createBottomTabNavigator();

const Tabs = () => {
  const unsubscribe = auth.onAuthStateChanged(async (user) => {
    if (user) {
      const currentTime = Date.now() / 1000;
      let userData = await user.getIdTokenResult();
      let expirationTime = await userData.expirationTime;
      console.log(currentTime, new Date(expirationTime).getTime());

      // User is authenticated, fetch their data
    } else {
      navigation.navigate("Login");
      // User is not authenticated, handle accordingly
      // e.g., redirect to login screen
    }
  });
  const navigation: any = useNavigation();

  useEffect(() => {
    unsubscribe();
  }, []);
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: colors.primary,
        tabBarInactiveTintColor: "gray",
        headerShown: false,
        tabBarStyle: {
          backgroundColor: "#fff",
        },
        headerStyle: {
          backgroundColor: "#fff",
        },
        headerTitleStyle: {
          color: "#9873fe",
          display: "none",
        },
      }}
    >
      <Tab.Screen
        name={"DashBoard"}
        options={{
          tabBarIcon: ({ focused }) => (
            <MaterialIcons
              name="dashboard-customize"
              size={25}
              color={focused ? colors.primary : "black"}
            />
          ),
        }}
      >
        {() => <Dashboard />}
      </Tab.Screen>
      <Tab.Screen
        name={"Wallet"}
        options={{
          tabBarIcon: ({ focused }) => (
            <Entypo
              name="wallet"
              size={25}
              color={focused ? colors.primary : "black"}
            />
          ),
        }}
      >
        {() => <Wallet />}
      </Tab.Screen>
      <Tab.Screen
        name={"Profile"}
        options={{
          tabBarIcon: ({ focused }) => (
            <MaterialCommunityIcons
              name={"face-man-profile"}
              size={25}
              color={focused ? colors.primary : "black"}
            />
          ),
        }}
      >
        {() => <Profile />}
      </Tab.Screen>
      <Tab.Screen
        name={"Friends"}
        options={{
          tabBarIcon: ({ focused }) => (
            <FontAwesome5
              name="user-friends"
              size={25}
              color={focused ? colors.primary : "black"}
            />
          ),
        }}
      >
        {() => <Friends />}
      </Tab.Screen>
      <Tab.Screen
        name={"Calculator"}
        options={{
          tabBarIcon: ({ focused }) => (
            <AntDesign
              name={"calculator"}
              size={25}
              color={focused ? colors.primary : "black"}
            />
          ),
        }}
      >
        {() => <Calculator />}
      </Tab.Screen>
      {/* <Tab.Screen name={"Chat"} options={{ tabBarButton: () => null }}>
        {() => <Chat />}
      </Tab.Screen> */}
    </Tab.Navigator>
  );
};

export default Tabs;
