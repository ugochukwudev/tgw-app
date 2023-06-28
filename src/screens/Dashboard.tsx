import React, { useEffect, useState } from "react";
import { Image, ScrollView, Text, View, ImageBackground } from "react-native";
import { colors } from "../constants/colors";
import { StatusBar } from "react-native";
import DashBoardInbox from "../components/DashBoardInbox";
import PendingTransactions from "../components/PendingTransactions";
import DashboardGroups from "../components/DashboardGroups";
import DashboardSavedpost from "../components/DashboardSavedpost";
import Header from "../components/Header";
import { auth } from "../firebase/firebase";
import { useNavigation } from "@react-navigation/native";
import DoubleHeaders from "../components/DoubleHeaders";

const Dashboard = () => {
  const navigation: any = useNavigation();
  const padding = StatusBar.currentHeight && StatusBar.currentHeight + 20;
  const [name, setName] = useState<any>();
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
  return (
    <ImageBackground source={require("../../assets/dashboard-bg.jpg")}>
      <ScrollView
        contentContainerStyle={{
          flexGrow: 1,

          paddingVertical: padding,
          paddingHorizontal: 10,
        }}
      >
        <Header name="Dashboard" />
        <View
          style={{
            marginTop: 30,
            backgroundColor: colors.white,
            width: "100%",
            borderRadius: 16,
            display: "flex",
            justifyContent: "center",
            alignContent: "center",
            alignSelf: "center",
            alignItems: "center",
            paddingVertical: 20,
          }}
        >
          <Image
            source={require("../../assets/user-image.jpeg")}
            style={{ borderRadius: 999, width: "30%", height: 100 }}
          />
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
            backgroundColor: "#3E7270",
            elevation: 10,
            paddingVertical: 20,
            borderRadius: 16,
            marginVertical: 20,
            paddingHorizontal: 20,
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <Image
            source={require("../../assets/coin.png")}
            style={{ height: 200, width: "60%" }}
          />
          <View
            style={{ marginLeft: 10, display: "flex", alignItems: "center" }}
          >
            <Text style={{ color: colors.white, fontSize: 24 }}>Balance</Text>
            <Text
              style={{ color: colors.white, fontSize: 30, fontWeight: "600" }}
            >
              T500.00
            </Text>
          </View>
        </View>
        <Text
          style={{
            marginVertical: 10,
            fontWeight: "700",
            color: colors.white,
            fontSize: 20,
          }}
        >
          Inbox
        </Text>
        <DashBoardInbox />
        <DashBoardInbox />
        <DashBoardInbox />
        <Text
          style={{
            marginVertical: 10,
            fontWeight: "700",
            color: colors.white,
            fontSize: 20,
          }}
        >
          Pending Transactions
        </Text>
        <View
          style={{
            backgroundColor: "#3E7270",
            elevation: 10,
            borderRadius: 16,
            marginVertical: 20,
            paddingHorizontal: 20,
            paddingVertical: 20,
          }}
        >
          <PendingTransactions />
          <PendingTransactions />
          <PendingTransactions />
        </View>
        <DoubleHeaders
          name="Groups"
          more="More..."
          run={() => {
            navigation.navigate("Groups");
          }}
        />

        <View
          style={{
            backgroundColor: "#3E7270",
            elevation: 10,
            height: 250,
            borderRadius: 16,
            marginVertical: 20,
            paddingHorizontal: 20,
            paddingVertical: 20,
          }}
        >
          <DashboardGroups />
          <DashboardGroups />
          <DashboardGroups />
        </View>
        <Text
          style={{
            marginVertical: 10,
            fontWeight: "700",
            color: colors.white,
            fontSize: 20,
          }}
        >
          Saved Posts
        </Text>
        <View
          style={{
            backgroundColor: "#3E7270",
            elevation: 10,
            height: 250,
            borderRadius: 16,
            marginVertical: 20,
            paddingHorizontal: 20,
            paddingVertical: 20,
          }}
        >
          <DashboardSavedpost />
          <DashboardSavedpost />
          <DashboardSavedpost />
        </View>
      </ScrollView>
    </ImageBackground>
  );
};

export default Dashboard;
