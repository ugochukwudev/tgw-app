import React from "react";
import {
  ScrollView,
  View,
  Text,
  TextInput,
  Platform,
  StyleSheet,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
//import { app, auth } from "../firebase/firebase";
import {
  fetchSignInMethodsForEmail,
  getAuth,
  PhoneAuthProvider,
  signInWithCredential,
  updateCurrentUser,
  updateProfile,
  User,
} from "firebase/auth";
import AsyncStorage from "@react-native-async-storage/async-storage";
//import { get, getDatabase, ref, set } from "firebase/database";
import { FirebaseRecaptchaVerifierModal } from "expo-firebase-recaptcha";
import Toast from "react-native-toast-message";

//const database = getDatabase();

// Double-check that we can run the example

const Login = () => {
  const recaptchaVerifier = React.useRef<any>(null);
  const [phoneNumber, setPhoneNumber] = React.useState<any>();
  const [verificationId, setVerificationId] = React.useState<any>();
  const [verificationCode, setVerificationCode] = React.useState<any>();
  //const firebaseConfig = app ? app.options : undefined;
  const [message, showMessage] = React.useState<any>();
  const attemptInvisibleVerification = false;
  const navigation: any = useNavigation();
  const [loading, setLoading] = React.useState(false);
  const showToast = (texta: string, textb?: string) => {
    Toast.show({
      type: "info",
      text1: texta,
      text2: textb,
    });
  };
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
        <FirebaseRecaptchaVerifierModal
          ref={recaptchaVerifier}
          //firebaseConfig={firebaseConfig}
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
          <Text style={{ fontSize: 26 }}>Login</Text>
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
              // onPress={async () => {
              //   setLoading(true);
              //   const userRef = ref(database, `users/${phoneNumber}`);
              //   get(userRef)
              //     .then(async (snapshot) => {
              //       if (snapshot.exists()) {
              //         try {
              //           const phoneProvider = new PhoneAuthProvider(auth);
              //           const verificationId =
              //             await phoneProvider.verifyPhoneNumber(
              //               phoneNumber,
              //               recaptchaVerifier.current
              //             );
              //           setVerificationId(verificationId);

              //           showToast(
              //             "Verification code has been sent to your phone."
              //           );
              //           setLoading(false);
              //         } catch (err: any) {
              //           showToast(err.message);
              //           setLoading(false);
              //         }
              //       } else {
              //         setLoading(false);
              //         console.log("User data not found");
              //         showToast("Use not found", "Please Create an Account");
              //       }
              //     })
              //     .catch((error) => {
              //       setLoading(false);
              //       console.error("Error retrieving data:", error);
              //     });
              //   console.log(phoneNumber);

              //   // The FirebaseRecaptchaVerifierModal ref implements the
              //   // FirebaseAuthApplicationVerifier interface and can be
              //   // passed directly to `verifyPhoneNumber`.
              // }}
            >
              <Text style={{ color: "white" }}>
                {" "}
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
            keyboardType="default"
            cursorColor={"black"}
            autoComplete="password-new"
            placeholder="Sms Token"
            onChangeText={setVerificationCode}
            value={verificationCode}
          />
          <View
            style={{
              display: "flex",
              justifyContent: "space-between",
              flexDirection: "row",
              marginVertical: 8,
            }}
          >
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("Register");
              }}
            >
              <Text style={{ color: "#2580af" }}>Create Account</Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity
            disabled={!verificationId}
            // onPress={async () => {
            //   setLoading(true);
            //   try {
            //     const credential = PhoneAuthProvider.credential(
            //       verificationId,
            //       verificationCode
            //     );
            //     const res = await signInWithCredential(auth, credential);
            //     console.log(res);
            //     // updateProfile(res.user, { displayName: "amazing dev" });
            //     let key: any = auth.currentUser;
            //     console.log(key, res);
            //     setLoading(false);
            //     showToast("Phone authentication successful 👍");
            //     await AsyncStorage.setItem("name", key.displayName);
            //     navigation.navigate("Home");
            //   } catch (err: any) {
            //     showToast(err.message);
            //     setLoading(false);
            //   }
            // }}
            style={{
              backgroundColor: "#2580af",
              marginVertical: 10,
              paddingVertical: 10,
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
                "Login"
              )}
            </Text>
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
export default Login;
