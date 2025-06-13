
import "./Health.css";
import { Link } from 'react-router-dom';

const Health = () => {
  return (
    <div className="health-page">
      <div className="health-header">
        <h1>الصحة الطبية</h1>
        <p>نلتزم بتعزيز الصحة العامة من خلال برامج وقائية وفحوصات دورية.</p>
      </div>

      <div className="health-sections">
        <div className="health-card">
          <h2>الفحوصات الطبية</h2>
          <p>نوفر مجموعة من الفحوصات الشاملة للكشف المبكر عن الأمراض.</p>
        </div>

        <div className="health-card">
          <h2>التوعية الصحية</h2>
          <p>نقدم نصائح ومعلومات طبية لتعزيز أسلوب حياة صحي.</p>
        </div>

        <div className="health-card">
          <h2>برامج التطعيم</h2>
          <p>برامج تطعيم دورية للأطفال والكبار ضمن جدول زمني دقيق.</p>
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

export default Health;
