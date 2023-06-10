import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
const ForgotPassword = () => {
  const navigation: any = useNavigation();
  return (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1, justifyContent: "center" }}
    >
      <View
        style={{
          backgroundColor: "#2580af",
          flex: 1,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <View
          style={{
            marginTop: 30,
            backgroundColor: "white",
            width: "90%",
            borderRadius: 16,
            padding: 10,
          }}
        >
          <Text style={{ fontSize: 26 }}>Forgot Password</Text>
          <Text style={Styles.text}>Phone Number</Text>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <TextInput
              style={{
                width: "70%",
                borderColor: "#000",
                borderWidth: 1,
                padding: 6,
                borderRadius: 10,
              }}
              cursorColor={"black"}
              keyboardType="name-phone-pad"
              placeholder="phone number"
              onChangeText={(text: any) => {}}
            />
            <TouchableOpacity
              style={{ backgroundColor: "black", padding: 8, borderRadius: 10 }}
            >
              <Text style={{ color: "white" }}>Send Token</Text>
            </TouchableOpacity>
          </View>
          <Text style={Styles.text}>Token</Text>
          <TextInput
            style={{
              borderColor: "#000",
              borderWidth: 1,
              padding: 6,
              borderRadius: 10,
            }}
            secureTextEntry
            keyboardType="default"
            cursorColor={"black"}
            autoComplete="password-new"
            placeholder="Your Token"
            onChangeText={(text: any) => {}}
          />
          <Text style={Styles.text}>New Password</Text>
          <TextInput
            style={{
              borderColor: "#000",
              borderWidth: 1,
              padding: 6,
              borderRadius: 10,
            }}
            keyboardType="visible-password"
            cursorColor={"black"}
            autoComplete="password-new"
            placeholder="Your new password"
            onChangeText={(text: any) => {}}
          />
          <View
            style={{
              display: "flex",
              justifyContent: "space-between",
              flexDirection: "row",
              marginVertical: 8,
            }}
          >
            <Text style={{ color: "#2580af" }}>Clear Form ?</Text>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("Login");
              }}
            >
              <Text style={{ color: "#2580af" }}>Sign In</Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("Login");
            }}
            style={{
              backgroundColor: "#2580af",
              marginVertical: 10,
              paddingVertical: 6,
              paddingHorizontal: 4,
              width: "50%",
              borderRadius: 10,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              alignSelf: "center",
            }}
          >
            <Text style={Styles.button}>Rest password</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};
const Styles = StyleSheet.create({
  text: {
    marginVertical: 6,
    fontSize: 14,
    fontWeight: "600",
  },
  button: {
    color: "white",
    fontSize: 16,
    fontWeight: "600",
  },
});

export default ForgotPassword;
