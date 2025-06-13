import "./doctors.css"
import sphere2 from "../../assets/images/Ellipse 2.png"
import sphere3 from "../../assets/images/Ellipse 3.png"
import Doctor from "../doctor/Doctor"
import { Link } from 'react-router-dom';

const Doctors = () => {
  return (
    <div className="doctors-container">
        <h3>أطبائنا </h3>
        <p>يعد العمل الجماعي و التواصل الفعال بين اعضاء الفريق  الطبي امرا بالغ الاهمية  <br /> لتقديم رعاية عالية الجودة للمرضى و ضمان نتائج صحية اجابية .</p>

        <img className="sphere2" src={sphere2} alt="sphere2" />
        <img className="sphere3" src={sphere3} alt="sphere3" />

        <div className="doctors-wrapper">
            <Doctor />
        </div>
<Link to="/doctors-details" className="more-doctors-btn">
  المزيد من الأطباء
</Link>

    </div>
  )
}

export default Doctors