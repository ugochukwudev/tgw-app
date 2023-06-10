import * as React from "react";
import {
  Text,
  View,
  TextInput,
  Button,
  StyleSheet,
  TouchableOpacity,
  Platform,
} from "react-native";
import {
  FirebaseRecaptchaVerifierModal,
  FirebaseRecaptchaBanner,
} from "expo-firebase-recaptcha";
import { initializeApp, getApp } from "firebase/app";
import {
  getAuth,
  PhoneAuthProvider,
  signInWithCredential,
  updateCurrentUser,
  updateProfile,
} from "firebase/auth";
import { Database, update } from "firebase/database";

// Initialize Firebase JS SDK >=9.x.x
// https://firebase.google.com/docs/web/setup
/*try {
  initializeApp({
    ...
  });
} catch (err) {
  // ignore app already initialized error in snack
}*/
const firebaseConfig = {
  apiKey: "AIzaSyACEM-TbxlyW1IAoKIjOmvTgTULo9jkLf4",
  authDomain: "tgwapp-39676.firebaseapp.com",
  projectId: "tgwapp-39676",
  storageBucket: "tgwapp-39676.appspot.com",
  messagingSenderId: "420089446478",
  appId: "1:420089446478:web:c7df0a61695285843d031f",
  measurementId: "G-DTSR0EBCL3",
};

initializeApp(firebaseConfig);

// Firebase references
const app = getApp();
const auth = getAuth(app);

// Double-check that we can run the example
if (!app?.options || Platform.OS === "web") {
  throw new Error(
    "This example only works on Android or iOS, and requires a valid Firebase config."
  );
}

export default function App() {
  // Ref or state management hooks
  const recaptchaVerifier = React.useRef(null);
  const [phoneNumber, setPhoneNumber] = React.useState();
  const [verificationId, setVerificationId] = React.useState();
  const [verificationCode, setVerificationCode] = React.useState();

  const firebaseConfig = app ? app.options : undefined;
  const [message, showMessage] = React.useState();
  const attemptInvisibleVerification = false;

  return (
    <View style={{ padding: 20, marginTop: 50 }}>
      <FirebaseRecaptchaVerifierModal
        ref={recaptchaVerifier}
        firebaseConfig={firebaseConfig}
        // attemptInvisibleVerification
      />
      <Text style={{ marginTop: 20 }}>Enter phone number</Text>
      <TextInput
        style={{ marginVertical: 10, fontSize: 17 }}
        placeholder="+1 999 999 9999"
        autoFocus
        autoCompleteType="tel"
        keyboardType="phone-pad"
        textContentType="telephoneNumber"
        onChangeText={setPhoneNumber}
      />
      <Button
        title="Send Verification Code"
        disabled={!phoneNumber}
        onPress={async () => {
          // The FirebaseRecaptchaVerifierModal ref implements the
          // FirebaseAuthApplicationVerifier interface and can be
          // passed directly to `verifyPhoneNumber`.
          try {
            const phoneProvider = new PhoneAuthProvider(auth);
            const verificationId = await phoneProvider.verifyPhoneNumber(
              phoneNumber,
              recaptchaVerifier.current
            );
            setVerificationId(verificationId);
            showMessage({
              text: "Verification code has been sent to your phone.",
            });
            setTimeout(() => {
              showMessage(undefined);
            }, 3000);
          } catch (err) {
            showMessage({ text: `Error: ${err.message}`, color: "red" });
            setTimeout(() => {
              showMessage(undefined);
            }, 3000);
          }
        }}
      />
      <Text style={{ marginTop: 20 }}>Enter Verification code</Text>
      <TextInput
        style={{ marginVertical: 10, fontSize: 17 }}
        editable={!!verificationId}
        placeholder="123456"
        onChangeText={setVerificationCode}
      />
      <Button
        title="Confirm Verification Code"
        disabled={!verificationId}
        onPress={async () => {
          try {
            const credential = PhoneAuthProvider.credential(
              verificationId,
              verificationCode
            );
            const res = await signInWithCredential(auth, credential);
            console.log(res);
            // updateProfile(res.user, { displayName: "amazing dev" });
            let key = auth.currentUser;
            console.log(key, res);
            await updateProfile(auth.currentUser, {
              displayName: "colos",
              photoURL: "https://example.com/jane-q-user/profile.jpg",
            }).then(() => {
              console.log("Profile updated");
            });
            showMessage({ text: "Phone authentication successful 👍" });
            setTimeout(() => {
              showMessage(undefined);
            }, 3000);
          } catch (err) {
            showMessage({ text: `Error: ${err.message}`, color: "red" });
            setTimeout(() => {
              showMessage(undefined);
            }, 3000);
          }
        }}
      />
      {message ? (
        <TouchableOpacity
          style={[
            StyleSheet.absoluteFill,
            { backgroundColor: "#2580af", justifyContent: "center" },
          ]}
          onPress={() => showMessage(undefined)}
        >
          <Text
            style={{
              color: message.color || "white",
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
  );
}
