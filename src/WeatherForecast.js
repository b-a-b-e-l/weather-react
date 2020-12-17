import React, { useState } from "react";
import axios from "axios";
import WeatherForecastDay from "./WeatherForecastDay";

export default function WeatherForecast(props) {
  const [loaded, setLoaded] = useState(false);
  const [forecast, setForecast] = useState(null);

  function handleForecast(response) {
    console.log(response.data);
    setForecast(response.data);
    setLoaded(true);
  }

  if (
    loaded &&
    props.city === forecast.city.name + "," + forecast.city.country
  ) {
    return (
      <div>
        <div className="row">
          <div className="col-sm forecast-list day-1">
            <WeatherForecastDay data={forecast.list[7]} />
          </div>
        </div>
        <div className="row">
          <div className="col-sm forecast-list day-2">
            <WeatherForecastDay data={forecast.list[15]} />
          </div>
        </div>
        <div className="row">
          <div className="col-sm forecast-list day-3">
            <WeatherForecastDay data={forecast.list[23]} />
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = "0096e74278950fd9325fbc33e0f38fed";
    let forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${props.city}&appid=${apiKey}&units=metric`;
    axios.get(forecastUrl).then(handleForecast);

    return "loading. . . ";
  }
}
