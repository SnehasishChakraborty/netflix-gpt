// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBdESSSP5A4sT4l1nqv2Hg8cIL3bjyTOxU",
  authDomain: "netflixgpt-250d2.firebaseapp.com",
  projectId: "netflixgpt-250d2",
  storageBucket: "netflixgpt-250d2.firebasestorage.app",
  messagingSenderId: "623957694305",
  appId: "1:623957694305:web:d18c3458b4c48079785720",
  measurementId: "G-GWVVEY9WWY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();