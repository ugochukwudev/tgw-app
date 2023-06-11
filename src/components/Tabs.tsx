/* eslint-disable react/no-unstable-nested-components */
import React, { useState, useEffect } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import CurrentWeather from "../screens/CurrentWeather";
import UpcomingWeather from "../screens/UpcomingWeather";
import City from "../screens/Profile";
import { Feather } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import OnBoardUi from "../screens/onBoardUi";
import Login from "../screens/Login";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
//import { initializeApp, getApp } from "firebase/app";

import { Platform } from "react-native";

//import { app, auth } from "../firebase/firebase";

// Double-check that we can run the example

const Tab = createBottomTabNavigator();

const Tabs = () => {
  // const unsubscribe = auth.onAuthStateChanged((user) => {
  //   if (user) {
  //     // User is authenticated, fetch their data
  //     console.log("hurray");
  //   } else {
  //     navigation.navigate("Login");
  //     // User is not authenticated, handle accordingly
  //     // e.g., redirect to login screen
  //   }
  // });
  const navigation: any = useNavigation();
  const retrieveData = async () => {
    try {
      const value = await AsyncStorage.getItem("isnew");
      if (value == "false") {
        console.log("Retrieved data:", value);

        // Clean up the auth state listener
      } else {
        try {
          await AsyncStorage.setItem("isnew", "false");
          console.log("Data stored successfully!");
          navigation.navigate("OnBoard");
        } catch (error) {
          console.log("Error storing data:", error);
        }
      }
    } catch (error) {
      console.log("Error retrieving data:", error);
    }
  };
  useEffect(() => {
    retrieveData();
  }, []);
  useEffect(() => {
    //unsubscribe();
  }, []);
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: "#2580af",
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
        name={"Calculates"}
        options={{
          tabBarIcon: ({ focused }) => (
            <AntDesign
              name={"calculator"}
              size={25}
              color={focused ? "#2580af" : "black"}
            />
          ),
        }}
      >
        {() => <CurrentWeather />}
      </Tab.Screen>

      <Tab.Screen
        name={"Profile"}
        options={{
          tabBarIcon: ({ focused }) => (
            <MaterialCommunityIcons
              name={"face-man-profile"}
              size={25}
              color={focused ? "#2580af" : "black"}
            />
          ),
        }}
      >
        {() => <City />}
      </Tab.Screen>
    </Tab.Navigator>
  );
};

export default Tabs;
