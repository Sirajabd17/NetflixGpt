// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDTVBMkUQg2VWHVGd6jW5CekV6KjGG2NMA",
  authDomain: "netflixgpt-bd179.firebaseapp.com",
  projectId: "netflixgpt-bd179",
  storageBucket: "netflixgpt-bd179.appspot.com",
  messagingSenderId: "543034788043",
  appId: "1:543034788043:web:6b027f2b1f2aacbfc2734e",
  measurementId: "G-JT250PD2F0",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
