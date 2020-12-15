import React, { useState } from "react";

export default function WeatherTemperature(props) {
  const [unit, setUnit] = useState("celsius");

  function showFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }
  function showCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }

  if (unit === "celsius") {
    return (
      <h2 className="temp-now">
        {Math.round(props.celsius)}
        <span className="celcius">
          <strong> °C|</strong>
        </span>
        <span className="fahrenheit-link">
          <a href="/" onClick={showFahrenheit}>
            °F
          </a>
        </span>
      </h2>
    );
  } else {
    let fahrenheit = (props.celsius * 9) / 5 + 32;
    return (
      <h2 className="temp-now">
        {Math.round(fahrenheit)}
        <span className="fahrenheit">
          <strong> °F|</strong>
        </span>
        <span className="celcius-link">
          <a href="/" onClick={showCelsius}>
            °C
          </a>
        </span>
      </h2>
    );
  }
}
