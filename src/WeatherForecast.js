import React from "react";

export default function WeatherForecast() {
  return (
    <div>
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
  );
}
