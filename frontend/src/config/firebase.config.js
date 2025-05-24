
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDyaTXzdgG6AGaiSqQkJGSbe4M-1TIyv18",
  authDomain: "e-cartcom.firebaseapp.com",
  projectId: "e-cartcom",
  storageBucket: "e-cartcom.firebasestorage.app",
  messagingSenderId: "278806769771",
  appId: "1:278806769771:web:7f813777823a78b0fec12e",
  measurementId: "G-4CJJKY9H14",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

