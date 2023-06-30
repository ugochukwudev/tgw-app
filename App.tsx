import React, { useEffect, useState } from "react";
import {
  ActivityIndicator,
  View,
  StyleSheet,
  Text,
  StatusBar,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { NavigationContainer } from "@react-navigation/native";
import Tabs from "./src/Nav/Tabs";
import ErrorItem from "./src/components/ErrorItem";
import Navigation from "./src/Nav/Navigation";
import Toast, { ToastRef } from "react-native-toast-message";
export default function App() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
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
