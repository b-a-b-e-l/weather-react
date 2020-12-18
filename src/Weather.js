import React, { useState } from "react";
import axios from "axios";
import WeatherInfo from "./WeatherInfo";
import WeatherForecast from "./WeatherForecast";
import "./Weather.css";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [timeData, setTimeData] = useState(new Date());
  const [city, setCity] = useState(props.defaultCity);
  function getLocationTime(response) {
    setTimeData(new Date(response.data.formatted));
  }

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      lat: response.data.coord.lat,
      lon: response.data.coord.lon,
      fullcity: response.data.name + "," + response.data.sys.country,
      city: response.data.name,
      temperatureNow: Math.round(response.data.main.temp),
      sky: response.data.weather[0].main,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      icon: response.data.weather[0].icon,
      maxtemp: Math.round(response.data.main.temp_max),
      mintemp: Math.round(response.data.main.temp_min),
    });
    let lat = response.data.coord.lat;
    let lon = response.data.coord.lon;
    let timeDbKey = "S4RXUE2ZUA4K";
    let timeDbUrl = `https://api.timezonedb.com/v2.1/get-time-zone?key=${timeDbKey}&format=json&by=position&lat=${lat}&lng=${lon}`;
    axios.get(`${timeDbUrl}`).then(getLocationTime);
  }
  function search() {
    const apiKey = "0096e74278950fd9325fbc33e0f38fed";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }
  function handleCityChange(event) {
    setCity(event.target.value);
  }
  function findLocation(position) {
    const apiKey = "0096e74278950fd9325fbc33e0f38fed";
    let latitude = position.coords.latitude;
    let longitude = position.coords.longitude;
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  function getCurrentLocation(event) {
    navigator.geolocation.getCurrentPosition(findLocation);
  }

  if (weatherData.ready) {
    return (
      <div className="container">
        <form onSubmit={handleSubmit}>
          <div className="input-group w-100">
            <input
              type="text"
              className="form-control city-input"
              placeholder="Enter a City. . ."
              aria-describedby="button-addon4"
              onChange={handleCityChange}
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
                onClick={getCurrentLocation}
              >
                My Location!
              </button>
            </div>
          </div>
        </form>
        <div className="row">
          <div className="col-sm current-weather-card">
            <WeatherInfo data={weatherData} time={timeData} />
          </div>
          <div className="col-sm forecast-card">
            <WeatherForecast
              latitude={weatherData.lat}
              longitude={weatherData.lon}
            />
          </div>
        </div>
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
}
