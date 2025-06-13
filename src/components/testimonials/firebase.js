
// firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"; // لقاعدة البيانات
import { getAuth } from "firebase/auth"; // للمصادقة (إن احتجت)

const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_STORAGE_BUCKET",
  messagingSenderId: "YOUR_MESSAGING_ID",
  appId: "YOUR_APP_ID"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Export services
export const db = getFirestore(app);
export const auth = getAuth(app);
