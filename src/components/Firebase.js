// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAQ3asiJYUbjW6gnI0sCL5C3gdgHBEIwBA",
  authDomain: "website-91b38.firebaseapp.com",
  databaseURL: "https://website-91b38-default-rtdb.firebaseio.com",
  projectId: "website-91b38",
  storageBucket: "website-91b38.firebasestorage.app",
  messagingSenderId: "661195650994",
  appId: "1:661195650994:web:2903e4301d3ce0b72696ab",
  measurementId: "G-LMVPY8QG63",
  databaseURL: "https://website-91b38-default-rtdb.firebaseio.com/"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);