import React from 'react';
import services from '../../data/services';
import { Link } from 'react-router-dom';
import './Services.css';

const Services = () => {
  return (
    <div className="services-wrapper">
      <h2 className="services-title">خدماتنا</h2>
      <div className="services-container">
        {services.map((service, index) => (
          <Link to={`/services/${index}`} key={index} className="service-card">
            <img src={service.image} alt={service.name} />
            <div className="service-info">
              <h3>{service.name}</h3>
              <p>{service.body}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Services;
