import React, { useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Tabs from "../Nav/Tabs";
import Login from "../screens/Login";
import OnBoardUi from "../screens/onBoardUi";
import Register from "../screens/Register";
import VerifyUser from "../screens/verifyUser";
import ForgotPassword from "../screens/forgotPassword";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";
import Chat from "../screens/Chat";
const Stack = createNativeStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Container />
    </NavigationContainer>
  );
};
const Container = () => {
  const navigation: any = useNavigation();
  const [appIsFirstLaunched, setIsAppFirstLaunched] = useState<boolean>();
  const retrieveData = async () => {
    const appData = await AsyncStorage.getItem("isAppFirstLaunched");
    if (appData == null) {
      setIsAppFirstLaunched(true);
      console.log("new");

      AsyncStorage.setItem("isAppFirstLaunched", "false");
    } else {
      console.log("old");

      navigation.navigate("Home");
      setIsAppFirstLaunched(false);
    }
  };

  useEffect(() => {
    retrieveData();

    return () => {
      console.log(appIsFirstLaunched);
    };
  }, []);
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="OnBoard" component={OnBoardUi} />

      <Stack.Screen name="Home" component={Tabs} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Chat" component={Chat} />
      <Stack.Screen name="Register" component={Register} />
      <Stack.Screen name="Verify" component={VerifyUser} />
      <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
    </Stack.Navigator>
  );
};
export default Navigation;
