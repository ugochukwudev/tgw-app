import React, { useEffect, useState } from "react";
import {
  SafeAreaView,
  Text,
  StyleSheet,
  ImageBackground,
  StatusBar,
  View,
  TouchableOpacity,
  Platform,
  Image,
  ScrollView,
} from "react-native";
import moment from "moment";
import { MaterialIcons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import Toast from "react-native-toast-message";
import { initializeApp, getApp } from "firebase/app";
import {
  getAuth,
  PhoneAuthProvider,
  signInWithCredential,
  updateCurrentUser,
  updateProfile,
  User,
} from "firebase/auth";
import { app, auth } from "../firebase/firebase";
import { colors } from "../constants/colors";
import ProfileDetails from "../components/ProfileDetails";
import Header from "../components/Header";

// Firebase references

// Double-check that we can run the example

const Profile = () => {
  const navigation: any = useNavigation();
  const [name, setName] = useState<any>();
  const [loading, setLoading] = useState<boolean>(false);
  const [privateProfile, setPrivateProfile] = useState<boolean>(false);

  const showToast = () => {
    Toast.show({
      type: "info",
      text1: "Logging Out",
      text2: "",
    });
  };
  const unsubscribe = auth.onAuthStateChanged((user) => {
    if (user) {
      // User is authenticated, fetch their data
      setName(user.displayName);
    } else {
      navigation.navigate("Login");
      // User is not authenticated, handle accordingly
      // e.g., redirect to login screen
    }
  });
  useEffect(() => {
    // Clean up the auth state listener
    unsubscribe();
  }, []);

  const handleLogout = async () => {
    try {
      await auth.signOut();
      // User is logged out successfully
    } catch (error) {
      // Handle error logging out
    }
  };
  const padding = StatusBar.currentHeight && StatusBar.currentHeight + 20;
  return (
    <ImageBackground source={require("../../assets/dashboard-bg.jpg")}>
      <ScrollView
        nestedScrollEnabled={true}
        scrollEnabled={true}
        contentContainerStyle={{
          paddingVertical: padding,
          alignItems: "center",
          justifyContent: "center",
          flexGrow: 1,
        }}
      >
        <View style={{ width: "90%" }}>
          <Header name="Profile" />
        </View>
        <View
          style={{
            backgroundColor: colors.white,
            marginTop: 30,
            width: "90%",
            borderRadius: 16,
            display: "flex",
            justifyContent: "center",
            alignContent: "center",
            alignItems: "center",
            paddingVertical: 20,
          }}
        >
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("PreviewPic");
            }}
            style={{
              width: "100%",
              display: "flex",
              alignItems: "center",
            }}
          >
            <Image
              source={require("../../assets/user-image.jpeg")}
              style={{ borderRadius: 999, width: "30%", height: 100 }}
            />
          </TouchableOpacity>
          <Text
            style={{ color: colors.primary, fontWeight: "600", fontSize: 20 }}
          >
            {name}
          </Text>
          <Text
            style={{ color: colors.primary, fontWeight: "400", fontSize: 16 }}
          >
            Techy
          </Text>
        </View>
        <View
          style={{
            backgroundColor: colors.white,
            height: 50,
            width: "90%",
            marginTop: 20,
            display: "flex",
            alignContent: "center",
            flexDirection: "row",
            justifyContent: "space-between",
            paddingHorizontal: 10,
            paddingVertical: 10,
            borderRadius: 999,
          }}
        >
          <TouchableOpacity
            onPress={() => {
              setPrivateProfile((prev) => !prev);
            }}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: 999,
              backgroundColor: privateProfile
                ? colors.white
                : colors.darkPrimary,
              width: "40%",
            }}
          >
            <Text
              style={{
                color: !privateProfile ? colors.white : colors.primary,
                fontSize: 16,
                fontWeight: "500",
              }}
            >
              Public
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setPrivateProfile((prev) => !prev);
            }}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: 999,
              backgroundColor: privateProfile
                ? colors.darkPrimary
                : colors.white,
              width: "40%",
            }}
          >
            <Text
              style={{
                color: privateProfile ? colors.white : colors.primary,
                fontSize: 16,
                fontWeight: "500",
              }}
            >
              Private
            </Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            width: "90%",
            marginTop: 50,
          }}
        >
          <View
            style={{
              display: "flex",
              justifyContent: "space-between",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <Text
              style={{ fontSize: 20, color: colors.white, fontWeight: "600" }}
            >
              Profile
            </Text>
            <Text style={{ color: colors.white }}>Edit Profile</Text>
          </View>
          <View
            style={{
              marginTop: 20,
              paddingVertical: 12,
              display: "flex",
            }}
          >
            {privateProfile ? (
              <>
                <ProfileDetails subject="Name" content={name && name} />

                <ProfileDetails subject="Phone Number" content="08024299898" />
              </>
            ) : (
              <>
                <ProfileDetails subject="Name" content="Techy" />
                <ProfileDetails subject="Country" content="Nigeria" />
                <ProfileDetails subject="State" content="Lagos" />
                <ProfileDetails subject="Currencies" content="NGN, USD,TGw" />
              </>
            )}
          </View>
          <TouchableOpacity
            onPress={() => {
              setLoading(true);
              showToast();
              handleLogout();
              setLoading(false);
            }}
          >
            <Text
              style={{
                backgroundColor: colors.black,
                width: "40%",
                padding: 10,
                paddingVertical: 15,
                alignSelf: "flex-end",
                color: colors.white,
                alignItems: "center",
                textAlign: "center",
                borderRadius: 16,
                fontWeight: "700",
                fontSize: 16,
              }}
            >
              {loading ? "Loading..." : "Logout"}
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </ImageBackground>
  );
};

export default Profile;
