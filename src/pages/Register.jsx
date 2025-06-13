// src/pages/Register.jsx
import React, { useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";
import { auth, firestore } from "../firebase/firebaseConfig";
import { addDoc, collection } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import "./Register.css";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const googleProvider = new GoogleAuthProvider();

  const handleRegister = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      await addDoc(collection(firestore, "users"), {
        uid: user.uid,
        email,
        name,
        createdAt: new Date(),
      });

      localStorage.setItem("userEmail", email); // ✅ تسجيل الدخول تلقائيًا
      alert("✅ تم إنشاء الحساب بنجاح!");
      navigate("/"); // ✅ إلى الصفحة الرئيسية
    } catch (err) {
      setError("❌ فشل إنشاء الحساب: " + err.message);
    }
  };

  const handleGoogleRegister = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      const user = result.user;

      await addDoc(collection(firestore, "users"), {
        uid: user.uid,
        email: user.email,
        name: user.displayName,
        createdAt: new Date(),
      });

      localStorage.setItem("userEmail", user.email); // ✅ تسجيل الدخول تلقائيًا
      alert("✅ مرحبًا بك " + user.displayName);
      navigate("/"); // ✅ إلى الصفحة الرئيسية
    } catch (err) {
      setError("❌ فشل التسجيل بواسطة Google: " + err.message);
    }
  };

  return (
    <div className="register-container">
      <h2>إنشاء حساب جديد</h2>
      <form onSubmit={handleRegister} className="register-form">
        <input
          type="text"
          placeholder="الاسم الكامل"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type="email"
          placeholder="البريد الإلكتروني"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="كلمة المرور"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">تسجيل</button>
      </form>
      <button onClick={handleGoogleRegister} className="google-login-button">
        التسجيل بواسطة Google
      </button>
      {error && <p className="error-message">{error}</p>}
    </div>
  );
};

export default Register;
