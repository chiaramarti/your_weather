import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Badge } from 'react-bootstrap';
import WeatherInfo from './WeatherInfo';
import ForecastCard from './ForecastCard';

const WeatherApp = ({ city }) => {
  const [cityWeather, setCityWeather] = useState(null);
  const [forecast, setForecast] = useState([]);

  useEffect(() => {
    fetchCityWeather(city);
    fetchForecast(city);
  }, [city]);

  const fetchCityWeather = (city) => {
    const apiKey = '39e4200803c7b4ffeb5993e8fb481e49';
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    fetch(apiUrl)
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Errore nel recupero dei dati meteo');
      })
      .then(data => {
        setCityWeather(data);
      })
      .catch(error => {
        console.error('Errore:', error);
      });
  };

  const fetchForecast = (city) => {
    const apiKey = '39e4200803c7b4ffeb5993e8fb481e49';
    const apiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=metric`;
  
    fetch(apiUrl)
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Errore nel recupero dei dati meteo');
      })
      .then(data => {
        const dailyForecast = {};
        data.list.forEach(item => {
          const date = new Date(item.dt * 1000);
          const day = date.toLocaleDateString('it-IT', { weekday: 'short' });
          if (!dailyForecast[day]) {
            dailyForecast[day] = {
              day: day,
              temperature: item.main.temp,
              weatherIcon: item.weather[0].icon
            };
          }
        });
      
        // Estraiamo le previsioni per i prossimi 5 giorni a partire da domani
        const allDays = Object.values(dailyForecast);
        const startingIndex = allDays.findIndex(day => day.day === new Date().toLocaleDateString('it-IT', { weekday: 'short' })) + 1;
        const forecastData = allDays.slice(startingIndex, startingIndex + 5);
        setForecast(forecastData);
      })
      
      .catch(error => {
        console.error('Errore:', error);
      });
  };


  return (
    <div>
      <Container fluid>
        <Row className="mt-3">
          {/* Se sono disponibili i dati meteo della città corrente, mostra il nome della città e l'eventuale badge per l'allerta meteo */}
          {cityWeather && (
            <div className="d-flex align-items-center">
              <h3 className="fw-bold text-light text-start ms-3">{cityWeather.name}</h3>
              <Badge bg="warning" className="ms-3 fs-6 text-uppercase rounded-pill">Allerta meteo</Badge>
            </div>
          )}

          {/* Colonna per mostrare le informazioni meteo attuali della città corrente */}
          <Col md={4}>
            {cityWeather && (
              <div className="location-info d-flex align-items-center">
                <i className="bi bi-house-fill me-2"></i>
              </div>
            )}
            <div className="current-weather mt-3">
              {cityWeather && (
                <WeatherInfo
                  cityName={cityWeather.name}
                  temperature={cityWeather.main.temp}
                  weatherIcon={`http://openweathermap.org/img/wn/${cityWeather.weather[0].icon}.png`}
                  windSpeed={cityWeather.wind.speed}
                />
              )}
            </div>
          </Col>

          {/* Colonna per mostrare le previsioni per i prossimi 5 giorni */}
          <Col md={8}>
            <div className="forecast mt-3" style={{ background: '#285B8C', borderRadius: '10px', padding: '20px', color: 'white' }}>
              <h3 className="mb-4 fs-4">Previsioni per i prossimi 5 giorni</h3>
              <Row className="justify-content-center">
                {/* Mappa le previsioni e genera il componente ForecastCard per ciascuna */}
                {forecast.map((dayForecast, index) => (
                  <ForecastCard
                    key={index}
                    day={dayForecast.day}
                    temperature={dayForecast.temperature}
                    weatherIcon={`http://openweathermap.org/img/wn/${dayForecast.weatherIcon}.png`}
                  />
                ))}
              </Row>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default WeatherApp;




