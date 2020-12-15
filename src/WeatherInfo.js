import React from "react";
import TodayFormatted from "./TodayFormatted";
import WeatherIcon from "./WeatherIcon";
import DynamicFont from "react-dynamic-font";
import WeatherTemperature from "./WeatherTemperature";

export default function WeatherInfo(props) {
  return (
    <div>
      <div className="city">
        <DynamicFont content={props.data.city} />
      </div>
      <p className="day-today">
        <TodayFormatted date={props.time} />
      </p>
      <div>
        <WeatherTemperature celsius={props.data.temperatureNow} />
      </div>
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
  );
}
