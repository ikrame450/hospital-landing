
import "./Exam.css";
import { Link } from 'react-router-dom';

const Exam = () => {
  return (
    <div className="exam-page">
      <div className="exam-header">
        <h1>فحص طبي شامل</h1>
        <p>نقدّم خدمات فحص طبي متكاملة باستخدام أحدث التقنيات.</p>
      </div>

      <div className="exam-content">
        <div className="exam-section">
          <h2>أنواع الفحوصات</h2>
          <ul>
            <li>فحص الدم الشامل</li>
            <li>فحص الأشعة والتصوير الطبي</li>
            <li>فحص القلب (ECG)</li>
            <li>فحص السكري والكوليسترول</li>
            <li>فحص البصر والسمع</li>
          </ul>
        </div>

        <div className="exam-section">
          <h2>مواعيد الفحوصات</h2>
          <p>من الأحد إلى الخميس - من الساعة 8 صباحًا إلى 4 مساءً</p>
        </div>

        <div className="exam-section">
          <h2>احجز موعدًا</h2>
<Link to="/booking">
  <button className="booking-btn">احجز الآن</button>
</Link>        </div>
      </div>
    </div>
  );
};

export default Exam;
