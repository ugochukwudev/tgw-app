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
} from "react-native";
import moment from "moment";
import IconText from "../components/IconText";
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

// Firebase references

// Double-check that we can run the example
if (!app?.options || Platform.OS === "web") {
  throw new Error(
    "This example only works on Android or iOS, and requires a valid Firebase config."
  );
}
const City = () => {
  const navigation: any = useNavigation();
  const [name, setName] = useState<string | null>();
  const {
    container,
    cityName,
    cityText,
    countryName,
    imageLayout,
    populationWrapper,
    populationText,
    riseSetWrapper,
    riseSetText,
    rowLayout,
  } = styles;
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
  return (
    <SafeAreaView style={[imageLayout, container, {}]}>
      <View style={[populationWrapper, rowLayout]}>
        <IconText
          iconName={"user"}
          iconColor={"#fff"}
          bodyText={name !== null ? `Hello ${name} !` : `...`}
          bodyTextStyles={{ color: "white", fontSize: 20 }}
        />
      </View>
      <View
        style={{
          width: "90%",
          backgroundColor: "#fff",
          borderRadius: 16,
          marginTop: 30,
          padding: 16,
        }}
      >
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignContent: "center",
          }}
        >
          <Text style={{ color: "#2580af", fontSize: 20 }}>Wallet</Text>
          <Text style={{ color: "#2580af", fontSize: 16 }}>
            Transaction history
          </Text>
        </View>
        <View
          style={{
            backgroundColor: "#2580af",
            padding: 6,
            borderRadius: 10,
            marginVertical: 6,
          }}
        >
          <Text style={{ fontSize: 20, fontWeight: "600", color: "white" }}>
            Account Balance
          </Text>
          <Text
            style={{
              fontSize: 16,
              fontWeight: "500",
              paddingVertical: 4,
              color: "white",
            }}
          >
            $5000
          </Text>
        </View>
        <View
          style={{
            marginVertical: 10,
            borderRadius: 16,
            paddingHorizontal: 10,
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <View
            style={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <MaterialIcons name="add-box" size={30} color="#2580af" />
            <Text style={{ color: "#2580af" }}>Add money</Text>
          </View>
          <View
            style={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <MaterialCommunityIcons name="transfer" size={30} color="#2580af" />
            <Text style={{ color: "#2580af" }}>Transfer</Text>
          </View>
          <View
            style={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <MaterialCommunityIcons
              name="shape-square-rounded-plus"
              size={30}
              color="#2580af"
            />
            <Text style={{ color: "#2580af" }}>Withdraw</Text>
          </View>
        </View>
        <TouchableOpacity
          onPress={() => {
            setName(null);
            showToast();
            handleLogout();
            setTimeout(() => {
              navigation.navigate("Login");
            }, 1000);
          }}
          style={{
            backgroundColor: "#2580af",

            width: "40%",
            display: "flex",
            alignItems: "center",
            alignSelf: "flex-end",
            paddingVertical: 10,
            borderRadius: 10,
          }}
        >
          <Text style={{ color: "white", fontSize: 16 }}>Logout</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // paddingTop: 10,
    backgroundColor: "#2580af",
  },
  imageLayout: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  cityName: {
    fontSize: 40,
  },
  countryName: {
    fontSize: 30,
  },
  cityText: {
    justifyContent: "center",
    alignSelf: "center",
    color: "white",
    fontWeight: "bold",
  },
  populationWrapper: {
    justifyContent: "center",
    marginTop: 30,
  },
  populationText: {
    fontSize: 25,
    marginLeft: 7.5,
    color: "red",
  },
  riseSetWrapper: {
    justifyContent: "space-around",
    marginTop: 30,
  },
  rowLayout: {
    flexDirection: "row",
    alignItems: "center",
  },
  riseSetText: {
    fontSize: 20,
    color: "white",
  },
});

export default City;
