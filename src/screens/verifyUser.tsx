import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
const VerifyUser = () => {
  const navigation: any = useNavigation();
  return (
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
        <Text style={{ fontSize: 26 }}>Verify</Text>
        <Text style={Styles.text}>Verification Token</Text>
        <TextInput
          style={{
            borderColor: "#000",
            borderWidth: 1,
            padding: 6,
            borderRadius: 10,
          }}
          cursorColor={"black"}
          keyboardType="name-phone-pad"
          placeholder="Token sent to your phone number"
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
          <Text style={{ color: "#2580af" }}>Resend ?</Text>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("Login");
            }}
          >
            <Text style={{ color: "#2580af" }}>Login</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Home");
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
          <Text style={Styles.button}>Verify</Text>
        </TouchableOpacity>
      </View>
    </View>
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

export default VerifyUser;
