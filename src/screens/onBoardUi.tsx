import React, { useState } from "react";
import { ScrollView, Text, View, StyleSheet, Image } from "react-native";
import AppIntroSlider from "react-native-app-intro-slider";

const _renderItem = ({ item }: any) => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#2580af",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Text style={{ color: "white", fontSize: 24, paddingVertical: 24 }}>
        {item.title}
      </Text>
      <Image source={item.image} style={{ width: "90%", height: 200 }} />
      <Text
        style={{
          paddingVertical: 24,
          paddingHorizontal: 6,
          lineHeight: 27,
          color: "white",
        }}
      >
        {item.text}
      </Text>
    </View>
  );
};
const OnBoardUi = ({ navigation, reset }: any) => {
  const [showRealApp, setShowRealApp] = useState(true);
  const slides = [
    {
      key: 1,
      title: "Welcome to TGw",
      text: "This app shows users exchange currency rates, exchange currency with other users and exchange currency with TGW.",
      image: require("../../assets/splash.png"),
      backgroundColor: "#59b2ab",
    },
    {
      key: 2,
      title: "Create an Account",
      text: "Create an account with TGw",
      image: require("../../assets/create-account.png"),
      backgroundColor: "#febe29",
    },
    {
      key: 3,
      title: "Convert Currencies",
      text: "Convert currencies from one currency to another using The converter feature",
      image: require("../../assets/convert.png"),
      backgroundColor: "#22bcb5",
    },
    {
      key: 4,
      title: "Exchange Currencies",
      text: "Exchange currency with other users or exchange with TGW",
      image: require("../../assets/exchange.png"),
      backgroundColor: "#22bcb5",
    },
  ];
  const onDone = () => {
    setShowRealApp(true);
  };

  return (
    <AppIntroSlider
      renderItem={_renderItem}
      data={slides}
      showNextButton={true}
      showPrevButton={true}
      showSkipButton={true}
      onDone={() => {
        navigation.navigate("Home");
      }}
    />
  );
};

export default OnBoardUi;
