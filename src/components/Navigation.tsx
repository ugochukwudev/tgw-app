import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Tabs from "./Tabs";
import Login from "../screens/Login";
import OnBoardUi from "../screens/onBoardUi";
import Register from "../screens/Register";
import VerifyUser from "../screens/verifyUser";
import ForgotPassword from "../screens/forgotPassword";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";
const Stack = createStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="OnBoard" component={OnBoardUi} />

        <Stack.Screen name="Home" component={Tabs} />
        <Stack.Screen name="Login" component={Login} />

        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="Verify" component={VerifyUser} />
        <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
