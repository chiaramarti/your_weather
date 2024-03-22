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

  return (
    <div>
      <Navbar onCityChange={handleCityChange} />
      <WeatherApp city={city} />
    </div>
  );
}

export default App;
