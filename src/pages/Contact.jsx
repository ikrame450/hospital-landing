import React, { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import { firestore } from "../firebase/firebaseConfig"; // تأكد من استيراد firestore
import "./Contact.css";

const Contact = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSuccessMessage("");
    setError("");

    try {
      await addDoc(collection(firestore, "medicalContacts"), {
        fullName,
        email,
        message,
        createdAt: new Date()
      });

      setSuccessMessage("✅ تم إرسال الرسالة بنجاح!");
      setFullName("");
      setEmail("");
      setMessage("");
    } catch (err) {
      setError("❌ فشل في إرسال الرسالة: " + err.message);
    }
  };

  return (
    <div className="contact-page">
      <div className="contact-header">
        <h1>جهة اتصال طبية</h1>
        <p>نحن هنا للإجابة عن استفساراتكم وتقديم الدعم الطبي.</p>
      </div>

      <div className="contact-content">
        <form className="contact-form" onSubmit={handleSubmit}>
          <label>الاسم الكامل</label>
          <input
            type="text"
            placeholder="اكتب اسمك"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            required
          />

          <label>البريد الإلكتروني</label>
          <input
            type="email"
            placeholder="example@email.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <label>الرسالة</label>
          <textarea
            placeholder="اكتب رسالتك هنا"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          ></textarea>

          <button type="submit">إرسال</button>
        </form>

        {successMessage && <p className="success-message">{successMessage}</p>}
        {error && <p className="error-message">{error}</p>}

        <div className="contact-info">
          <h2>معلومات التواصل</h2>
          <p><strong>الهاتف:</strong> 0555-123-456</p>
          <p><strong>البريد:</strong> contact@hospital.com</p>
          <p><strong>العنوان:</strong> شارع الصحة، الجزائر العاصمة</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
