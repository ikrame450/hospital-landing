import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import services from '../data/services';
import './ServiceDetail.css';

const ServiceDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const service = services[parseInt(id)];

  if (!service) {
    return <div className="service-detail-container">الخدمة غير موجودة</div>;
  }

  return (
    <div className="service-detail-container">
      <h1 className="service-detail-title">{service.name}</h1>
      <div className="service-detail-content">
        <img
          className="service-detail-image"
          src={service.image}
          alt={service.name}
        />
        <p className="service-detail-body">
          {service.description || service.body}
        </p>
      </div>

      <button
        className="back-button"
        onClick={() => navigate('/services')}
      >
        ⬅ الرجوع إلى قائمة الخدمات
      </button>
    </div>
  );
};

export default ServiceDetail;
