import React from "react";
import ForecastIcon from "./ForecastIcon";

export default function WeatherForecastDay(props) {
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = new Date(props.data.dt * 1000);

  return (
    <div>
      <h4>{days[day.getDay()]}</h4>
      <ForecastIcon
        code={props.data.weather[0].icon}
        alt={props.data.weather[0].main}
      />
      <h6>{Math.round(props.data.main.temp)}°C</h6>
    </div>
  );
}
