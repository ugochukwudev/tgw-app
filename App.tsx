import React from "react";
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
export default function App() {
  return (
    <SafeAreaView style={{ flex: 1, paddingTop: StatusBar?.currentHeight }}>
      <Text
        style={{
          padding: 10,
          fontSize: 24,
          color: "#9873fe",
          fontWeight: "bold",
        }}
      >
        TGW Finance
      </Text>
      <NavigationContainer>
        <Tabs />
      </NavigationContainer>
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
