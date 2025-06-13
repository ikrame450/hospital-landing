import "./footer.css";
import footerImage from "../../assets/images/footer logo.png";
import ellipse4 from "../../assets/images/Ellipse 4.png";
import ellipse5 from "../../assets/images/ellipse5.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <div className="footer-container">

        <div className="footer-logo">
          <img src={footerImage} alt="footer-logo" />
          <p>نحن عيادة طبية جديدة ,<br />نساعدك على حياة افضل .</p>
        </div>

        <div className="footer-medic">
          <ul className="footer-lists">
            <li>ميديك</li>
            <li><Link to="/">الرئيسة</Link></li>
            <li><Link to="/care">الرعاية الطبية</Link></li>
            <li><Link to="/health">الصحة الطبية</Link></li>
            <li><Link to="/examinations">الفحص الطبية</Link></li>
            <li><Link to="/lab">المختبر الطبي</Link></li>
          </ul>
        </div>

        <div className="footer-social-media">
          <ul className="footer-lists">
            <li>وسائل التواصل الاجتماعي</li>

            <li>
      <a
href="https://www.facebook.com/people/%D9%85%D8%B3%D8%AA%D8%B4%D9%81%D9%89-%D8%A7%D9%84%D8%AC%D8%B2%D8%A7%D8%A6%D8%B1-%D8%A7%D9%84%D8%AA%D8%AE%D8%B5%D8%B5%D9%8A/100093225066936/"        target="_blank"
        rel="noopener noreferrer"
      >
         فيسبوك
      </a>
    </li>
          </ul>
        </div>

        <div className="footer-contact">
          <ul className="footer-lists">
            <li>للتواصل</li>
            <li>الجزائر, بسكرة, اولاد جلال</li>
            <li>+33 123 456 789</li>
            <li>medi@test.com</li>
          </ul>
        </div>

        <img className="footer-ellipse1" src={ellipse4} alt="ellipse4" />
        <img className="footer-ellipse2" src={ellipse5} alt="ellipse5" />
      </div>

     
    </>
  );
};

export default Footer;
