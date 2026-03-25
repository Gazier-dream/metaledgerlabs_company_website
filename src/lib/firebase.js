import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDYijBZM7KI2F09lDJ35hFIdlkHTi6HbMk",
  authDomain: "company-application-33a02.firebaseapp.com",
  projectId: "company-application-33a02",
  storageBucket: "company-application-33a02.firebasestorage.app",
  messagingSenderId: "453718731624",
  appId: "1:453718731624:web:057aa525f34468b4a984dd",
  measurementId: "G-JEF9NF5TDV",
};

// Singleton: reuse existing app if already initialized
const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();
export const db = getFirestore(app);
