

// src/firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// ضع معلومات مشروعك من Firebase Console هنا
const firebaseConfig = {
 apiKey: "AIzaSyB1WMaTSvNNsmZwCtPeFcqD7qkezxXZtsk",
  authDomain: "hospital-landing-react-m-feb03.firebaseapp.com",
  projectId: "hospital-landing-react-m-feb03",
  storageBucket: "hospital-landing-react-m-feb03.appspot.com",
  messagingSenderId: "895981857931",
  appId: "1:895981857931:web:1e436db642c9a86084b88e"
};

// تهيئة Firebase
const app = initializeApp(firebaseConfig);

// تهيئة قاعدة البيانات Firestore
export const firestore = getFirestore(app);
export const storage = getStorage(app);

