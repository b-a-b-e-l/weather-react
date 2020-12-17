import React from "react";

export default function WeatherTemperature(props) {
  return (
    <h2 className="temp-now">
      {Math.round(props.celsius)}
      <span className="celcius">°C</span>
    </h2>
  );
}
