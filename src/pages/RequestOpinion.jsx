// ✅ RequestOpinion.jsx - مضاف إليه حقل البريد الإلكتروني

import React, { useState } from 'react';
import { FaEnvelopeOpenText, FaUserMd, FaComments, FaArrowLeft, FaPaperPlane } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './RequestOpinion.css';
import { db } from '../firebase/firebaseConfig';
import { collection, addDoc } from 'firebase/firestore';

const RequestOpinion = () => {
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    specialization: '',
    email: '', // ✅ مضاف
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addDoc(collection(db, 'opinions'), {
        name: formData.name,
        age: formData.age,
        specialization: formData.specialization,
        email: formData.email, // ✅ مضاف إلى Firestore
        message: formData.message,
        timestamp: new Date(),
      });

      alert('✅ تم إرسال الطلب بنجاح!');

      setFormData({
        name: '',
        age: '',
        specialization: '',
        email: '',
        message: '',
      });
    } catch (error) {
      console.error('❌ حدث خطأ أثناء الإرسال:', error);
      alert('❌ حدث خطأ أثناء إرسال الطلب.');
    }
  };

  return (
    <div className="request-container">
      <h1>طلب الرأي الطبي</h1>
      <p>نوفر لك خدمة طلب رأي طبي ثانٍ من أطباء مختصين لتحديد التشخيص والعلاج الأفضل لك.</p>

      <div className="request-sections">
        <div className="request-box">
          <FaUserMd className="icon" />
          <h3>أطباء خبراء</h3>
          <p>فريق من الأطباء المعتمدين وذوي خبرة عالية يراجعون حالتك ويقدمون رأيهم المهني.</p>
        </div>
        <div className="request-box">
          <FaEnvelopeOpenText className="icon" />
          <h3>مراجعة طبية مفصلة</h3>
          <p>نقوم بتحليل ملفاتك وتقاريرك الطبية للحصول على فهم شامل لحالتك الصحية.</p>
        </div>
        <div className="request-box">
          <FaComments className="icon" />
          <h3>استشارة تفاعلية</h3>
          <p>يمكنك التفاعل مع الطبيب عبر دردشة أو مكالمة لمناقشة الرأي المقدم.</p>
        </div>
      </div>

      <form className="request-form" onSubmit={handleSubmit}>
        <h2>إرسال حالتك الطبية</h2>
        <input
          type="text"
          name="name"
          placeholder="الاسم الكامل"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="number"
          name="age"
          placeholder="العمر"
          value={formData.age}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="specialization"
          placeholder="التخصص المطلوب"
          value={formData.specialization}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="البريد الإلكتروني"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <textarea
          name="message"
          placeholder="اكتب ملاحظاتك أو وصف حالتك..."
          rows="4"
          value={formData.message}
          onChange={handleChange}
          required
        ></textarea>
        <button type="submit" className="submit-button">
          <FaPaperPlane /> إرسال الطلب
        </button>
      </form>

      <Link to="/" className="back-button">
        <FaArrowLeft /> العودة إلى الرئيسية
      </Link>
    </div>
  );
};

export default RequestOpinion;
