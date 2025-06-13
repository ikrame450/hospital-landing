import React from 'react';
import './FacilitiesDetails.css';
import { Link } from 'react-router-dom';

const FacilitiesDetails = () => {
  return (
    <div className="facilities-details-page">
      {/* ✅ المربع الذي يحتوي النص */}
      <div className="info-box">
        <h2>تفاصيل المرافق</h2>
        <p>
          تقدم مرافقتنا بيئة آمنة ومتطورة تساعد على تقديم أفضل رعاية ممكنة للمريض.
          تشمل المرافق لدينا غرف عمليات مجهزة، مختبرات تحليل حديثة، وصالات انتظار مريحة.
          نحن نؤمن أن بيئة الرعاية الصحية تؤثر بشكل مباشر على نتائج العلاج، لذلك نهتم بأدق التفاصيل
          لجعل تجربة المريض أكثر راحة وفعالية.
        </p>
      </div>

      {/* ✅ زر الرجوع */}
      <Link to="/#facilities" className="back-button">الرجوع</Link>
    </div>
  );
};

export default FacilitiesDetails;
