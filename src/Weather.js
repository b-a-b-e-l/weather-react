import React, { useState } from "react";
import axios from "axios";
import TodayFormatted from "./TodayFormatted";
import "./Weather.css";

export default function Weather() {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [timeData, setTimeData] = useState(null);
  function getLocationTime(response) {
    console.log(response.data);
    setTimeData(new Date(response.data.formatted));
  }
  console.log(timeData);
  function handleResponse(response) {
    console.log(response.data);
    setWeatherData({
      ready: true,
      city: response.data.name,
      temperatureNow: Math.round(response.data.main.temp),
      sky: response.data.weather.main,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
    });
    let lat = response.data.coord.lat;
    let lon = response.data.coord.lon;
    let timeDbKey = "S4RXUE2ZUA4K";
    let timeDbUrl = `https://api.timezonedb.com/v2.1/get-time-zone?key=${timeDbKey}&format=json&by=position&lat=${lat}&lng=${lon}`;
    axios.get(`${timeDbUrl}`).then(getLocationTime);
  }

  if (weatherData.ready) {
    return (
      <div className="container">
        <div className="input-group w-100">
          <input
            type="text"
            className="form-control city-input"
            placeholder="Enter a City. . ."
            aria-describedby="button-addon4"
          />
          <div className="input-group-append  " id="button-addon4">
            <button
              className="btn btn-outline-secondary search-button"
              type="submit"
            >
              Search!
            </button>
            <button
              className="btn btn-outline-secondary location-button"
              type="button"
            >
              My Location!
            </button>
          </div>
        </div>
        <div className="row">
          <div className="col-sm current-weather-card">
            <h1 className="city">{weatherData.city}</h1>
            <p className="day-today">
              <TodayFormatted date={timeData} />
            </p>
            <h2 className="temp-now">
              {weatherData.temperatureNow}
              <span className="celcius">°C</span>
            </h2>

            <h3 className="sky-description">{weatherData.sky}</h3>
            <ul className="weather-conditions">
              <li>Sunrise: 06:01</li>
              <li>Humidity:{weatherData.humidity}%</li>
              <li>Wind: {weatherData.wind}km/h</li>
            </ul>
          </div>
          <div className="col-sm forecast-card">
            <div className="row">
              <div className="col-sm forecast-list day-1">
                <h4>Mañana</h4>
                <h6>9°C</h6>
              </div>
            </div>
            <div className="row">
              <div className="col-sm forecast-list day-2">
                <h4>Pasado</h4>
                <h6>7°C</h6>
              </div>
            </div>
            <div className="row">
              <div className="col-sm forecast-list day-3">
                <h4>Traspasado</h4>
                <h6>7°C</h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = "0096e74278950fd9325fbc33e0f38fed";
    let city = "London";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);

    return "Loading...";
  }
}
