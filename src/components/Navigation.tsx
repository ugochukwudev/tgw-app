import React, { useState, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Tabs from "./Tabs";
import Login from "../screens/Login";
import OnBoardUi from "../screens/onBoardUi";
import Register from "../screens/Register";
import VerifyUser from "../screens/verifyUser";
import ForgotPassword from "../screens/forgotPassword";
import App from "../screens/test";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";
const Stack = createStackNavigator();

const Navigation = () => {
  const [isnew, setIsNew] = useState(false);
  const retrieveData = async () => {
    try {
      const value = await AsyncStorage.getItem("isnew");
      if (value == "false") {
        console.log("Retrieved data:", value);

        // Clean up the auth state listener
      } else {
        try {
          await AsyncStorage.setItem("isnew", "false");
          console.log("Data stored successfully!");
          setIsNew(true);
        } catch (error) {
          console.log("Error storing data:", error);
        }
      }
    } catch (error) {
      console.log("Error retrieving data:", error);
    }
  };
  const reset = () => {
    setIsNew(false);
  };
  useEffect(() => {
    retrieveData();
  }, []);
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        {isnew && (
          <Stack.Screen
            name="OnBoard"
            component={() => <OnBoardUi reset={reset} />}
          />
        )}
        {!isnew && (
          <>
            <Stack.Screen name="Home" component={Tabs} />
            <Stack.Screen name="Login" component={Login} />

            <Stack.Screen name="Register" component={Register} />
            <Stack.Screen name="Verify" component={VerifyUser} />
            <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
            <Stack.Screen name="Test" component={App} />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
