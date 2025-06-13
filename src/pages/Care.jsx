// src/pages/Care.jsx
import React from "react";
import "./Care.css";
import { Link } from "react-router-dom";
import { FaCalendarCheck } from "react-icons/fa";

const Care = () => {
  return (
    <div className="care-page">
      <div className="care-header">
        <h1>الرعاية الطبية</h1>
        <p>نوفّر رعاية صحية متكاملة تشمل كل ما يحتاجه المريض من دعم ومتابعة.</p>
      </div>

      <div className="care-content">
        <div className="care-section">
          <h2>أنواع الرعاية</h2>
          <ul>
            <li>الرعاية الأولية</li>
            <li>رعاية ما بعد العمليات</li>
            <li>رعاية المسنين</li>
            <li>الرعاية المنزلية</li>
            <li>رعاية الحالات المزمنة</li>
          </ul>
        </div>

        <div className="care-section">
          <h2>مميزاتنا</h2>
          <p>فريق طبي ذو خبرة، خدمات طبية متكاملة، متابعة دقيقة، دعم على مدار الساعة.</p>
        </div>

        <div className="care-section">
          <h2>احجز رعايتك</h2>
          <Link to="/booking">
            <button className="booking-btn">
              <FaCalendarCheck /> احجز الآن
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Care;
