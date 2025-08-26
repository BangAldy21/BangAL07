import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCWPzULJKa7ApK7psIpr38_iChCZM-_dxQ",
  authDomain: "bangaldy21-51f0b.firebaseapp.com",
  projectId: "bangaldy21-51f0b",
  storageBucket: "bangaldy21-51f0b.firebasestorage.app",
  messagingSenderId: "528551198877",
  appId: "1:528551198877:web:3aec52590ebdbd26159474",
  measurementId: "G-H3T9358YWH"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
    
