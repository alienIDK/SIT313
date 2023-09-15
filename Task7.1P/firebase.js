// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "something",
  authDomain: "deakin-sit313-project.firebaseapp.com",
  projectId: "deakin-sit313-project",
  storageBucket: "deakin-sit313-project.appspot.com",
  messagingSenderId: "something",
  appId: "something"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth();
