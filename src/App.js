import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Navbar from "./components/Navbar";
import WeatherApp from "./components/WeatherApp";

function App() {
  const [city, setCity] = useState("Bologna");

  const handleCityChange = (newCity) => {
    setCity(newCity);
  };

  const handleSearch = (searchCity) => {
    if (searchCity.trim() !== "") {
      setCity(searchCity); // Imposta la città di ricerca come città attiva
    }
  };

  return (
    <div>
      <Navbar onCityChange={handleCityChange} onSearch={handleSearch} /> {/* Aggiunge la prop onSearch */}
      <WeatherApp city={city} />
    </div>
  );
}

export default App;
