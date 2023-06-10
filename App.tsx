import React, { useEffect, useState } from "react";
import {
  ActivityIndicator,
  View,
  StyleSheet,
  Text,
  SafeAreaView,
  StatusBar,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import Tabs from "./src/components/Tabs";
import ErrorItem from "./src/components/ErrorItem";
import Navigation from "./src/components/Navigation";
import Toast, { ToastRef } from "react-native-toast-message";
export default function App() {
  return (
    <SafeAreaView style={{ flex: 1, paddingTop: StatusBar?.currentHeight }}>
      <Text
        style={{
          padding: 10,
          fontSize: 24,
          color: "#2580af",
          fontWeight: "bold",
        }}
      >
        TGW Finance
      </Text>

      <Navigation />
      <Toast />
    </SafeAreaView>
  );

  // return (
  //   <SafeAreaView style={styles.container}>
  //     {error ? (
  //       <ErrorItem />
  //     ) : (
  //       <ActivityIndicator size={"large"} color={"pink"} />
  //     )}
  //   </SafeAreaView>
  // );
}
const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    flex: 1,
  },
});
