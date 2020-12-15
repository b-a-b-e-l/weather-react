import React from "react";
import TodayFormatted from "./TodayFormatted";
import WeatherIcon from "./WeatherIcon";
import DynamicFont from "react-dynamic-font";

export default function WeatherInfo(props) {
  return (
    <div>
      <div className="row">
        <div className="col-sm current-weather-card">
          <div className="city">
            <DynamicFont content={props.data.city} />
          </div>
          <p className="day-today">
            <TodayFormatted date={props.time} />
          </p>
          <h2 className="temp-now">
            {props.data.temperatureNow}
            <span className="celcius">°C</span>
          </h2>
          <div className="current-icon-container">
            <WeatherIcon code={props.data.icon} alt={props.data.sky} />
          </div>
          <h3 className="sky-description">{props.data.sky}</h3>
          <ul className="weather-conditions">
            <li>
              Today: Max: <strong>{props.data.maxtemp}°C </strong> | Min:{" "}
              <strong>
                {props.data.mintemp}
                °C
              </strong>
            </li>
            <li>Humidity: {props.data.humidity} %</li>
            <li>Wind: {props.data.wind} km/h</li>
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
}
