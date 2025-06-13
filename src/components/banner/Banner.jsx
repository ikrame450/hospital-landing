// src/components/banner/Banner.jsx

import { useNavigate } from 'react-router-dom'; // ✅ استيراد useNavigate
import "./banner.css";
import ellipse from "../../assets/images/ellipse.png";
import doctor from "../../assets/images/banner-doctor.png";

const Banner = () => {
  const navigate = useNavigate(); // ✅ تعريف navigate

  return (
    <div className="banner-container">

      <div className="banner-content">

        <div className="banner-heading">
          <h2>كل شيء جيد<br />يبدأ<br />بصحة جيدة</h2>
        </div>

        <div className="banner-subheading">
          <p>
            نحن هنا لخدمة الناس من خلال رعاية تتمحور حول المريض لتقديم رعاية صحية متميزة من أجل الحياة.
          </p>
        </div>

        <div className="banner-buttons">
         <button className="banner-appointment-button" onClick={() => navigate('/request-opinion')}>
  طلب الرأي
</button>
          <button className="banner-learn-button" onClick={() => navigate('/learn-more')}>
      تعلم المزيد
    </button>
        </div>

      </div>

      <div className="banner-graphic">
        <img src={ellipse} alt="ellipse" />
        <img src={doctor} alt="doctor" />
      </div>

    </div>
  );
};

export default Banner;
