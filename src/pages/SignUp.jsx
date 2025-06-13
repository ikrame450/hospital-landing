
import React, { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/firebaseConfig"; // تأكد المسار صحيح
import { useNavigate } from "react-router-dom";
import "./SignUp.css";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSignUp = async (e) => {
    e.preventDefault();
    setError("");

    try {
      await createUserWithEmailAndPassword(auth, email, password);
      alert("✅ تم إنشاء الحساب بنجاح!");
      navigate("/login"); // توجه لصفحة تسجيل الدخول بعد التسجيل
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="signup-container">
      <h2>إنشاء حساب جديد</h2>
      <form onSubmit={handleSignUp} className="signup-form">
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
          minLength={6}
        />
        <button type="submit">إنشاء حساب</button>
      </form>
      {error && <p className="error-message">{error}</p>}
    </div>
  );
};

export default SignUp;
