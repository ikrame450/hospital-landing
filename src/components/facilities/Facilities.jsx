import "./facilities.css";
import facility1 from "../../assets/images/facility1.jpg";
import facility2 from "../../assets/images/facility2.jpg";
import { useNavigate } from "react-router-dom";

const Facilities = () => {
  const navigate = useNavigate();

  return (
    <div id="facilities" className="facilities-container">
        
      <h3>مرافقتنا</h3>

      <div className="facilities-horizontal-layout">
        <img className="facility-side-image" src={facility1} alt="Facility Right" />

        <div className="facility-center-text">
          <h6>مرافقنا المتطورة هي أساس رعايتنا الصحية</h6>
          <p>
            نقدم بيئة حديثة ومتكاملة تحتوي على أحدث التقنيات والوسائل الطبية لدعم التشخيص والعلاج والراحة النفسية للمرضى.
            يتكامل كل عنصر من مرافقنا ليشكل منظومة علاجية متكاملة تضمن أفضل تجربة صحية ممكنة.
          </p>
        </div>

        <img className="facility-side-image" src={facility2} alt="Facility Left" />
      </div>

      <div className="facility-detail-button">
        <button onClick={() => navigate("/facilities-details")}>
          اكتشف المزيد
        </button>
      </div>
    </div>
  );
};

export default Facilities;
