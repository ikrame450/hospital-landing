import "./LearnMore.css";
import { FaStethoscope, FaFlask, FaUserMd, FaHandshake, FaCheckCircle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const LearnMore = () => {
  const navigate = useNavigate();

  return (
    <div className="learn-more-container">

      <section className="section">
        <FaStethoscope className="icon" />
        <h2>الخدمات الطبية</h2>
        <p>نوفر مجموعة شاملة من الخدمات الصحية تشمل التطعيم، الفحوصات الدورية، الرعاية الذاتية، وعلاج الأمراض بدقة وجودة عالية.</p>
      </section>

      <section className="section alt">
        <FaUserMd className="icon" />
        <h2>الأطباء</h2>
        <p>فريقنا الطبي يتكون من نخبة من الأطباء المتخصصين ذوي الخبرة العالية، ملتزمون بتقديم أفضل رعاية صحية شخصية للمرضى.</p>
      </section>

      <section className="section">
        <FaFlask className="icon" />
        <h2>الفحوصات والمختبرات</h2>
        <p>نستخدم أحدث التقنيات في مختبراتنا لإجراء تحاليل دقيقة تساعد على الكشف المبكر والتشخيص السليم.</p>
      </section>

      <section className="section alt">
        <FaHandshake className="icon" />
        <h2>الشراكات</h2>
        <p>نتعاون مع مؤسسات طبية محلية ودولية لتعزيز خدماتنا الصحية وضمان الاستمرارية في تقديم أفضل رعاية.</p>
      </section>

      <section className="section">
        <FaCheckCircle className="icon" />
        <h2>جودة الرعاية</h2>
        <p>نلتزم بمعايير الجودة في جميع جوانب خدماتنا لضمان رضا المرضى وتحقيق أفضل النتائج الصحية الممكنة.</p>
      </section>

      <div className="back-button-container">
        <button className="back-button" onClick={() => navigate("/#facilities")}>
          الرجوع  
        </button>
      </div>
    </div>
  );
};

export default LearnMore;
