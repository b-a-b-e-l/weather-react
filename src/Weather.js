import React, { useState } from "react";
import axios from "axios";
import WeatherInfo from "./WeatherInfo";
import "./Weather.css";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [timeData, setTimeData] = useState(new Date());
  const [city, setCity] = useState(props.defaultCity);
  function getLocationTime(response) {
    setTimeData(new Date(response.data.formatted));
  }
  console.log(timeData);
  function handleResponse(response) {
    console.log(response.data);
    setWeatherData({
      ready: true,
      city: response.data.name,
      country: response.data.sys.country,
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
              >
                My Location!
              </button>
            </div>
          </div>
        </form>
        <WeatherInfo data={weatherData} time={timeData} />
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
}
