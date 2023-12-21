import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBf_tKyvdo6OBHmhaW7IaEPrzo5S_93cI8",
  authDomain: "rol-in-the-shell.firebaseapp.com",
  projectId: "rol-in-the-shell",
  storageBucket: "rol-in-the-shell.appspot.com",
  messagingSenderId: "782928914213",
  appId: "1:782928914213:web:c3f28b45d02e9d52dd9ccc",
  measurementId: "G-0D977C0QLH"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const storage = getStorage(app);