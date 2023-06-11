import { initializeApp, getApp } from "firebase/app";
import {
  getAuth,
  PhoneAuthProvider,
  signInWithCredential,
  updateCurrentUser,
  updateProfile,
} from "firebase/auth";

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
export const app = getApp();
export const auth = getAuth(app);

// Double-check that we can run the example
