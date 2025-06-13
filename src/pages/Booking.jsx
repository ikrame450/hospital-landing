// src/pages/Booking.jsx
import React, { useState, useEffect } from 'react';
import './Booking.css';
import { db, auth } from '../firebase/firebaseConfig';
import { collection, addDoc } from 'firebase/firestore';
import { onAuthStateChanged } from 'firebase/auth';
import { FaCalendarAlt, FaUser, FaPhone, FaStethoscope, FaPaperPlane, FaEnvelope } from 'react-icons/fa';

const Booking = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: '',
    date: '',
  });

  const [userEmail, setUserEmail] = useState('');

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUserEmail(user.email);
      } else {
        alert("🚫 يجب تسجيل الدخول أولاً.");
        window.location.href = "/login";
      }
    });
    return () => unsubscribe();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addDoc(collection(db, "appointments"), {
        ...formData,
        email: userEmail,
        timestamp: new Date()
      });
      alert("✅ تم الحجز بنجاح!");
      setFormData({ name: '', phone: '', service: '', date: '' });
    } catch (error) {
      console.error("❌ خطأ أثناء الحجز:", error);
      alert("❌ حدث خطأ أثناء الحجز.");
    }
  };

  return (
    <div className="booking-container">
      <h1>حجز موعد</h1>
      <form className="booking-form" onSubmit={handleSubmit}>
        <label><FaUser /> الاسم الكامل:</label>
        <input type="text" name="name" value={formData.name} onChange={handleChange} required />

        <label><FaPhone /> رقم الهاتف:</label>
        <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required />

        <label><FaStethoscope /> نوع الخدمة:</label>
        <input type="text" name="service" value={formData.service} onChange={handleChange} required />

        <label><FaCalendarAlt /> التاريخ:</label>
        <input type="date" name="date" value={formData.date} onChange={handleChange} required />

        <label><FaEnvelope /> البريد الإلكتروني:</label>
        <input type="email" value={userEmail} disabled />

        <button type="submit"><FaPaperPlane /> إرسال</button>
      </form>
    </div>
  );
};

export default Booking;
