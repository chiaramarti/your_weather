import React from 'react';
import { Col } from 'react-bootstrap';

const ForecastCard = ({ day, temperature, weatherIcon }) => {
  return (
    <Col xs={6} md={4} lg={2} className="mb-3">
      <div className="forecast-card p-3 text-center" style={{ background: '#1E4269', borderRadius: '10px' }}>
        <h5>{day}</h5>
        <img src={weatherIcon} alt="Weather Icon" className="mb-2" style={{ height: '50px' }} />
        <p>{temperature}°C</p>
      </div>
    </Col>
  );
}

export default ForecastCard;
