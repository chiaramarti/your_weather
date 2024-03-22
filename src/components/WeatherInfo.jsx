import React from 'react';
import { Card } from 'react-bootstrap';

const WeatherInfo = ({ cityName, temperature, weatherIcon, windSpeed }) => {
  return (
    <Card className="p-3 text-center weather-info" style={{ borderRadius: '10px' }}>
      <Card.Body>
        <Card.Title className="mb-4">{cityName}</Card.Title>
        <img src={weatherIcon} alt="Weather Icon" className="mb-3" style={{ height: '100px' }} />
        <p className="mb-1">Temperatura: {temperature}°C</p>
        {windSpeed && <p className="mb-0">Velocità del vento: {windSpeed} km/h</p>}
      </Card.Body>
    </Card>
  );
}

export default WeatherInfo;
