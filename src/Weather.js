import React, { useState } from "react";
import "./Weather.css";
import axios from "axios";

export default function Weather() {
  const [city, setCity] = useState(null);
  const [loaded, setLoaded] = useState(false);
  const [weather, setWeather] = useState({});

  function showTemperature(response) {
    setLoaded(true);
    console.log(response.data);
    setWeather({
      name: response.data.name,
      temperature: Math.round(response.data.main.temp),
      sky: response.data.weather[0].main,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=44b265d1d7325d3b65b118085f75bc5c&units=metric`;
    axios.get(url).then(showTemperature);
  }

  function searchCity(event) {
    setCity(event.target.value);
  }

  let form = (
    <form onSubmit={handleSubmit} className="search-submit">
      <input
        type="search"
        placeholder="Enter a City . . ."
        onChange={searchCity}
      />
      <input type="submit" value="Search" />
    </form>
  );
  if (loaded) {
    return (
      <div>
        {form}
        <h3>{weather.name}</h3>
        <p> Temperature: {weather.temperature}°C </p>
        <p> Humidity: {weather.humidity}%</p>
        <p> Wind: {weather.wind}km/h</p>
        <p> Sky: {weather.sky}</p>
        <img src={weather.icon} alt={weather.sky} />
      </div>
    );
  } else {
    return form;
  }
}
