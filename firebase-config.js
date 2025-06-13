// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDiuxgEhardVc7ooLb6Ga9BBSn7UFjJKXo",
  authDomain: "sobaditsgood-492df.firebaseapp.com",
  projectId: "sobaditsgood-492df",
  storageBucket: "sobaditsgood-492df.firebasestorage.app",
  messagingSenderId: "831879252787",
  appId: "1:831879252787:web:f9af1e7ba636b9fd30cc46",
  measurementId: "G-9HPVJ2VFR0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const analytics = getAnalytics(app);