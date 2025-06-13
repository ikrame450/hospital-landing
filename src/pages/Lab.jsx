
import "./Lab.css";
import { Link } from 'react-router-dom';

const Lab = () => {
  return (
    <div className="lab-page">
      <div className="lab-header">
        <h1>المختبر الطبي</h1>
        <p>نقدّم تحاليل مخبرية دقيقة وسريعة بأعلى معايير الجودة.</p>
      </div>

      <div className="lab-content">
        <div className="lab-section">
          <h2>خدمات المختبر</h2>
          <ul>
            <li>تحاليل الدم الكاملة</li>
            <li>تحاليل الهرمونات</li>
            <li>تحاليل المناعة</li>
            
          </ul>
        </div>

        <div className="lab-section">
          <h2>نتائج التحاليل</h2>
          <p>تُسلّم النتائج خلال 24 إلى 48 ساعة، ويمكن تحميلها عبر الموقع.</p>
        </div>

        <div className="lab-section">
          <h2>احجز موعدًا</h2>
         <Link to="/booking">
  <button className="booking-btn">احجز الآن</button>
</Link>
        </div>
      </div>
    </div>
  );
};

export default Lab;
