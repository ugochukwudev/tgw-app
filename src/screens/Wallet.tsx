import React from "react";
import { Image, ScrollView, Text, View, ImageBackground } from "react-native";
import { colors } from "../constants/colors";
import { StatusBar } from "react-native";
import DashBoardInbox from "../components/DashBoardInbox";
import PendingTransactions from "../components/PendingTransactions";
import DashboardGroups from "../components/DashboardGroups";
import DashboardSavedpost from "../components/DashboardSavedpost";
import DashboardCurrencies from "../components/DashboardCurrencies";
import WalletActions from "../components/WalletActions";
import Header from "../components/Header";
import { Colors } from "react-native/Libraries/NewAppScreen";

const Wallet = () => {
  const padding = StatusBar.currentHeight && StatusBar.currentHeight + 20;
  return (
    <ImageBackground source={require("../../assets/wallet-bg.jpg")}>
      <ScrollView
        contentContainerStyle={{
          flexGrow: 1,
          paddingVertical: padding,
          paddingHorizontal: 10,
        }}
      >
        <Header name="Wallet" />
        <View
          style={{
            backgroundColor: colors.primary,
            elevation: 10,
            paddingVertical: 20,
            borderRadius: 16,
            marginVertical: 20,
            paddingHorizontal: 20,
          }}
        >
          <View
            style={{
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
          <View
            style={{
              width: "70%",
              alignItems: "center",
              alignSelf: "center",
              height: 50,
              marginVertical: 10,
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <WalletActions category="add" name="Add" />
            <WalletActions category="transfer" name="Transfer" />
            <WalletActions category="withdraw" name="Withdraw" />
          </View>
        </View>

        <Text
          style={{
            marginVertical: 0,
            fontWeight: "700",
            color: colors.white,
            fontSize: 20,
          }}
        >
          Home Currency
        </Text>
        <View
          style={{
            backgroundColor: colors.primary,
            elevation: 10,
            borderRadius: 16,
            marginVertical: 10,
            paddingHorizontal: 10,
            paddingVertical: 10,
          }}
        >
          <DashboardCurrencies name="Naira" balance="#100,000" />
        </View>
        <Text
          style={{
            marginVertical: 0,
            fontWeight: "700",
            color: colors.white,
            fontSize: 20,
          }}
        >
          Foreign Currency
        </Text>
        <View
          style={{
            backgroundColor: colors.primary,
            elevation: 10,
            borderRadius: 16,
            marginVertical: 10,
            paddingHorizontal: 10,
            paddingVertical: 10,
          }}
        >
          <DashboardCurrencies name="USD" balance="$300" />
        </View>
      </ScrollView>
    </ImageBackground>
  );
};

export default Wallet;
