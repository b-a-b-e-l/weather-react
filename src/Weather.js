import React, { useState } from "react";

import "./Weather.css";
import axios from "axios";

export default function Weather() {
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
          <h1 className="city">Madrid</h1>
          <p className="day-today">Thursday 07:45</p>
          <h2 className="temp-now">7°C</h2>

          <h3 className="sky-description">Clear</h3>
          <ul className="weather-conditions">
            <li>Chance of Rain: 1%</li>
            <li>Humidity: 63%</li>
            <li>Wind: 21km/h</li>
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
