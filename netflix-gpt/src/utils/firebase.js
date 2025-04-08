// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDDlJjusNFaQK9peEVQVuUCzoYpADzN85Y",
  authDomain: "netflixgpt-64274.firebaseapp.com",
  projectId: "netflixgpt-64274",
  storageBucket: "netflixgpt-64274.firebasestorage.app",
  messagingSenderId: "41740519424",
  appId: "1:41740519424:web:c4bc22deb7753fc6af70e5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth();