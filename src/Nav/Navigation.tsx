import React, { useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Tabs from "../Nav/Tabs";
import Login from "../screens/Login";
import OnBoardUi from "../screens/onBoardUi";
import Register from "../screens/Register";

import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";
import Chat from "../screens/Chat";
import PreviewPic from "../screens/PreviewPic";
import Groups from "../screens/Groups";
import JoinGroup from "../screens/JoinGroup";
import PendingRequests from "../screens/PendingRequests";
import CreateGroups from "../screens/CreateGroups";
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
        animation: "fade",
        headerShown: false,
      }}
    >
      <Stack.Screen name="OnBoard" component={OnBoardUi} />

      <Stack.Screen name="Home" component={Tabs} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen
        options={{ animation: "fade_from_bottom" }}
        name="Chat"
        component={Chat}
      />
      <Stack.Screen
        options={{ animation: "slide_from_bottom" }}
        name="PreviewPic"
        component={PreviewPic}
      />
      <Stack.Screen name="Register" component={Register} />
      <Stack.Screen
        options={{ animation: "flip" }}
        name="Groups"
        component={Groups}
      />
      <Stack.Screen
        options={{ animation: "slide_from_right" }}
        name="JoinGroup"
        component={JoinGroup}
      />
      <Stack.Screen
        options={{ animation: "slide_from_right" }}
        name="PendingRequests"
        component={PendingRequests}
      />
      <Stack.Screen
        options={{ animation: "slide_from_right" }}
        name="CreateGroup"
        component={CreateGroups}
      />
    </Stack.Navigator>
  );
};
export default Navigation;
