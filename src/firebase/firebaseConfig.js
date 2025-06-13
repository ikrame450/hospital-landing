// src/firebase/firebaseConfig.js

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// إعدادات Firebase الخاصة بك
const firebaseConfig = {
  apiKey: "AIzaSyB1WMaTSvNNsmZwCtPeFcqD7qkezxXZtsk",
  authDomain: "hospital-landing-react-m-feb03.firebaseapp.com",
  projectId: "hospital-landing-react-m-feb03",
  storageBucket: "hospital-landing-react-m-feb03.appspot.com",
  messagingSenderId: "895981857931",
  appId: "1:895981857931:web:1e436db642c9a86084b88e"
};

// تهيئة التطبيق
const app = initializeApp(firebaseConfig);

// تصدير الخدمات
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
export const firestore = getFirestore(app); //
export default app;