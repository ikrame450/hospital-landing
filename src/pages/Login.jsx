// src/pages/Login.jsx
import React, { useState } from "react";
import {
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";
import { auth } from "../firebase/firebaseConfig";
import { useNavigate } from "react-router-dom";
import "./Login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const googleProvider = new GoogleAuthProvider();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await signInWithEmailAndPassword(auth, email, password);
      localStorage.setItem("userEmail", email);
      alert("✅ تم تسجيل الدخول بنجاح!");
      navigate("/"); // ✅ توجيه إلى الصفحة الرئيسية
    } catch (err) {
      setError("❌ فشل تسجيل الدخول: " + err.message);
    }
  };

  const handleGoogleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      localStorage.setItem("userEmail", result.user.email);
      alert("✅ مرحبًا بك " + result.user.displayName);
      navigate("/"); // ✅ توجيه إلى الصفحة الرئيسية
    } catch (err) {
      setError("❌ فشل تسجيل الدخول بواسطة Google: " + err.message);
    }
  };

  return (
    <div className="login-container">
      <h2>تسجيل الدخول</h2>
      <form onSubmit={handleLogin} className="login-form">
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
        <button type="submit">دخول</button>
      </form>
      <button onClick={handleGoogleLogin} className="google-login-button">
        تسجيل الدخول بواسطة Google
      </button>
      {error && <p className="error-message">{error}</p>}
      <p>
        ليس لديك حساب؟ <a href="/register">سجل الآن</a>
      </p>
    </div>
  );
};

export default Login;
