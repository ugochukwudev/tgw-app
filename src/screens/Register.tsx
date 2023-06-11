import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  ScrollView,
  ActivityIndicator,
  Platform,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import {
  FirebaseRecaptchaVerifierModal,
  FirebaseRecaptchaBanner,
} from "expo-firebase-recaptcha";

import {
  getAuth,
  PhoneAuthProvider,
  signInWithCredential,
  updateCurrentUser,
  updateProfile,
  User,
} from "firebase/auth";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { app, auth } from "../firebase/firebase";
import { get, getDatabase, ref, set } from "firebase/database";
import Toast from "react-native-toast-message";
import { colors } from "../constants/colors";
// Double-check that we can run the example

const Register = () => {
  const navigation: any = useNavigation();
  const recaptchaVerifier = React.useRef<any>(null);
  const [phoneNumber, setPhoneNumber] = React.useState<any>();
  const [verificationId, setVerificationId] = React.useState<any>();
  const [verificationCode, setVerificationCode] = React.useState<any>();
  const [name, setName] = React.useState<string>();
  const firebaseConfig = app ? app.options : undefined;
  const [message, showMessage] = React.useState<any>();
  const attemptInvisibleVerification = false;
  const [loading, setLoading] = React.useState(false);
  const showToast = (texta: string, textb?: string) => {
    Toast.show({
      type: "info",
      text1: texta,
      text2: textb,
    });
  };
  useEffect(() => {}, []);
  const database = getDatabase();
  return (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1, justifyContent: "center" }}
    >
      <View
        style={{
          backgroundColor: colors.primary,
          flex: 1,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <FirebaseRecaptchaVerifierModal
          ref={recaptchaVerifier}
          firebaseConfig={firebaseConfig}
          // attemptInvisibleVerification
        />
        <View
          style={{
            marginTop: 30,
            backgroundColor: "white",
            width: "90%",
            borderRadius: 16,
            padding: 10,
          }}
        >
          <Text style={{ fontSize: 26 }}>Register</Text>
          <Text style={Styles.text}>Name</Text>
          <TextInput
            style={{
              borderColor: "#000",
              borderWidth: 1,
              padding: 6,
              borderRadius: 10,
            }}
            cursorColor={"black"}
            keyboardType="name-phone-pad"
            placeholder="Your name"
            onChangeText={setName}
          />

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
              onChangeText={setPhoneNumber}
              keyboardType="phone-pad"
              cursorColor={"black"}
              autoComplete="tel"
              placeholder="+1 999 999 9999"
              value={phoneNumber}
            />
            <TouchableOpacity
              style={{ backgroundColor: "black", padding: 8, borderRadius: 10 }}
              disabled={!phoneNumber}
              onPress={async () => {
                console.log(phoneNumber);
                setLoading(true);
                const userRef = ref(database, `users/${phoneNumber}`);
                get(userRef).then(async (snapshot) => {
                  if (snapshot.exists()) {
                    showToast("User already exists", "Please Login");
                    setLoading(false);
                    return;
                  } else {
                    try {
                      const phoneProvider = new PhoneAuthProvider(auth);
                      const verificationId =
                        await phoneProvider.verifyPhoneNumber(
                          phoneNumber,
                          recaptchaVerifier.current
                        );
                      setVerificationId(verificationId);

                      showToast(
                        "Verification code has been sent to your phone."
                      );
                      setLoading(false);
                    } catch (err: any) {
                      showToast(err.message);
                      setLoading(false);
                    }
                  }
                });
                // The FirebaseRecaptchaVerifierModal ref implements the
                // FirebaseAuthApplicationVerifier interface and can be
                // passed directly to `verifyPhoneNumber`.
              }}
            >
              <Text style={{ color: "white" }}>
                {loading ? (
                  <ActivityIndicator size={"small"} color={"#fff"} />
                ) : (
                  "Send Token"
                )}
              </Text>
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
            onChangeText={setVerificationCode}
            keyboardType="default"
            cursorColor={"black"}
            autoComplete="password-new"
            placeholder="Token sent to phone number"
          />
          <View
            style={{
              display: "flex",
              justifyContent: "space-between",
              flexDirection: "row",
              marginVertical: 8,
            }}
          >
            <Text style={{ color: colors.primary }}>Clear Form ?</Text>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("Login");
              }}
            >
              <Text style={{ color: colors.primary }}>Sign In</Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity
            disabled={!verificationId && !name}
            onPress={async () => {
              setLoading(true);
              try {
                const credential = PhoneAuthProvider.credential(
                  verificationId,
                  verificationCode
                );
                const res = await signInWithCredential(auth, credential);
                console.log(res);
                // updateProfile(res.user, { displayName: "amazing dev" });
                let key: any = auth.currentUser;
                console.log(key, res);
                await updateProfile(key, {
                  displayName: name,
                  photoURL: "https://example.com/jane-q-user/profile.jpg",
                }).then(() => {
                  console.log("Profile updated");
                });

                showToast("Phone authentication successful 👍");
                set(ref(database, `users/${phoneNumber}`), {
                  name: name,
                })
                  .then(() => {
                    console.log("Data stored successfully");
                    setLoading(false);
                  })
                  .catch((error) => {
                    console.error("Error storing data:", error);
                    setLoading(false);
                  });

                navigation.navigate("Home");
              } catch (err: any) {
                showToast(err.message);
                setLoading(false);
              }
            }}
            style={{
              backgroundColor: colors.primary,
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
            <Text style={Styles.button}>
              {loading ? (
                <ActivityIndicator size={"small"} color={"#fff"} />
              ) : (
                "Register"
              )}
            </Text>
          </TouchableOpacity>
        </View>
        {message ? (
          <TouchableOpacity
            style={[
              StyleSheet.absoluteFill,
              { backgroundColor: "#fff", justifyContent: "center" },
            ]}
            onPress={() => showMessage(undefined)}
          >
            <Text
              style={{
                color: message.color || "black",
                fontSize: 17,
                textAlign: "center",
                margin: 20,
              }}
            >
              {message.text}
            </Text>
          </TouchableOpacity>
        ) : undefined}
        {attemptInvisibleVerification && <FirebaseRecaptchaBanner />}
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

export default Register;
