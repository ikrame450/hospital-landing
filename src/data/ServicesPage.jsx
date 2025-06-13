
import { Link } from "react-router-dom";
import "./ServicesPage.css";

const ServicesPage = () => {
  return (
    <div className="services-page">
      <h2>الخدمات المتوفرة</h2>
      <div className="services-grid">
        {services.map((service, index) => (
          <Link to={`/services/${index}`} key={index} className="service-card">
            <img src={service.image} alt={service.name} />
            <h3>{service.name}</h3>
            <p>{service.body}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ServicesPage;
